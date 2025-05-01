import { motion } from 'framer-motion';

const staggeredChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function About() {
  return (
    <div className="py-24 md:py-32 relative">
      <div className="absolute -top-16 right-0 w-48 h-48 bg-neutral-100 rounded-full -z-10 blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-24 w-64 h-64 bg-neutral-200 rounded-full -z-10 blur-3xl opacity-50" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggeredChildren}
        className="relative z-7"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-bold text-6xl md:text-7xl lg:text-8xl mb-16 tracking-tight"
        >
          about<span className="text-neutral-400">.</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              back when creating content was just something we did for fun —
              late nights editing videos, designing logos for friends, running
              passion projects on the side — we didn&apos;t know it would turn
              into this. but word got around, one project led to another, and
              before we knew it,{' '}
              <span className="font-semibold">nola studios</span> was born.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              now, we&apos;re a full-blown creative studio based in the
              philippines, working with brands that want more than just
              &quot;pretty visuals.&quot; we help businesses find their voice,
              build their identity, and grow with purpose — all while keeping
              the heart and hustle that started it all.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px bg-neutral-300 flex-grow" />
              <span className="text-neutral-500 font-medium">our mission</span>
            </div>

            <p className="text-lg md:text-xl leading-relaxed mb-8">
              we&apos;re creatives, strategists, storytellers, and
              problem-solvers. but most of all, we&apos;re people who love
              helping others bring their ideas to life — and make waves while
              doing it. if you&apos;ve got a vision, we&apos;ve got the skills
              (and the caffeine) to bring it to life.
            </p>

            <div className="flex items-center space-x-6">
              <div className="h-24 w-1 bg-neutral-800" />
              <div className="text-sm uppercase tracking-widest">
                <p className="font-semibold">established</p>
                <p>2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
