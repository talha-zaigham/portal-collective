import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prisma.$connect()
    const count = await prisma.submission.count()
    
    return NextResponse.json({ 
      message: "Database connected!", 
      submissionCount: count 
    })
  } catch (error) {
    return NextResponse.json({ 
      error: "Database connection failed",
      details: error 
    }, { status: 500 })
  }
}