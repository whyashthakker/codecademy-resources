import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();
    if (!content || typeof content !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid content' }, { status: 400 });
    }

    const prompt = `Summarize the following note content in a concise paragraph.\n\n${content}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an expert at summarizing notes.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.5,
      max_tokens: 300,
      response_format: { type: 'text' },
    });

    let summary = completion.choices?.[0]?.message?.content?.trim() || '';
    // Remove markdown/code fences if present
    if (summary.startsWith('```')) {
      summary = summary.replace(/```(json)?/g, '').replace(/```/g, '').trim();
    }
    if (!summary) {
      return NextResponse.json({ error: 'Failed to generate summary.' }, { status: 500 });
    }
    return NextResponse.json({ summary });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 });
  }
}
