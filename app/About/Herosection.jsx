import Navbar1 from "../../components/ui/navbar1";
import Image from "next/image";

export default function Herosection(){
  return(
      
<>
  <section className="relative flex flex-col min-h-screen bg-gray-400">
    {/* Navbar - z-20 */}
    <div className="relative z-20">
      <Navbar1/>
    </div>

    {/* Background Image - z-0 */}
    <Image
      src="/Hero_without bg.png"
      alt="herosection"
      fill
      className="object-cover z-0"
    />
     
    {/* Main Heading - z-10 - Centered and pushed to bottom */}
    <div className="flex-1 flex items-end justify-center pb-4 relative z-10">
      <h1 
        className="text-center font-bold text-[#FAFCFE] mb-20"
        style={{
          fontFamily: 'Work Sans',
          fontSize: 'clamp(32px, 5vw, 64px)',
          lineHeight: '1.1',
          letterSpacing: '-0.04em',
          maxWidth: '100%'
        }}
      >
        Democratizing{" "}
        <span className="relative inline-block text-center font-medium italic"
          style={{
            fontFamily: 'Fraunces',
            fontSize: 'clamp(32px, 5vw, 64px)',
            lineHeight: '1.1',
            letterSpacing: '-0.01em'
          }}>
          AI skills
          <Image 
            src="/Vector 3.png" 
            width={176}
            height={1}  
            alt="underline" 
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[176px]"
          />
        </span>
        {" "}for
        <span className="relative inline-block text-center font-normal italic"
          style={{
            fontFamily: 'Fraunces',
            fontSize: 'clamp(32px, 5vw, 64px)',
            lineHeight: '1.1',
            letterSpacing: '-0.01em'
          }}>
          Indian 
          <Image 
            src="/Vector 3.png" 
            width={176}
            height={1}  
            alt="underline" 
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[176px]"
          />
        </span>
        <br/>
        {" "} 
        <span className="relative inline-block font-normal italic">
          women 
          <Image 
            src="/Vector 3.png" 
            width={176}
            height={1}  
            alt="underline" 
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full max-w-[176px]"
          />
        </span>  
        {" "}to build an inclusive Digital 
        <br/>
        space and unlock financial freedom.
      </h1>
    </div>
  </section>
  
  <div className="relative w-full">
    <Image
      src="/Black circular edge.png"
      fill
      alt="black semicircle"
      className="object-cover"
    />
  </div>
</>
  )
}