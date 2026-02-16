"use client";

import { motion } from "framer-motion";

const logos = [
  "girlswhoml",
  "girls-leading-tech",
  "career girl global logo",
  "ledby",
];

export default function Collaborators() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto flex flex-col items-center px-6 md:max-w-[1440px]">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-2xl font-bold md:mb-16 md:text-4xl"
        >
          OUR COLLABORATORS AND SUPPORTERS
        </motion.h2>

       
        <div className="relative w-full overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max items-center gap-10 md:gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, 
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={`/${logo}.png`}
                alt={logo}
                className="h-[120px] md:h-[200px] object-contain"
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
