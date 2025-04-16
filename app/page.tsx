import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#FFDF1E] flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <Separator className="bg-black h-[1px] w-full" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}
