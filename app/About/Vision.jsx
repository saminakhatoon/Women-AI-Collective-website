import Image from "next/image";

export default function Vision() {
  return (
    <main className="w-full">
      <section className="grid grid-cols-1 md:grid-cols-2">

        {/* Top Left */}
        <div className="bg-pink-600 text-white px-6 py-12 md:px-14 md:py-16">
          <p className="text-[18px] md:text-[20px] font-bold tracking-widest">
            Our Vision
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            WHY WOMEN AI <br />
            COLLECTIVE EXISTS
          </h1>

          <p className="mt-6 text-sm md:text-[18px] leading-relaxed text-[#ECF1F4] max-w-[520px]">
            Education for girls is no longer a privilege — it’s a right
            every woman holds. But having a career still depends
            on privilege. It’s time to change that. We believe that in
            an AI-first world, not knowing how AI works creates a
            new barrier, keeping women, especially from non-tech
            backgrounds, out of future job opportunities.
            <span className="block font-bold mt-4">
              This isn’t just about technology. It’s about equality.
            </span>
          </p>
        </div>

        {/* Top Right Image */}
        <div className="relative w-full h-[300px] md:h-[513px]">
          <Image
            src="/books img.png"
            alt="Bookshelf"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Left Image */}
        <div className="bg-white px-6 py-12 md:px-14 md:py-16 flex items-center justify-center">
          <Image
            src="/what our girls say img.png"
            alt="Word Cloud"
            width={712}
            height={513}
            className="w-full h-auto object-contain max-w-[600px]"
          />
        </div>

        {/* Bottom Right */}
        <div className="bg-yellow-400 px-6 py-12 md:px-14 md:py-16">
          <p className="text-[18px] md:text-[20px] font-bold tracking-widest text-[#06061A] mb-6">
            Our Mission
          </p>

          <h2 className="text-2xl md:text-[50px] font-bold uppercase leading-tight text-black">
            Help 1000 GIRLS and WOMEN IN INDIA Master AI BY 2027
          </h2>

          <p className="mt-6 text-sm md:text-[18px] leading-relaxed text-[#333333] max-w-[532px]">
            At WAIC, we're committed to empowering women to
            become AI-literate and AI-fluent. Not everyone needs to be
            a coder, but every woman from every discipline should have
            the power to understand, use, and question the technology
            shaping our lives.
          </p>
        </div>

      </section>
    </main>
  );
}
