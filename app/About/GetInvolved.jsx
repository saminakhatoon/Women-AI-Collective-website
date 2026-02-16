export default function GetInvolved() {
  return (
    <section className="bg-[#03091D] py-16 md:py-24 px-4 md:px-6">
      
      <h1 className="font-['Work_Sans'] text-3xl md:text-[50px] font-bold leading-tight md:leading-[59px] text-center text-[#FAFCFE] mx-auto mb-10">
        GET INVOLVED
      </h1>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* CARD 1 */}
        <div className="w-full bg-[#F1247B] rounded-[30px] md:rounded-[40px] p-6 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="font-['Work_Sans'] text-2xl md:text-[40px] font-semibold leading-tight md:leading-[45px] text-center">
              Join the <br /> WAIC team
            </h2>

            <p className="mt-4 font-['Work_Sans'] text-sm md:text-[18px] leading-relaxed text-center text-[#ECF1F4]">
              Be part of the team building Women AI Collective from the
              ground up. Join us across community, content, research, tech
              and operations – and grow while creating access to more women.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button className="group flex  gap-2 bg-white hover:bg-[#FAFCFE] hover:shadow-md transition-all duration-300 rounded-[8px] border border-[#0F0F0F] px-4 py-2 active:scale-95">
              <span className="font-['Work_Sans'] text-sm md:text-[16px] font-medium text-[#06061A]">
                Apply Now
              </span>
              <img src="/Pixel Arrow.png" alt="Arrow" className="w-7 h-7 transition-transform duration-300"/>
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-full bg-[#F5C939] rounded-[30px] md:rounded-[40px] p-6 md:p-10 text-black flex flex-col justify-between">
          <div>
            <h2 className="font-['Work_Sans'] text-2xl md:text-[40px] font-semibold leading-tight md:leading-[45px] text-center text-[#2E2E2E]">
              Conduct a Guest <br /> Lecture Session
            </h2>

            <p className="mt-4 font-['Work_Sans'] text-sm md:text-[18px] leading-relaxed text-center text-[#333333]">
              If you are a professional working in emerging tech and AI, we welcome you
              to mentor young women virtually. Lead a focused 60–90 minute session as
              part of our program and inspire learners through real-world insights
              and practical guidance.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button className="group flex items-center gap-2 bg-white hover:bg-[#FAFCFE] hover:shadow-md transition-all duration-300 rounded-[8px] border border-[#0F0F0F] px-4 py-2 active:scale-95">
              <span className="font-['Work_Sans'] text-sm md:text-[16px] font-medium text-[#06061A]">
                Get in Touch
              </span>
              <img src="/Pixel Arrow.png" alt="Arrow" className="w-7 h-7 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-full bg-[#8A38F5] rounded-[30px] md:rounded-[40px] p-6 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="font-['Work_Sans'] text-2xl md:text-[40px] font-semibold leading-tight md:leading-[45px] text-center">
              Be a WAIC Ambassador
            </h2>

            <p className="mt-4 font-['Work_Sans'] text-sm md:text-[18px] leading-relaxed text-center text-[#ECF1F4]">
              Shape an inclusive digital future by bringing Women AI Collective
              to your college, school, or community. As an ambassador, you’ll
              help more girls discover AI, start conversations, and open doors
              to learning opportunities.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button className="group flex items-center gap-2 bg-white hover:bg-[#FAFCFE] hover:shadow-md transition-all duration-300 rounded-[8px] border border-[#0F0F0F] px-4 py-2 active:scale-95">
              <span className="font-['Work_Sans'] text-sm md:text-[16px] font-medium text-[#06061A]">
                Apply Now
              </span>
              <img src="/Pixel Arrow.png" alt="Arrow" className="w-7 h-7 transition-transform duration-300"/>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
