import About from '@/components/About';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about | nola',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#FFDF1E] flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <Separator className="bg-black h-[1px] w-full" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <About />
        </div>
      </div>
      <Separator className="bg-black w-full" />
      <div className="min-h-screen flex items-center">
        <TeamCard />
      </div>
      <Separator className="bg-black w-full" />
      <Footer />
    </div>
  );
}
