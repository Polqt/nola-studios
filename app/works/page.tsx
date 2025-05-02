'use client';

import BackgroundParticles from '@/components/BackgroundParticles';
// import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function WorkPage() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [cursorVariant] = useState<'default' | 'text'>('default');

  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener('mousemove', mouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', mouseMove);
  //   };
  // }, []);

  // const textHoverEnter = () => setCursorVariant('text');
  // const textHoverLeave = () => setCursorVariant('default');

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white overflow-hidden relative">
      {/* <CustomCursor
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      /> */}
      <BackgroundParticles />

      <div className="flex-grow relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>
      </div>

      <Footer />
    </div>
  );
}
