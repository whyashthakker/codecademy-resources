import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Joshua Lange",
      title: "Research Scientist",
      location: "Stockholm, Sweden",
      quote: "I feel like I’ve gained a valuable skill set that looks great on my CV. You don’t have to change careers; you can make your current job better, more efficient, and make your life easier.",
      image: "/person1.webp"
    },
    {
      name: "Shabana Khatau", 
      title: "Systems and Applications Advisor",
      location: "London, England",
      quote: "I wasted quite a bit of time before learning about Codecademy. Anyone who would come up to me, I would direct them straight to Codecademy. Don’t waste any time on anyone else; just start there.",
      image: "/person2.webp"
    },
    {
      name: "Jimmy Soto",
      title: "SOC Security Specialist", 
      location: "Washington, DC - Baltimore",
      quote: "Codecademy played into the whole gamification aspect because of how user-friendly it is and the completion of courses and modules. Completing a module felt like an achievement, and it helped me have a pathway to dive into cybersecurity, coming from a completely different world.",
      image: "/person3.webp"
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-surface-dark border border-yellow-primary rounded-xl overflow-hidden shadow-lg flex flex-col">
              <div className="relative w-full h-84">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-white mb-6 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-secondary">
                    {testimonial.title}
                  </p>
                  <p className="text-text-muted text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;