// Analytics tracking for Portal Collective Ink

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID = 'G-JETFDJK4PM'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('Analytics Event:', { action, category, label, value })
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } else {
    console.log('Analytics not available - gtag not found')
  }
}

// Portal Collective specific tracking functions
export const trackSubmission = (inkblotId: string, responseLength: number) => {
  event({
    action: 'submit_perception',
    category: 'engagement',
    label: `inkblot_${inkblotId}`,
    value: responseLength,
  })
}

export const trackVote = (submissionId: string) => {
  event({
    action: 'vote_submission',
    category: 'engagement',
    label: submissionId,
  })
}

export const trackCollectorInquiry = (budget: string) => {
  event({
    action: 'collector_inquiry',
    category: 'conversion',
    label: budget,
  })
}

export const trackGalleryView = (artworkId?: string) => {
  event({
    action: 'view_gallery',
    category: 'engagement',
    label: artworkId || 'all',
  })
}

export const trackCuratorAction = (action: string, submissionCount: number) => {
  event({
    action: `curator_${action}`,
    category: 'admin',
    label: `${submissionCount}_submissions`,
    value: submissionCount,
  })
}

// Track user engagement metrics
export const trackTimeOnPage = (page: string, timeSpent: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: page,
    value: Math.round(timeSpent / 1000), // Convert to seconds
  })
}

export const trackScrollDepth = (page: string, depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: page,
    value: depth,
  })
}

// Track conversion funnel
export const trackFunnelStep = (step: string, stepNumber: number) => {
  event({
    action: 'funnel_step',
    category: 'conversion',
    label: step,
    value: stepNumber,
  })
}

// Track error events
export const trackError = (error: string, context: string) => {
  event({
    action: 'error',
    category: 'technical',
    label: `${context}: ${error}`,
  })
}
