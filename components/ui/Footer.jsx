"use client"
import { useState } from "react"
import {Button} from "@/components/ui/button"
import Image from "next/image";
export default function Footer(){
    // controll form
    const [email,setemail]=useState(" ");
    

    // onchange
    const handleChange=(event)=>{
        setemail(event.target.value)
    };
    //Submit
    const handleSubmit=(event)=>{
        event.preventDefault()
    console.log("Submitted email:", email)
    }

    return (
        <>
  <section className="flex flex-col w-full h-[700px] bg-[#31091E]">
  <div className="flex flex-col gap-16">
    {/* Stay Updated block */}
  <div className="flex flex-col ml-[120px] w-[256px] pt-4 pb-4 opacity-90">
  <span className="font-work font-semibold text-[40px] leading-[40px] tracking-[-0.8px] text-[#F1247B]">
   Stay Updated
  </span>

   <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
  <label
    htmlFor="email"
  className="text-[#FFFFFFCC] font-semibold text-[16px] md:text-[18px]"
  >
   Email Address:
  </label>

  <input
    type="email"
      id="email"
   value={email}
   onChange={handleChange}
   placeholder="you@gmail.com"
   className="text-white bg-transparent border-b border-white/30 outline-none pb-2 placeholder:text-white/50 focus:border-[#F1247B] transition-colors"
  />

   <Button
     type="submit"
      className="relative border rounded-lg bg-[#FAFCFE] hover:bg-[#F1247B] hover:text-white py-6 px-8 pr-12 text-[#F1247B] font-medium w-fit transition-colors"
     >
        Submit
 <Image
       src="/Pixel Arrow.png"
      width={20}
    height={20}
      alt="arrow"
  className="absolute right-3 top-1/2 -translate-y-1/2"
  />
     </Button>
  </form>
    </div>
    {/* Big Text BELOW */}
    <div className="flex flex-col items-center justify-center px-[50px] opacity-80">
      <span className="font-bold text-[50px] sm:text-[60px] md:text-[120px] lg:text-[150px] xl:text-[190px]  text-[#ECF1F4] leading-none whitespace-nowrap">
        WOMEN AI
      </span>

      <span className="font-bold text-[50px] sm:text-[60px] md:text-[120px] lg:text-[150px] xl:text-[170px]  text-[#ECF1F4] leading-none whitespace-nowrap">
        COLLECTION
      </span>
    </div>
  </div>
</section>
        </>
    )
}