import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import ContactInfo from '@/components/ContactInfo';

export const metadata: Metadata = {
  title: 'contact us | nola',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
        <Separator className="bg-black h-[1px] w-full" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="py-16 md:py-20">
            <h1 className="font-bold text-6xl md:text-7xl mb-12">contact us</h1>
          </div>
        </div>
      </div>

      <div className="bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
