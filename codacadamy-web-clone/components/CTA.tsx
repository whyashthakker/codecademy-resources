import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="bg-codecademy-light-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-codecademy-navy mb-4">
            Ready to start your coding journey?
          </h2>
          <p className="text-xl text-codecademy-text-gray max-w-2xl mx-auto">
            Join over 50 million learners and start coding today. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-codecademy-purple rounded-full p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-codecademy-navy mb-2">Learn by doing</h3>
                <p className="text-codecademy-text-gray">Practice coding with interactive exercises and immediate feedback in our hands-on coding environment.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-codecademy-yellow rounded-full p-3 mt-1">
                <svg className="w-6 h-6 text-codecademy-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-codecademy-navy mb-2">Build real projects</h3>
                <p className="text-codecademy-text-gray">Create portfolio projects that demonstrate your skills to employers and showcase your abilities.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-600 rounded-full p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-codecademy-navy mb-2">Connect with community</h3>
                <p className="text-codecademy-text-gray">Join forums, get help from peers, and collaborate on projects with learners worldwide.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-full p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-codecademy-navy mb-2">Track your progress</h3>
                <p className="text-codecademy-text-gray">Monitor your learning journey with detailed progress tracking and achievement badges.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-codecademy-navy mb-2">Start your journey</h3>
              <p className="text-codecademy-text-gray">Choose your learning path and begin coding today</p>
            </div>

            <div className="space-y-4">
              <Link 
                href="#" 
                className="btn-primary block w-full text-center py-4 px-6 rounded-lg font-semibold text-lg"
              >
                Join for free
              </Link>
              
              <div className="text-center text-codecademy-text-gray font-medium">or</div>
              
              <Link 
                href="#" 
                className="btn-secondary block w-full text-center py-4 px-6 rounded-lg font-semibold text-lg"
              >
                Try Pro - 7 days free
              </Link>
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-6 text-sm text-codecademy-text-gray">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA