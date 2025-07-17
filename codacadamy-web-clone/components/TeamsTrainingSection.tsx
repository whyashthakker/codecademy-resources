import Image from "next/image";

const TeamsTrainingSection = () => {
  return (
    <section className="bg-surface-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-primary mb-4">
              Transform your team with Codecademy Teams
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Empower your organization with hands-on learning that builds the skills your team needs to succeed in today's digital economy.
            </p>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-yellow-primary text-2xl">✔</span>
                <span className="text-white text-lg">Flexible content assignment and progress tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-primary text-2xl">✔</span>
                <span className="text-white text-lg">Real-world projects and assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-primary text-2xl">✔</span>
                <span className="text-white text-lg">Admin analytics and reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-primary text-2xl">✔</span>
                <span className="text-white text-lg">Dedicated customer support</span>
              </li>
            </ul>
            <button className="bg-yellow-primary text-yellow-text font-bold px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-yellow-hover transition-colors">
              Get started for your team
            </button>
          </div>

          {/* Right: Image with Decorative Dots */}
          <div className="relative">
            <div className="bg-surface-darker rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=face"
                alt="Team collaborating at work"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
                priority
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
              <div className="grid grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-yellow-primary rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsTrainingSection;