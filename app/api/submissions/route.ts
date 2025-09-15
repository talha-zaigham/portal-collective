import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { userResponse, username, email, displayPref, consentGiven, inkblotId } = body

    // Validate required fields
    if (!userResponse || !consentGiven) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate response length
    if (userResponse.length > 300) {
      return NextResponse.json(
        { error: 'Response too long (max 300 characters)' },
        { status: 400 }
      )
    }

    // Create submission in database
    const submission = await prisma.submission.create({
      data: {
        inkblotId: inkblotId || 'A',
        userResponse: userResponse.trim(),
        username: username?.trim() || null,
        email: email?.trim() || null,
        displayPref: displayPref || 'anonymous',
        consentGiven,
        status: 'pending'
      }
    })

    // Log successful submission for monitoring
    console.log(`New submission received: ${submission.id} for inkblot ${submission.inkblotId}`)

    return NextResponse.json(
      { 
        success: true, 
        submission: {
          id: submission.id,
          status: submission.status,
          inkblotId: submission.inkblotId
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({
      where: {
        status: 'approved'
      },
      select: {
        id: true,
        inkblotId: true,
        userResponse: true,
        username: true,
        displayPref: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    })

    return NextResponse.json({ 
      submissions,
      count: submissions.length 
    })
  } catch (error) {
    console.error('Fetch submissions error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
