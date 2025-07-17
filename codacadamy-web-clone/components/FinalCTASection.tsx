import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const FinalCTASection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Image
              src="/codecademy.svg"
              alt="Codecademy Logo"
              width={200}
              height={28}
              className="h-7 w-auto mx-auto"
              priority
            />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 max-w-4xl mx-auto">
          Join the millions learning the tech skills needed to grow in their careers and build the lives they want.
        </h2>

        <Link href="/signup" passHref legacyBehavior>
          <Button asChild className="bg-white text-black font-bold px-10 py-4 text-xl rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200">
            <span>Sign up — it's free</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTASection;