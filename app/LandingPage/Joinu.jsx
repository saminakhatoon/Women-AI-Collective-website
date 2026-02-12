import Image from 'next/image'
import {Button} from "../../components/ui/button"
export default function JoinUs(){
  return(
    <div className="w-full min-h-[500px] bg-black flex flex-col items-center justify-center px-6 text-center py-16">
  
      <h1
        className="
          text-[32px]
          md:text-[35px]
          lg:text-[40px]
          font-bold
          leading-[1.3]
          bg-gradient-to-r
          from-[#FFD1EA]
          via-[#FF5FB2]
          to-[#8B5CF6]
          bg-clip-text
          text-transparent
          max-w-[900px]
          mx-auto
        "
      >
        <span>
        A 
        </span>
        {" "}
        <span className='relative inline-block text-pink-100'>
        COMMUNITY 
         <Image 
      src="/Vector 2.png" 
      width={176}
      height={1}  
      alt="underline" 
      className="absolute left-0 -bottom-1 w-full"
    />
    </span>
            {" "}
        OF WOMEN BUILDING
        THEIR CAREERS AND COMPANIES IN 
        EMERGING TECHNOLOGY AND AI IS
        WAITING FOR YOU.
        ARE YOU UP FOR IT?
      </h1>

    <Button 
  className="h-[41px] w-[300px] px-5 py-2.5 bg-[#F1247B] font-bold text-[18px] text-[#FFFFFF] uppercase tracking-[0.04em] leading-[100%] rounded-[10px] transition-all duration-200 ease-out hover:opacity-90 hover:bg-[#F1247BE5] hover:border-2 active:duration-0 active:opacity-100 active:bg-[#F1247BE5] active:border-2"
  style={{
    boxShadow: `
      1px 1px 2px 0px #ECF1F44D inset,
      -1px -1px 2px 0px #ECF1F41A inset,
      0px 1px 10px 0px #ECF1F44D inset
    `,
    fontFamily: 'Work Sans'
  }}
>
  JOIN THE AI 101 PROGRAM
</Button>
    </div>
  )
}