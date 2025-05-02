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

  // Company values data
  const values = [
    {
      id: 'creativity',
      title: 'Creativity',
      description:
        'We push boundaries and think outside the box to deliver unique solutions that set your brand apart.',
      icon: '✦',
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description:
        "We're committed to exceptional quality in everything we create, from concept to execution.",
      icon: '★',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description:
        'We work closely with our clients, treating your vision with the care and attention it deserves.',
      icon: '⟡',
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description:
        'We constantly evolve, embracing new technologies and approaches to stay ahead of trends.',
      icon: '◈',
    },
  ];

  return (
    <div className="relative">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 right-10 w-72 h-72 bg-[#FFDF1E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-[#FFDF1E]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative"
      >
        {/* Story and mission section */}
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
                    className="text-lg leading-relaxed"
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
                    className="text-lg leading-relaxed"
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
                <div className="bg-white p-10 rounded-xl shadow-lg shadow-black/5 h-full relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-[#FFDF1E]/10 blur-xl" />

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="h-8 w-1 bg-[#FFDF1E]" />
                      <span className="text-[#FFDF1E] font-bold text-2xl md:text-3xl">
                        our mission
                      </span>
                    </div>

                    <p className="text-lg leading-relaxed mb-10">
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

        {/* Values section */}
        <motion.div variants={fadeIn} className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="h-px w-12 bg-[#FFDF1E]" />
              <span className="text-neutral-500 uppercase tracking-wider text-sm font-medium">
                What drives us
              </span>
              <div className="h-px w-12 bg-[#FFDF1E]" />
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4">
              our core <span className="text-[#FFDF1E]">values</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
                  backgroundColor:
                    index % 2 === 0
                      ? 'rgba(255, 223, 30, 0.03)'
                      : 'rgba(255, 255, 255, 1)',
                }}
                className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border border-neutral-100 hover:border-[#FFDF1E]/30"
              >
                <div className="text-3xl text-[#FFDF1E] mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
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

              <p className="text-lg mb-10">
                We transform ideas into compelling digital experiences through
                strategic thinking and creative execution. Our collaborative
                approach ensures that every project reflects your brand&apos;s
                unique voice and achieves your business goals.
              </p>

              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">Brand Strategy</h3>
                  <p className="text-neutral-600">
                    Crafting authentic brand identities that resonate with your
                    audience
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Web Design</h3>
                  <p className="text-neutral-600">
                    Creating intuitive, responsive websites that convert
                    visitors into customers
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">UI/UX Design</h3>
                  <p className="text-neutral-600">
                    Designing user-centered interfaces that delight and engage
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Digital Marketing</h3>
                  <p className="text-neutral-600">
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
                        Our Work Process
                      </div>
                      <div className="inline-flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-[#FFDF1E]"></span>
                        <span className="text-sm text-neutral-400">
                          Video preview
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
