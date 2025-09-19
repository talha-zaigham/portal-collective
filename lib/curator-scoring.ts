// Curator scoring algorithm for Portal Collective submissions

// Rare and sophisticated words that indicate artistic depth
const RARE_WORDS = [
  'ethereal', 'luminous', 'prismatic', 'crystalline', 'iridescent', 'opalescent',
  'serpentine', 'undulating', 'cascading', 'spiraling', 'converging', 'diverging',
  'metamorphosis', 'transcendence', 'ephemeral', 'sublime', 'ineffable', 'mystical',
  'cosmic', 'celestial', 'stellar', 'nebular', 'galactic', 'universal',
  'consciousness', 'collective', 'unified', 'interconnected', 'synchronized',
  'portal', 'gateway', 'threshold', 'liminal', 'boundary', 'interface',
  'inkblot', 'symmetry', 'asymmetry', 'fractal', 'mandala', 'kaleidoscope',
  'void', 'abyss', 'chasm', 'depths', 'heights', 'infinity',
  'dance', 'rhythm', 'harmony', 'resonance', 'frequency', 'vibration',
  'memory', 'dream', 'vision', 'hallucination', 'illusion', 'mirage',
  'shadow', 'silhouette', 'contour', 'outline', 'form', 'essence'
]

// Emotional keywords that indicate strong artistic response
const EMOTIONAL_KEYWORDS = [
  'beautiful', 'stunning', 'breathtaking', 'mesmerizing', 'captivating',
  'powerful', 'intense', 'overwhelming', 'profound', 'deep', 'moving',
  'haunting', 'eerie', 'mysterious', 'enigmatic', 'puzzling', 'intriguing',
  'peaceful', 'serene', 'calm', 'tranquil', 'meditative', 'zen',
  'energetic', 'dynamic', 'vibrant', 'alive', 'pulsating', 'throbbing',
  'melancholy', 'nostalgic', 'wistful', 'yearning', 'longing', 'aching',
  'joyful', 'ecstatic', 'euphoric', 'blissful', 'radiant', 'glowing',
  'fearful', 'terrifying', 'ominous', 'foreboding', 'sinister', 'dark',
  'hopeful', 'inspiring', 'uplifting', 'transcendent', 'liberating'
]

// Art and creativity related terms
const ARTISTIC_TERMS = [
  'painting', 'sculpture', 'artwork', 'masterpiece', 'creation', 'composition',
  'brushstroke', 'texture', 'palette', 'hue', 'shade', 'tone',
  'perspective', 'dimension', 'depth', 'layers', 'overlapping', 'blending',
  'abstract', 'figurative', 'representational', 'symbolic', 'metaphorical',
  'expression', 'emotion', 'feeling', 'mood', 'atmosphere', 'ambiance',
  'narrative', 'story', 'journey', 'transformation', 'evolution', 'growth'
]

// Cosmic and spiritual terms (high value for this project)
const COSMIC_TERMS = [
  'universe', 'galaxy', 'star', 'planet', 'moon', 'sun', 'cosmos',
  'spirit', 'soul', 'essence', 'being', 'existence', 'reality',
  'dimension', 'realm', 'plane', 'world', 'space', 'time',
  'energy', 'force', 'power', 'strength', 'vitality', 'life',
  'birth', 'death', 'rebirth', 'cycle', 'rhythm', 'flow',
  'connection', 'unity', 'oneness', 'wholeness', 'completeness'
]

export interface SubmissionScore {
  totalScore: number
  breakdown: {
    rareWords: number
    emotionalKeywords: number
    artisticTerms: number
    cosmicTerms: number
    length: number
    uniqueness: number
  }
  highlights: string[]
}

export function scoreSubmission(response: string): SubmissionScore {
  const words = response.toLowerCase().split(/\s+/)
  const uniqueWords = new Set(words)
  
  let rareWords = 0
  let emotionalKeywords = 0
  let artisticTerms = 0
  let cosmicTerms = 0
  const highlights: string[] = []

  // Count rare words
  words.forEach(word => {
    if (RARE_WORDS.includes(word)) {
      rareWords++
      highlights.push(`Rare word: "${word}"`)
    }
  })

  // Count emotional keywords
  words.forEach(word => {
    if (EMOTIONAL_KEYWORDS.includes(word)) {
      emotionalKeywords++
      highlights.push(`Emotional: "${word}"`)
    }
  })

  // Count artistic terms
  words.forEach(word => {
    if (ARTISTIC_TERMS.includes(word)) {
      artisticTerms++
      highlights.push(`Artistic: "${word}"`)
    }
  })

  // Count cosmic terms (highest value for this project)
  words.forEach(word => {
    if (COSMIC_TERMS.includes(word)) {
      cosmicTerms++
      highlights.push(`Cosmic: "${word}"`)
    }
  })

  // Calculate length score (optimal range: 50-200 characters)
  const length = response.length
  let lengthScore = 0
  if (length >= 50 && length <= 200) {
    lengthScore = 10
  } else if (length >= 30 && length <= 300) {
    lengthScore = 5
  }

  // Calculate uniqueness score (ratio of unique words to total words)
  const uniqueness = uniqueWords.size / words.length
  const uniquenessScore = Math.round(uniqueness * 20)

  // Calculate total score with weighted values
  const totalScore = 
    (rareWords * 3) +           // Rare words are valuable
    (emotionalKeywords * 2) +   // Emotional response is important
    (artisticTerms * 2) +       // Artistic language is relevant
    (cosmicTerms * 4) +         // Cosmic terms are highest value
    lengthScore +               // Appropriate length
    uniquenessScore             // Word variety

  return {
    totalScore,
    breakdown: {
      rareWords,
      emotionalKeywords,
      artisticTerms,
      cosmicTerms,
      length,
      uniqueness: Math.round(uniqueness * 100)
    },
    highlights: highlights.slice(0, 5) // Limit highlights to top 5
  }
}

export function getScoreDescription(score: number): string {
  if (score >= 50) return 'Exceptional - High artistic and cosmic value'
  if (score >= 35) return 'Excellent - Strong creative potential'
  if (score >= 25) return 'Good - Solid artistic response'
  if (score >= 15) return 'Average - Decent submission'
  return 'Below Average - Limited artistic depth'
}

export function getScoreColor(score: number): string {
  if (score >= 50) return 'text-green-400'
  if (score >= 35) return 'text-blue-400'
  if (score >= 25) return 'text-yellow-400'
  if (score >= 15) return 'text-orange-400'
  return 'text-red-400'
}
