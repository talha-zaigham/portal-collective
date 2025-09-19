import { NextRequest, NextResponse } from 'next/server'
import { sendCollectorInquiry } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, company, interest, budget, message } = body

    // Validate required fields
    if (!name || !email || !interest || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Send email notification
    const emailResult = await sendCollectorInquiry({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || undefined,
      interest: interest.trim(),
      budget: budget.trim(),
      message: message.trim()
    })

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send inquiry. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    // Log successful inquiry for monitoring
    console.log(`New collector inquiry received from ${name} (${email})`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your interest! We will contact you within 24 hours to discuss your collection needs.',
        messageId: emailResult.messageId
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Collector inquiry error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
