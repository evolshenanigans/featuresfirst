import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Values from "./components/values";
import Footer from "./components/footer";
import Body2 from "./components/body2";
import Drive from "./components/drive";
import Callout1 from "./components/callout1";
import Callout2 from "./components/callout2";
import Callout3 from "./components/callout3";
import MyCarousel from "./components/carousel";
import DemoForm from "./components/demoForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="scrollbar-none overflow-hidden bg-hero-pattern">
      <Navbar />
      <Header />
      <div className="relative">
        <Body2 />
        <Callout1 />
      </div>
      <div className="relative">
        <Drive />
        <Callout2 />
      </div>
      <Values />
      <div className="relative">
        <Callout3 />
      </div>
      <MyCarousel />
      <DemoForm />
      <Footer />
    </main>
  );
}
