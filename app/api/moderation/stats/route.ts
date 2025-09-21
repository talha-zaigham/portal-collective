import { NextResponse } from 'next/server'
import { ContentModerator } from '@/lib/content-moderation'

export async function GET() {
  try {
    const stats = ContentModerator.getModerationStats()
    
    return NextResponse.json({
      success: true,
      stats,
      message: 'Content moderation system is active'
    })
  } catch (error) {
    console.error('Moderation stats error:', error)
    return NextResponse.json(
      { error: 'Failed to get moderation stats' },
      { status: 500 }
    )
  }
}
