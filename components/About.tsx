import { motion } from 'framer-motion';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative"
      >
        <motion.div variants={fadeIn} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-2">
                <div className="h-px w-12 bg-[#FFDF1E]" />
                <span className="text-neutral-500 uppercase tracking-wider text-sm font-medium">
                  Our journey
                </span>
              </div>

              <h2 className="font-bold text-4xl md:text-5xl">
                the <span className="text-[#FFDF1E]">story</span> behind our
                studio
              </h2>

              <div className="relative mt-8">
                <motion.div
                  className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-[#FFDF1E] to-transparent"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <div className="space-y-6 pl-6">
                  <motion.p
                    variants={fadeIn}
                    className="text-lg leading-relaxed lowercase"
                  >
                    Back when creating content was just something we did for fun
                    — late nights editing videos, designing logos for friends,
                    running passion projects on the side — we didn&apos;t know
                    it would turn into this. But word got around, one project
                    led to another, and before we knew it,{' '}
                    <span className="font-semibold text-[#FFDF1E]">
                      nola studios
                    </span>{' '}
                    was born.
                  </motion.p>

                  <motion.p
                    variants={fadeIn}
                    className="text-lg leading-relaxed lowercase"
                  >
                    Now, we&apos;re a full-blown creative studio based in the
                    Philippines, working with brands that want more than just
                    &quot;pretty visuals.&quot; We help businesses find their
                    voice, build their identity, and grow with purpose — all
                    while keeping the heart and hustle that started it all.
                  </motion.p>
                </div>
              </div>
            </div>

            <div>
              <motion.div variants={fadeIn} className="h-full flex flex-col">
                <div className="bg-black p-10 rounded-xl shadow-lg shadow-black/5 h-full relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#FFDF1E]/10 blur-xl" />

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="h-8 w-1 bg-[#FFDF1E]" />
                      <span className="text-[#FFDF1E] font-bold text-2xl md:text-3xl">
                        our mission
                      </span>
                    </div>

                    <p className="text-lg leading-relaxed mb-10 lowercase">
                      We&apos;re creatives, strategists, storytellers, and
                      problem-solvers. But most of all, we&apos;re people who
                      love helping others bring their ideas to life — and make
                      waves while doing it. If you&apos;ve got a vision,
                      we&apos;ve got the skills (and the caffeine) to bring it
                      to life.
                    </p>

                    <div className="flex items-center space-x-6">
                      <div className="h-16 w-1 bg-[#FFDF1E]" />
                      <div>
                        <p className="font-semibold text-neutral-600 text-sm uppercase tracking-widest mb-1">
                          established
                        </p>
                        <p className="font-bold text-2xl">2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="h-px w-12 bg-[#FFDF1E]" />
                <span className="text-neutral-500 uppercase tracking-wider text-sm font-medium">
                  Our expertise
                </span>
              </div>

              <h2 className="font-bold text-4xl md:text-5xl mb-8">
                what we <span className="text-[#FFDF1E]">do</span>
              </h2>

              <p className="text-lg mb-10 lowercase">
                We transform ideas into compelling digital experiences through
                strategic thinking and creative execution. Our collaborative
                approach ensures that every project reflects your brand&apos;s
                unique voice and achieves your business goals.
              </p>

              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <h3 className="font-bold text-xl mb-2 lowercase">
                    Brand Strategy
                  </h3>
                  <p className="text-neutral-600 lowercase">
                    Crafting authentic brand identities that resonate with your
                    audience
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 lowercase">
                    Web Design
                  </h3>
                  <p className="text-neutral-600 lowercase">
                    Creating intuitive, responsive websites that convert
                    visitors into customers
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 lowercase">
                    UI/UX Design
                  </h3>
                  <p className="text-neutral-600 lowercase">
                    Designing user-centered interfaces that delight and engage
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 lowercase">
                    Digital Marketing
                  </h3>
                  <p className="text-neutral-600 lowercase">
                    Developing strategies that amplify your brand&apos;s online
                    presence
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 w-48 h-48 rounded-full blur-3xl" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-xl shadow-xl shadow-black/10 border-8 border-white"
              >
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                    <div className="text-white text-center">
                      <div className="font-bold text-2xl mb-2">
                        Jani Jani Yes Papa
                      </div>
                      <div className="inline-flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-[#FFDF1E]"></span>
                        <span className="text-sm text-neutral-400">
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
