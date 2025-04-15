import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#FFDF1E]">
        <Header />
        <Separator className="text-black" />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
