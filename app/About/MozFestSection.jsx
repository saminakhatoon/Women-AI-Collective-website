"use client";
import { motion } from "framer-motion";

const Images = [
  "motion_photo_4942381548780179075.jpg",
  "IMG-20251107-WA0018.jpg",
  "motion_photo_5954914492110456690.jpg",
  "IMG-20251108-WA0010.jpg",
  "iamge1.jpg",
  "image2.jpg",
  "image3.jpg",
];

export default function MozFestSection() {
  return (
    <section className="w-full bg-[#03091D] py-20 flex justify-center">
      <div className="bg-[#4A4A68] w-[1320px] h-[769px] max-md:w-full max-md:h-auto max-md:p-6 rounded-[30px] p-10 text-white mx-auto">

        <h2 className="font-['Work_Sans'] text-[50px] max-md:text-3xl font-bold text-white leading-tight px-0 py-[10px] w-fit h-fit mt-8 mb-0">
          MOZ FEST 2025
        </h2>

        <p className="font-['Work_Sans'] text-[18px] max-md:text-[15px] font-normal tracking-normal text-[#ECF1F4] max-w-[1200px] leading-relaxed whitespace-pre-line mb-8">
          On November 7th, 2025, WomenAICollective collaborated with GirlsWhoML to present Tiles of Reflection by putting together the world's
          first narrative screen that brings forth voices from women and underrepresented groups in the design of technologies that impact
          literally everything we do. Through our survey, we collected more than 300 reflections from women across 35+ countries – their words
          revealing resilience, isolation, and hope. Each response became one of the digital tiles within the installation, glowing softly as visitors
          engaged. Guests were invited to select up to four tiles that resonated with them most, a simple act that amplified these women's
          voices. In doing so, the installation turned listening into participation, and participation into recognition.
        </p>

       
  <div className="relative w-full overflow-hidden mt-10">
 <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#4A4A68] to-transparent z-10 pointer-events-none" />
 <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#4A4A68] to-transparent z-10 pointer-events-none" />



      <motion.div
       className="flex gap-4 md:gap-8 w-max"
       animate={{ x: [0, -1000] }}   
       transition={{
       repeat: Infinity,
       repeatType: "loop",
       duration: 25,
       ease: "linear",
                        }}
      >
       {[...Images, ...Images].map((Images, i) => (
  <div
    key={i}
    className="
      min-w-[200px] h-[150px] 
      sm:min-w-[250px] sm:h-[180px]
      md:min-w-[400px] md:h-[300px]
      rounded-[24px] overflow-hidden
    "
  >
    <img
      src={Images}
      alt={`MozFest ${i}`}
      className="w-full h-full object-cover"
    />
  </div>
))}

      </motion.div>
        </div>


      </div>
    </section>
  );
}
