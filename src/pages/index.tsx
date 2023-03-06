import { useState } from "react";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <main
      className={`relative placeholder:font-inter text-white ${
        toggle && "h-screen overflow-hidden"
      }`}
    >
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Header />
      <About />
      <Feature />
      <WhyUs />
      <FAQ />
      <Footer />
    </main>
  );
}
