import {Button} from "@/components/ui/button"
import Image from 'next/image'

export default function FlagShip(){
    return(
        <>
       <section className="flex flex-col bg-black min-h-screen items-center justify-center gap-8 py-16 px-4">
       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAFCFE] text-center mb-8">
    OUR FLAGSHIP PROGRAM
    </h1>
    
    {/*card1*/}
    <div className="relative w-full max-w-[1200px] h-auto min-h-[500px] rounded-[40px] bg-[#F1247B] shadow-[inset_1px_1px_2px_0px_#FFFFFF4D,inset_-1px_-1px_2px_0px_#FFFFFF1A,inset_0px_1px_10px_0px_#FFFFFF4D] overflow-hidden">
      
      {/* Image Container - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center p-8">
        <div className="relative w-full h-full">
          <Image
            src="/card 1 img.png"
            fill
            alt="AI Program"
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Container - Right Side */}
      <div className="relative md:ml-[50%] w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-6 min-h-[500px]">
        <h2 className="text-[#530727] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
          Artificial Intelligence 101
        </h2>

        <p className="text-[#530727] text-base sm:text-lg md:text-[20px] leading-relaxed">
          A 2-months live program for young women from both non-tech and tech backgrounds become AI-Literate and AI-Fluent. It covers practical usecases and frameworks along with fundamentals of AI and ML setting them up for career advancement and higher paying opportunities in an AI-driven economy.
        </p>
        
        <Button className="bg-[#ECF1F4] hover:bg-[#dce1e4] w-fit px-8 py-6">
          <span className="font-medium text-base sm:text-lg text-[#4A4A68]">Join the Program</span>
        </Button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative w-full max-w-[1200px] h-auto min-h-[500px] rounded-[40px] bg-[#F5C939] shadow-[inset_1px_1px_2px_0px_#FFFFFF4D,inset_-1px_-1px_2px_0px_#FFFFFF1A,inset_0px_1px_10px_0px_#FFFFFF4D] overflow-hidden">
      
      {/* Image Container - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-center p-8">
        <div className="relative w-full h-full">
          <Image
            src="/await where the sand meets the (1) 1.png"
            fill
            alt="Coming Soon"
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Container - Right Side */}
      <div className="relative md:ml-[50%] w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-6 min-h-[500px]">
        <h2 className="text-[#5B4808] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
          Artificial Intelligence 101
        </h2>

        <p className="text-[#5B4808] text-base sm:text-lg md:text-[20px] leading-relaxed">
          A 2-months live program for young women from both non-tech and tech backgrounds become AI-Literate and AI-Fluent. It covers practical usecases and frameworks along with fundamentals of AI and ML setting them up for career advancement and higher paying opportunities in an AI-driven economy.
        </p>
        
        <Button className="bg-[#ECF1F4] hover:bg-[#dce1e4] w-fit px-8 py-6">
          <span className="font-medium text-base sm:text-lg text-[#4A4A68]">Coming Soon</span>
        </Button>
      </div>
    </div>

    </section>
        </>
    )
}