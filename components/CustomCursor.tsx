import { motion } from "framer-motion";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  cursorVariant: 'default' | 'text';
}

const CustomCursor = ({ mousePosition, cursorVariant }: CustomCursorProps) => {
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      opacity: 0.1,
      mix: 'difference',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#FFDF1E] z-50 pointer-events-none hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};


export default CustomCursor;