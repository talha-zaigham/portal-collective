// Content moderation system for Portal Collective Ink
// Filters out garbage, spam, and low-quality perceptions

interface ModerationResult {
  isApproved: boolean
  reason?: string
  confidence: number
  flags: string[]
}

interface QualityMetrics {
  repetitionScore: number
  meaningfulWords: number
  totalWords: number
  characterVariety: number
  lengthScore: number
}

export class ContentModerator {
  private static readonly MIN_LENGTH = 10
  private static readonly MAX_LENGTH = 500
  private static readonly MIN_MEANINGFUL_WORDS = 3
  private static readonly MAX_REPETITION_RATIO = 0.6
  private static readonly MIN_CHARACTER_VARIETY = 0.3

  // Common spam patterns
  private static readonly SPAM_PATTERNS = [
    /^(.)\1{10,}$/, // Repeated single character (like "aaaaaaaaaa")
    /^[a-z]{1,3}([a-z]{1,3}){5,}$/i, // Repeated short patterns (like "asdasdasd")
    /^(.)\1{3,}(.)\2{3,}$/, // Multiple repeated characters
    /^[0-9\s\-_\.]{10,}$/, // Only numbers and symbols
    /^(.)\1{2,}(.)\2{2,}(.)\3{2,}$/, // Triple character repetition
  ]

  // Meaningless words/phrases
  private static readonly MEANINGLESS_PATTERNS = [
    /^(test|testing|hello|hi|hey|asd|qwe|zxc|123|abc|xyz)\s*$/i,
    /^(lorem|ipsum|dolor|sit|amet)/i,
    /^(spam|garbage|trash|nonsense|random)/i,
  ]

  // Quality words that indicate meaningful content
  private static readonly QUALITY_INDICATORS = [
    'see', 'look', 'appears', 'reminds', 'feels', 'seems', 'like', 'resembles',
    'shape', 'form', 'figure', 'image', 'picture', 'scene', 'landscape',
    'face', 'person', 'animal', 'creature', 'being', 'entity',
    'color', 'dark', 'light', 'bright', 'shadow', 'glow',
    'movement', 'dance', 'flow', 'energy', 'force', 'power',
    'beautiful', 'mysterious', 'strange', 'unique', 'interesting',
    'cosmic', 'galaxy', 'star', 'universe', 'space', 'void',
    'ancient', 'eternal', 'infinite', 'divine', 'sacred', 'holy'
  ]

  static moderateContent(text: string): ModerationResult {
    const trimmedText = text.trim()
    
    // Basic validation
    if (!trimmedText) {
      return {
        isApproved: false,
        reason: 'Empty submission',
        confidence: 1.0,
        flags: ['empty']
      }
    }

    if (trimmedText.length < this.MIN_LENGTH) {
      return {
        isApproved: false,
        reason: 'Too short to be meaningful',
        confidence: 0.9,
        flags: ['too_short']
      }
    }

    if (trimmedText.length > this.MAX_LENGTH) {
      return {
        isApproved: false,
        reason: 'Exceeds maximum length',
        confidence: 1.0,
        flags: ['too_long']
      }
    }

    // Check for spam patterns
    for (const pattern of this.SPAM_PATTERNS) {
      if (pattern.test(trimmedText)) {
        return {
          isApproved: false,
          reason: 'Detected spam pattern',
          confidence: 0.95,
          flags: ['spam_pattern']
        }
      }
    }

    // Check for meaningless patterns
    for (const pattern of this.MEANINGLESS_PATTERNS) {
      if (pattern.test(trimmedText)) {
        return {
          isApproved: false,
          reason: 'Meaningless content detected',
          confidence: 0.9,
          flags: ['meaningless']
        }
      }
    }

    // Analyze content quality
    const quality = this.analyzeQuality(trimmedText)
    
    // Check repetition score
    if (quality.repetitionScore > this.MAX_REPETITION_RATIO) {
      return {
        isApproved: false,
        reason: 'Too much repetition',
        confidence: 0.85,
        flags: ['high_repetition']
      }
    }

    // Check meaningful words
    if (quality.meaningfulWords < this.MIN_MEANINGFUL_WORDS) {
      return {
        isApproved: false,
        reason: 'Insufficient meaningful content',
        confidence: 0.8,
        flags: ['low_meaning']
      }
    }

    // Check character variety
    if (quality.characterVariety < this.MIN_CHARACTER_VARIETY) {
      return {
        isApproved: false,
        reason: 'Low character variety (likely spam)',
        confidence: 0.9,
        flags: ['low_variety']
      }
    }

    // Calculate overall quality score
    const qualityScore = this.calculateQualityScore(quality)
    
    if (qualityScore < 0.3) {
      return {
        isApproved: false,
        reason: 'Low overall quality',
        confidence: 0.7,
        flags: ['low_quality']
      }
    }

    // Approved
    return {
      isApproved: true,
      confidence: qualityScore,
      flags: []
    }
  }

