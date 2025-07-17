"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image";

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Learn to code', 'Build projects', 'Get hired']
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      }
    }, isDeleting ? 50 : 150)
    
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section className="bg-codecademy-navy min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-codecademy-purple rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-codecademy-yellow rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-codecademy-purple rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="typing-animation inline-block">
                {currentText}
              </span>
              <br />
              <span className="inline-block align-middle mt-2">
                <Image
                  src="/codecademy.svg"
                  alt="Codecademy Logo"
                  width={180}
                  height={28}
                  className="h-7 w-auto inline"
                  priority
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Learn the technical skills to get the job you want. Join over 50 million learners and level up your career.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link 
                href="#" 
                className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Start learning for free
              </Link>
              <Link 
                href="#" 
                className="btn-secondary px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Try Pro for 7 days
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-codecademy-yellow">50M+</div>
                <div className="text-sm">Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-codecademy-yellow">100+</div>
                <div className="text-sm">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-codecademy-yellow">4.8★</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Code Editor Mock */}
          <div className="hidden lg:block">
            <div className="bg-codecademy-dark-navy rounded-lg p-6 shadow-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">main.py</div>
              </div>
              <div className="font-mono text-sm">
                <div className="text-gray-500 mb-2"># Learn Python with Codecademy</div>
                <div className="text-blue-400 mb-2">def <span className="text-codecademy-yellow">hello_world</span>():</div>
                <div className="text-white ml-4 mb-2">    print(<span className="text-green-400">"Hello, Codecademy!"</span>)</div>
                <div className="text-white mb-2">    return <span className="text-codecademy-purple">True</span></div>
                <div className="text-blue-400 mb-4">hello_world()</div>
                <div className="text-green-400"> Hello, Codecademy!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero