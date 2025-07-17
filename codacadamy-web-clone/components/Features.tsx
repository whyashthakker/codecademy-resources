import React from 'react'
import Link from 'next/link'

const Features = () => {
  const courses = [
    {
      title: "Python",
      description: "Learn Python fundamentals and build real-world applications",
      level: "Beginner friendly",
      duration: "25 hours",
      icon: "🐍",
      color: "bg-green-600"
    },
    {
      title: "JavaScript",
      description: "Master the language of the web and create interactive experiences",
      level: "Beginner friendly", 
      duration: "30 hours",
      icon: "JS",
      color: "bg-yellow-600"
    },
    {
      title: "HTML & CSS",
      description: "Build beautiful, responsive websites from scratch",
      level: "Beginner friendly",
      duration: "20 hours", 
      icon: "🌐",
      color: "bg-blue-600"
    },
    {
      title: "Java",
      description: "Learn object-oriented programming and build robust applications",
      level: "Beginner friendly",
      duration: "35 hours",
      icon: "☕",
      color: "bg-red-600"
    },
    {
      title: "SQL",
      description: "Analyze data and manage databases with structured queries",
      level: "Beginner friendly",
      duration: "15 hours",
      icon: "📊",
      color: "bg-codecademy-purple"
    },
    {
      title: "React",
      description: "Build dynamic user interfaces with the popular JavaScript library",
      level: "Intermediate",
      duration: "40 hours",
      icon: "⚛️",
      color: "bg-cyan-600"
    }
  ]

  const careerPaths = [
    {
      title: "Front-End Engineer",
      description: "Build user-facing features for web applications",
      duration: "6 months",
      icon: "💻"
    },
    {
      title: "Data Scientist",
      description: "Analyze data and build machine learning models",
      duration: "4 months",
      icon: "📈"
    },
    {
      title: "Back-End Engineer",
      description: "Build server-side applications and APIs",
      duration: "6 months",
      icon: "⚙️"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-codecademy-navy mb-4">
            Most popular courses
          </h2>
          <p className="text-xl text-codecademy-text-gray max-w-2xl mx-auto">
            Start learning with our most popular courses. Perfect for beginners and experts alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <div key={index} className="course-card bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-xl">{course.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-codecademy-navy mb-3">{course.title}</h3>
                <p className="text-codecademy-text-gray mb-4 leading-relaxed">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-codecademy-text-gray mb-6">
                  <span className="bg-codecademy-light-gray px-3 py-1 rounded-full">{course.level}</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <Link 
                  href="#" 
                  className="btn-primary w-full text-center py-3 px-6 rounded-lg font-semibold"
                >
                  Start Course
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Career Paths Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-codecademy-navy mb-4">
            Career Paths
          </h2>
          <p className="text-xl text-codecademy-text-gray max-w-2xl mx-auto">
            Get job-ready with a comprehensive curriculum designed by industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {careerPaths.map((path, index) => (
            <div key={index} className="course-card bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-8 text-center">
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-xl font-bold text-codecademy-navy mb-3">{path.title}</h3>
              <p className="text-codecademy-text-gray mb-4">{path.description}</p>
              <div className="text-sm text-codecademy-text-gray mb-6">
                <span className="bg-codecademy-light-gray px-3 py-1 rounded-full">{path.duration}</span>
              </div>
              <Link 
                href="#" 
                className="btn-secondary w-full text-center py-3 px-6 rounded-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Pro CTA Section */}
        <div className="bg-gradient-to-r from-codecademy-purple to-codecademy-navy rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-codecademy-yellow rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-codecademy-yellow rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Level up with Codecademy Pro
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get unlimited access to all courses, practice exercises, and career paths. Plus, get personalized learning recommendations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-codecademy-yellow">100+</div>
                <div className="opacity-90">Courses & Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-codecademy-yellow">50M+</div>
                <div className="opacity-90">Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-codecademy-yellow">4.8/5</div>
                <div className="opacity-90">Rating</div>
              </div>
            </div>
            
            <Link 
              href="#" 
              className="inline-block bg-codecademy-yellow text-codecademy-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Try Pro for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features