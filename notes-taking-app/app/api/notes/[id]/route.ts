import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

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

function validateId(id: string): boolean {
  return typeof id === 'string' && id.length > 0 && id.length <= 50
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    if (!validateId(params.id)) {
      return NextResponse.json({ error: 'Invalid note ID' }, { status: 400 })
    }

    const note = await prisma.note.findUnique({
      where: { id: params.id }
    })

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 })
    }

    return NextResponse.json(note)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to fetch note' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    if (!validateId(params.id)) {
      return NextResponse.json({ error: 'Invalid note ID' }, { status: 400 })
    }

    const body = await request.json()
    const { title, content } = body

    const validationError = validateInput(title, content)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const sanitizedTitle = sanitizeInput(title)
    const sanitizedContent = sanitizeInput(content)

    const note = await prisma.note.update({
      where: { id: params.id },
      data: { 
        title: sanitizedTitle, 
        content: sanitizedContent 
      }
    })

    return NextResponse.json(note)
  } catch (error) {
    console.error('Database error:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }
    }
    return NextResponse.json({ error: 'Failed to update note' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    
    if (!validateId(params.id)) {
      return NextResponse.json({ error: 'Invalid note ID' }, { status: 400 })
    }

    await prisma.note.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Note deleted successfully' })
  } catch (error) {
    console.error('Database error:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }
    }
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 })
  }
}