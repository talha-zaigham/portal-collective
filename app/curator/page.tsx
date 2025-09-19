'use client'

import { useState, useEffect } from 'react'
import { scoreSubmission, getScoreDescription, getScoreColor } from '@/lib/curator-scoring'
import CosmicBackground from '@/components/CosmicBackground'

interface Submission {
  id: string
  inkblotId: string
  userResponse: string
  username: string | null
  displayPref: string
  createdAt: string
  votes: number
  status: string
}

export default function CuratorPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [selectedSubmissions, setSelectedSubmissions] = useState<string[]>([])
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions')
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectSubmission = (id: string) => {
    setSelectedSubmissions(prev => 
      prev.includes(id) 
        ? prev.filter(subId => subId !== id)
        : [...prev, id]
    )
  }

  const handleApproveSelected = async () => {
    try {
      for (const id of selectedSubmissions) {
        await fetch('/api/submissions', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, status: 'approved' })
        })
      }
      setSelectedSubmissions([])
      fetchSubmissions()
    } catch (error) {
      console.error('Error approving submissions:', error)
    }
  }

  const filteredSubmissions = submissions.filter(sub => {
    if (filter === 'all') return true
    if (filter === 'pending') return sub.status === 'pending'
    if (filter === 'approved') return sub.status === 'approved'
    return true
  })

  const getSubmissionScore = (text: string) => {
    return scoreSubmission(text)
  }

  return (
    <CosmicBackground intensity="heavy" className="pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Curator</span>
              <br />
              <span className="text-accent">Consciousness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Select the most striking perceptions to become part of the collective art.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-accent text-black border-accent' 
                  : 'bg-card text-foreground border-border hover:border-accent/50'
              }`}
            >
              All Submissions
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                filter === 'pending' 
                  ? 'bg-accent text-black border-accent' 
                  : 'bg-card text-foreground border-border hover:border-accent/50'
              }`}
            >
              Pending Review
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                filter === 'approved' 
                  ? 'bg-accent text-black border-accent' 
                  : 'bg-card text-foreground border-border hover:border-accent/50'
              }`}
            >
              Approved
            </button>
          </div>

          {/* Selection Actions */}
          {selectedSubmissions.length > 0 && (
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <p className="text-foreground">
                  {selectedSubmissions.length} submission{selectedSubmissions.length !== 1 ? 's' : ''} selected
                </p>
                <button
                  onClick={handleApproveSelected}
                  className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
                >
                  Approve Selected
                </button>
              </div>
            </div>
          )}

          {/* Submissions Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading cosmic perceptions...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`bg-card border rounded-lg p-6 cursor-pointer transition-all duration-300 hover:border-accent/50 ${
                    selectedSubmissions.includes(submission.id)
                      ? 'border-accent bg-accent/5'
                      : 'border-border'
                  }`}
                  onClick={() => handleSelectSubmission(submission.id)}
                >
                  {/* Selection Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedSubmissions.includes(submission.id)
                        ? 'border-accent bg-accent'
                        : 'border-border'
                    }`}>
                      {selectedSubmissions.includes(submission.id) && (
                        <span className="text-black text-sm">✓</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        submission.status === 'approved'
                          ? 'bg-green-900/20 text-green-400 border border-green-800'
                          : 'bg-yellow-900/20 text-yellow-400 border border-yellow-800'
                      }`}>
                        {submission.status}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {submission.votes} votes
                      </span>
                    </div>
                  </div>

                  {/* Response Text */}
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{submission.userResponse}"
                  </p>

                  {/* Metadata */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>
                        {submission.displayPref === 'anonymous' ? 'Anonymous' : submission.username || 'Anonymous'}
                      </span>
                      <span className={`font-semibold ${getScoreColor(getSubmissionScore(submission.userResponse).totalScore)}`}>
                        Score: {getSubmissionScore(submission.userResponse).totalScore}
                      </span>
                    </div>
                    <div className="text-xs">
                      {new Date(submission.createdAt).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {getScoreDescription(getSubmissionScore(submission.userResponse).totalScore)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredSubmissions.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-accent">◊</span>
              </div>
              <p className="text-muted-foreground">No submissions found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </CosmicBackground>
  )
}
