import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { submissionId, voteType } = body

    console.log('Votes API called with:', { submissionId, voteType })

    if (!submissionId || !voteType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Find the submission
    const submission = await prisma.submission.findUnique({
      where: { id: submissionId }
    })

    if (!submission) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }

    // Update vote count
    const updatedSubmission = await prisma.submission.update({
      where: { id: submissionId },
      data: {
        votes: { increment: 1 }
      }
    })

    return NextResponse.json({
      success: true,
      submission: {
        id: updatedSubmission.id,
        votes: updatedSubmission.votes
      }
    })

  } catch (error) {
    console.error('Vote error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const inkblotId = searchParams.get('inkblotId')

    console.log('Votes GET API called with inkblotId:', inkblotId)

    const submissions = await prisma.submission.findMany({
      where: {
        status: { in: ['approved', 'pending'] }, // Include both approved and pending
        ...(inkblotId && { inkblotId })
      },
      select: {
        id: true,
        inkblotId: true,
        userResponse: true,
        username: true,
        displayPref: true,
        createdAt: true,
        votes: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    })

    return NextResponse.json({
      submissions: submissions.map(sub => ({
        ...sub,
        votes: sub.votes || 0
      }))
    })

  } catch (error) {
    console.error('Fetch votes error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}