  private static analyzeQuality(text: string): QualityMetrics {
    const words = text.toLowerCase().split(/\s+/).filter(word => word.length > 0)
    const totalWords = words.length
    
    // Count meaningful words
    const meaningfulWords = words.filter(word => 
      this.QUALITY_INDICATORS.some(indicator => 
        word.includes(indicator) || indicator.includes(word)
      )
    ).length

    // Calculate repetition score
    const repetitionScore = this.calculateRepetitionScore(text)
    
    // Calculate character variety
    const uniqueChars = new Set(text.toLowerCase().replace(/\s/g, '')).size
    const totalChars = text.replace(/\s/g, '').length
    const characterVariety = uniqueChars / Math.max(totalChars, 1)

    // Length score (optimal around 50-200 characters)
    const lengthScore = this.calculateLengthScore(text.length)

    return {
      repetitionScore,
      meaningfulWords,
      totalWords,
      characterVariety,
      lengthScore
    }
  }

  private static calculateRepetitionScore(text: string): number {
    const words = text.toLowerCase().split(/\s+/)
    const wordCounts = new Map<string, number>()
    
    words.forEach(word => {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1)
    })

    const maxCount = Math.max(...wordCounts.values())
    return maxCount / words.length
  }

  private static calculateLengthScore(length: number): number {
    // Optimal length is around 50-200 characters
    if (length < 20) return 0.2
    if (length < 50) return 0.5
    if (length < 200) return 1.0
    if (length < 300) return 0.8
    return 0.6
  }

  private static calculateQualityScore(quality: QualityMetrics): number {
    const weights = {
      repetition: 0.3,
      meaningful: 0.3,
      variety: 0.2,
      length: 0.2
    }

    const repetitionScore = 1 - quality.repetitionScore
    const meaningfulScore = Math.min(quality.meaningfulWords / 5, 1)
    const varietyScore = quality.characterVariety
    const lengthScore = quality.lengthScore

    return (
      repetitionScore * weights.repetition +
      meaningfulScore * weights.meaningful +
      varietyScore * weights.variety +
      lengthScore * weights.length
    )
  }

  // Helper method to get moderation statistics
  static getModerationStats(): object {
    return {
      minLength: this.MIN_LENGTH,
      maxLength: this.MAX_LENGTH,
      minMeaningfulWords: this.MIN_MEANINGFUL_WORDS,
      maxRepetitionRatio: this.MAX_REPETITION_RATIO,
      minCharacterVariety: this.MIN_CHARACTER_VARIETY,
      qualityIndicators: this.QUALITY_INDICATORS.length,
      spamPatterns: this.SPAM_PATTERNS.length
    }
  }
}

// Export for use in API routes
export const moderateSubmission = (text: string): ModerationResult => {
  return ContentModerator.moderateContent(text)
}
