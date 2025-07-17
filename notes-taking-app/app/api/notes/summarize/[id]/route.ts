import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const MAX_CONTENT_LENGTH = 10000;
const MAX_SUMMARY_RETRIES = 3;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function validateContent(content: string): string | null {
  if (!content || typeof content !== 'string') {
    return 'Content is required and must be a string';
  }
  if (content.length > MAX_CONTENT_LENGTH) {
    return `Content must be ${MAX_CONTENT_LENGTH} characters or less`;
  }
  if (content.trim().length === 0) {
    return 'Content cannot be empty';
  }
  return null;
}

function sanitizeContent(content: string): string {
  return content.trim().replace(/[<>]/g, '');
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 });
    }

    const body = await req.json();
    const { content } = body;
    
    const validationError = validateContent(content);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const sanitizedContent = sanitizeContent(content);
    const prompt = `Summarize the following note content in a concise paragraph. Focus on key points and main ideas.\n\n${sanitizedContent}`;

    let attempts = 0;
    let summary = '';

    while (attempts < MAX_SUMMARY_RETRIES) {
      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are an expert at summarizing notes. Provide clear, concise summaries without markdown formatting.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.5,
          max_tokens: 300,
          response_format: { type: 'text' },
        });

        summary = completion.choices?.[0]?.message?.content?.trim() || '';
        
        if (summary.startsWith('```')) {
          summary = summary.replace(/```(json)?/g, '').replace(/```/g, '').trim();
        }
        
        if (summary && summary.length > 0) {
          break;
        }
        
        attempts++;
      } catch (openaiError) {
        console.error(`OpenAI API attempt ${attempts + 1} failed:`, openaiError);
        attempts++;
        
        if (attempts >= MAX_SUMMARY_RETRIES) {
          return NextResponse.json({ error: 'Failed to generate summary after multiple attempts' }, { status: 500 });
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
      }
    }

    if (!summary) {
      return NextResponse.json({ error: 'Failed to generate summary' }, { status: 500 });
    }

    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Summarization error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
