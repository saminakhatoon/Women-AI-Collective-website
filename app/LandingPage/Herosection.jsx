import Image from 'next/image'
import {Navbar1} from "@/components/ui/navbar1"
import {Circle }from"lucide-react"
export default function  Herosection(){
    return (
       <>
<section className="min-h-screen overflow-hidden bg-[#31091E] relative">
  {/* background gradient */}
  <div className='absolute inset-0 z-0'>

    {/* Top gradient */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#31091E_0%,rgba(49,9,30,0)_50%,#31091E_100%)]"></div>
    
    {/* Image positioned absolutely */}
    <Image
      src="/pink light gradient.png"
      width={1000}
      height={100}
      alt="gradient"
      className="absolute inset-0 w-full h-200 object-cover"
    />
  </div>

<div className='relative z-10 flex flex-col min-h-screen'>
  {/*Navbar component from ui folder*/}
  <Navbar1/>
<div className="mx-auto w-[1032px] h-[38px] bg-[#06061A]/50 rounded-[10px] px-8 flex items-center justify-center gap-4 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm">
  
  {/* Icon Span - Circular background */}
  <span className="flex items-center justify-center bg-[#F1247B] w-8 h-8 rounded-full flex-shrink-0">
    <Circle size={16} className="text-white" />
  </span>  

  {/* Text Span - Responsive text size and clean alignment */}
  <span className="font-work font-bold text-[18px] md:text-[20px] text-[#F5C939] leading-none truncate">
    Applications are now open for the Artificial Intelligence 101 Program 2026
  </span>

</div>

   <div className="flex justify-center mb-30 sm:mb-8 md:mb-10 lg:mb-12">
    <Image
      src="/logo1.png"
      width={400}
      height={200}
      alt="logo"
      className='w-48 sm:w-64 md:w-80 lg:w-96 mb-2'
    />
  </div>

<div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-10 max-w-7xl mx-auto w-full '>
     <h1 className="text-center">
  <span className="block md:inline font-normal text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[70px] text-[#FAFCFE]">
    We are on a Mission to Empower {" "}
  </span>

  <span className="block md:inline italic font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight text-[#FAFCFE]">
    Young  {" "}
  </span>
  <span className="block md:inline italic font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight text-[#FAFCFE]">
    women
  </span>

  <span className="block md:inline font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[70px] text-[#FAFCFE]">
    {" " }  Build  {" "}
    <span className="block md:inline italic font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight text-[#FAFCFE]">
    Carrer {" "}
  </span>
     of the Future
  </span>
</h1>
<p className=' flex flex-col block md:inline font-medium text-2lg sm:text-sm md:text-lg lg:text-3lg leading-tight md:leading-[70px] text-[#FAFCFE]'> 
        From Zero to AI Fluet: Every Girl ,  Every Stram ,  every Dream!</p>

      <button className="h-10  px-6 md:px-8 bg-[#F1247B] font-bold text-[18px] text-[#FFFFFF] font-semibold text-sm md:text-base lg:text-lg rounded-[10px]">
        JOIN THE AI 101 PROGRAM
      </button>

 </div>
</div>
</section>

        </>
    )
}