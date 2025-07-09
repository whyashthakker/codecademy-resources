import React from "react";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'education';
  description: string[];
  technologies?: string[];
  achievements?: string[];
  icon: string;
  color: string;
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => (
  <div className="relative">
    {/* Timeline Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 rounded-full"></div>
    
    <div className="space-y-12">
      {items.map((exp, index) => (
        <div
          key={exp.id}
          className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
          {/* Content */}
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
            <div className={`${exp.color} border-2 p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow duration-300`}>
              {/* Experience Type Badge */}
              <div className={`absolute -top-3 ${index % 2 === 0 ? 'right-4' : 'left-4'}`}>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white border-2 ${exp.type === 'work' ? 'border-blue-200 text-blue-700' : 'border-green-200 text-green-700'}`}>
                  {exp.type === 'work' ? 'Work' : 'Education'}
                </span>
              </div>
              
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                <div className="text-gray-700 font-semibold mb-1">{exp.company}</div>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <span role="img" aria-label="calendar">📅</span>
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <span role="img" aria-label="location">📍</span>
                    {exp.location}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-gray-500 mt-1 font-bold">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              {exp.technologies && (
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Achievements */}
              {exp.achievements && (
                <div>
                  <h4 className="text-gray-900 font-semibold mb-2 text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Timeline Node */}
          <div className="w-2/12 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-2xl">{exp.icon}</span>
            </div>
          </div>
          
          {/* Spacer */}
          <div className="w-5/12"></div>
        </div>
      ))}
    </div>
  </div>
);