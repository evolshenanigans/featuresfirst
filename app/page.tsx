import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Header from "./components/header";
import BodyCorp from "./components/bodyCorp";
import Values from "./components/values";
import Footer from "./components/footer";
import Body2 from "./components/body2";
import Drive from "./components/drive";
import Callout1 from "./components/callout1";
import Callout2 from "./components/callout2";
import Callout3 from "./components/callout3";
import MissionStatement from "./components/missionStatement";
import MyCarousel from "./components/carousel";
import DemoForm from "./components/demoForm";
// import MyCarousel from "./components/carousel";
// import data from "./data";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="scrollbar-none bg-[#e5e5e5] overflow-hidden ">
      <Navbar />
      <Header />
      <div className="relative">
        <div className="gradient-03 z-0" />
        <Body2 />
        <Callout1 />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0 m-0" />
        <Drive />
        <Callout2 />
      </div>
      <Values />
      <div className="relative">
        <div className="gradient-06 z-0 m-0" />
        <Callout3 />
      </div>
      <MissionStatement />
      {/* <MyCarousel /> */}
      <DemoForm/>
      <Footer />
      {/* <Body/> */}
    </main>
  );
}
