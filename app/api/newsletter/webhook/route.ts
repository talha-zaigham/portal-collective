import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Webhook endpoint for n8n integration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verify webhook signature (add your n8n webhook secret)
    const signature = request.headers.get('x-n8n-signature')
    const expectedSignature = process.env.N8N_WEBHOOK_SECRET
    
    if (expectedSignature && signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 401 }
      )
    }

    const { action, data } = body

    switch (action) {
      case 'update_engagement':
        await prisma.newsletterSubscriber.update({
          where: { email: data.email },
          data: {
            lastEngagement: new Date(),
            preferences: {
              ...data.preferences,
              engagementScore: (data.preferences?.engagementScore || 0) + 1
            }
          }
        })
        break

      case 'update_preferences':
        await prisma.newsletterSubscriber.update({
          where: { email: data.email },
          data: {
            preferences: data.preferences
          }
        })
        break

      case 'unsubscribe':
        await prisma.newsletterSubscriber.update({
          where: { email: data.email },
          data: {
            status: 'unsubscribed',
            updatedAt: new Date()
          }
        })
        break

      case 'get_subscribers':
        const subscribers = await prisma.newsletterSubscriber.findMany({
          where: {
            status: 'active',
            ...(data.filters || {})
          },
          select: {
            id: true,
            email: true,
            subscriberType: true,
            source: true,
            preferences: true,
            lastEngagement: true,
            createdAt: true
          }
        })
        
        return NextResponse.json({
          success: true,
          subscribers,
          count: subscribers.length
        })

      default:
        return NextResponse.json(
          { error: 'Unknown action' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      message: `Action ${action} completed successfully`,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Newsletter webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

// Health check endpoint for n8n
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'Portal Collective Newsletter API',
    timestamp: new Date().toISOString(),
    endpoints: {
      signup: '/api/newsletter/signup',
      webhook: '/api/newsletter/webhook',
      subscribers: '/api/newsletter/signup?type=collector'
    }
  })
}
