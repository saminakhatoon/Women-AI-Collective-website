import Image from "next/image";
import LandingPage from "./LandingPage/page"
import Footer from "@/components/ui/Footer"
import About from "./About/page"
import Program from "./Program/page"

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <Footer/>
    </div>
  );
}
