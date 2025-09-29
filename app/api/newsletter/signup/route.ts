import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { email, subscriberType, source, timestamp } = body

    // Validate required fields
    if (!email || !subscriberType) {
      return NextResponse.json(
        { error: 'Email and subscriber type are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email }
    })

    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        // Reactivate unsubscribed user
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: {
            status: 'active',
            subscriberType,
            source,
            updatedAt: new Date()
          }
        })
      } else {
        // Update existing active subscriber
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: {
            subscriberType,
            source,
            updatedAt: new Date()
          }
        })
      }
    } else {
      // Create new subscriber
      await prisma.newsletterSubscriber.create({
        data: {
          email: email.trim().toLowerCase(),
          subscriberType,
          source: source || 'website',
          status: 'active',
          preferences: {
            welcomeSent: false,
            lastContentType: null,
            engagementScore: 0,
            aiPersonality: 'cosmic_philosopher'
          }
        }
      })
    }

    // Log successful signup for n8n webhook
    console.log(`Newsletter signup: ${email} (${subscriberType}) from ${source}`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to cosmic consciousness updates',
        subscriberType,
        timestamp: new Date().toISOString()
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

// Get subscriber data for n8n webhook
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const status = searchParams.get('status') || 'active'

    const whereClause: any = { status }
    if (type) {
      whereClause.subscriberType = type
    }

    const subscribers = await prisma.newsletterSubscriber.findMany({
      where: whereClause,
      select: {
        id: true,
        email: true,
        subscriberType: true,
        source: true,
        preferences: true,
        lastEngagement: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({
      success: true,
      subscribers,
      count: subscribers.length
    })

  } catch (error) {
    console.error('Newsletter fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    )
  }
}



