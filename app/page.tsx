import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';

export const metadata: Metadata = {
  title: 'home | nola',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <Separator className="bg-black w-full" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Main />
        </div>
      </div>
      <div className="min-h-screen flex items-center">
        <Services />
      </div>
      <div className="min-h-screen flex items-center ">
        <Testimonials />
      </div>
      <div className="min-h-screen flex items-center">
        <Clients />
      </div>
      <Footer />
    </div>
  );
}
