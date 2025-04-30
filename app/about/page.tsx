import About from '@/components/About';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <About />
        </div>
      </div>
      <div className="min-h-screen flex items-center">
        <TeamCard />
      </div>
      <Footer />
    </div>
  );
}
