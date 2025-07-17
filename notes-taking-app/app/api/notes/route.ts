import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const MAX_TITLE_LENGTH = 200
const MAX_CONTENT_LENGTH = 10000

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

function validateInput(title: string, content: string): string | null {
  if (!title || typeof title !== 'string') {
    return 'Title is required and must be a string'
  }
  if (!content || typeof content !== 'string') {
    return 'Content is required and must be a string'
  }
  if (title.length > MAX_TITLE_LENGTH) {
    return `Title must be ${MAX_TITLE_LENGTH} characters or less`
  }
  if (content.length > MAX_CONTENT_LENGTH) {
    return `Content must be ${MAX_CONTENT_LENGTH} characters or less`
  }
  return null
}

export async function GET() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })
    return NextResponse.json(notes)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content } = body
    
    const validationError = validateInput(title, content)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const sanitizedTitle = sanitizeInput(title)
    const sanitizedContent = sanitizeInput(content)

    const note = await prisma.note.create({
      data: {
        title: sanitizedTitle,
        content: sanitizedContent
      }
    })

    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 })
  }
}