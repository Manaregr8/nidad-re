import Link from "next/link";
import Hero from "@/components/HomeSection/Hero";
import Hero2 from "@/components/HomeSection/Hero2";
import Hero3 from "@/components/HomeSection/Hero3";
import Hero4 from "@/components/HomeSection/Hero4";
import Hero5 from "@/components/HomeSection/Hero5";
import Hero6 from "@/components/HomeSection/Hero6";
import Hero7 from "@/components/HomeSection/Hero7";
import Hero8 from "@/components/HomeSection/Hero8";
import Hero9 from "@/components/HomeSection/Hero9";
import VideoLoader from "@/components/VideoLoader";
import ImgSlider from "@/components/HomeSection/ImgSlider";


export default function Home() {
  return (
    <main>
      <VideoLoader />
      <Hero/>
      <Hero4 />
      <Hero5 />   
      <Hero7 />
      <Hero2/>
      <Hero3/>
      {/* <Hero6 /> */}
      <ImgSlider />
      <Hero9 />
      <Hero8 />
    </main>
  );
}