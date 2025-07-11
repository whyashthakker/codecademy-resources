import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const note = await prisma.note.findUnique({
      where: { id: params.id }
    })

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 })
    }

    return NextResponse.json(note)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch note' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const { title, content } = await request.json()

    const note = await prisma.note.update({
      where: { id: params.id },
      data: { title, content }
    })

    return NextResponse.json(note)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update note' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    await prisma.note.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Note deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 })
  }
}