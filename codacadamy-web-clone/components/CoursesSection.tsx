import { Search, BarChart3, ArrowRight, HelpCircle } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      type: "Career path",
      title: "Data Scientist: Machine Learning Specialist",
      description: "Machine Learning Data Scientists solve problems at scale, make predictions, find patterns, and more! They use Python, SQL, and algorithms.",
      level: "Beginner Friendly",
      duration: "95 hours",
      tag: "Career path"
    },
    {
      type: "Course",
      title: "Learn Python 3",
      description: "Learn the basics of Python 3.12, one of the most powerful, versatile, and in-demand programming languages today.",
      level: "Beginner Friendly", 
      duration: "23 hours",
      tag: "Course"
    },
    {
      type: "Certification path",
      title: "SY0-701: CompTIA Security+",
      description: "Master IT security basics and prep for the CompTIA Security+ exam with hands-on learning on threats, cryptography, governance, identity management and...",
      level: "Intermediate",
      duration: "14 hours",
      tag: "Certification path"
    },
    {
      type: "Skill path",
      title: "Code Foundations",
      description: "Start your programming journey with an introduction to the world of code and basic concepts.",
      level: "Beginner Friendly",
      duration: "4 hours",
      tag: "Skill path"
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Career path": return "bg-yellow-500 text-yellow-text";
      case "Course": return "bg-green-600 text-white";
      case "Certification path": return "bg-blue-600 text-white";
      case "Skill path": return "bg-purple-600 text-white";
      default: return "bg-gray-600 text-white";
    }
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          No matter your goal, we have something for you
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full bg-surface-dark border border-border rounded-lg px-6 py-4 text-text-primary placeholder-text-muted text-lg pr-12"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted w-6 h-6" />
          </div>
          
          <div className="bg-surface-dark border border-border rounded-lg mt-4 p-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-text-muted" />
              <span className="text-text-secondary">Not sure? Take our quiz to find what's best for you.</span>
              <button className="text-yellow-primary hover:text-yellow-hover transition-colors font-medium ml-auto">
                Take the quiz →
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-text-primary">Top courses</h3>
          <button className="text-yellow-primary hover:text-yellow-hover transition-colors font-medium">
            Go to the catalog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-surface-dark border border-border rounded-lg p-6 hover:border-yellow-primary transition-colors cursor-pointer"
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getTagColor(course.tag)}`}> 
                  {course.tag}
                </span>
              </div>
              <h4 className="text-text-primary font-bold text-lg mb-3">
                {course.title}
              </h4>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                {course.description}
              </p>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <div className="flex items-center gap-1">
                  <BarChart3 className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
                <span>{course.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz CTA - visually prominent, clickable */}
        <a
          href="#" // Replace with actual quiz link
          className="block bg-[#101322] border border-[#23263a] rounded-2xl px-8 py-7 mb-12 transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 group"
          style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <HelpCircle className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-xl md:text-2xl font-bold text-green-400 group-hover:underline">
                  Want help figuring out what to learn?
                </div>
                <div className="text-white text-base mt-1 opacity-90">
                  Take our quiz to find what's best for you.
                </div>
              </div>
            </div>
            <ArrowRight className="w-10 h-10 text-green-400 group-hover:translate-x-2 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default CoursesSection;