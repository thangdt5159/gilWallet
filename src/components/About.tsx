import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import buy from "../../public/images/buy.png";
import credit from "../../public/images/credit.png";
import coinDetails from "../../public/images/coin-details.png";
import recepts from "../../public/images/recepts.png";

const About = () => {
  const imgRef = useRef<any>(null);
  const [isInView, setIsInView] = useState<boolean>();

  useEffect(() => {
    const imgRefObserver = imgRef.current;
    const imgObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });

    imgObserver.observe(imgRef.current);

    return () => imgObserver.unobserve(imgRefObserver);
  }, []);

  return (
    <section className="md:py-[100px] relative">
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat [background-size:55%] [background-position:90%_50%] z-[-1]"></div>
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat [background-size:55%] z-[-1]"></div>
      <div className="md:max-w-[1140px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="md:w-1/2 p-[10px]">
            <div
              className={`w-full h-full flex justify-start ml-10 relative transition-all duration-1000 ${
                isInView ? "opacity-100" : " opacity-0"
              }`}
            >
              <Image
                src={buy}
                alt=""
                width={600}
                height={600}
                className="w-[50%] rotate-[-10deg]"
              />
              <Image
                src={credit}
                alt=""
                width={600}
                height={600}
                className={`w-[48%] absolute right-[32%] transition-all duration-[1500ms] origin-bottom ${
                  isInView && "rotate-[20deg]"
                }`}
              />
            </div>
          </div>
          <div className="md:w-1/2 ml-[60px] p-[10px]">
            <h4 className="uppercase w-fit bg-[#124EE852] text-darkBlue text-[14px] font-semibold leading-[1.3em] tracking-[1px] mb-[15px] py-2 px-[15px] rounded-full">
              About Sensui Wallet
            </h4>
            <h1 className="text-[44px] text-titleBlack font-semibold leading-[1.3em] tracking-[-0.8px]">
              Your phone and your card - nothing more!
            </h1>
            <p className="text-darkGray text-[18px] leading-[1.9em] pb-5">
              Your all-in-one crypto wallet solution with seamless integration
              of Visa and Mastercard payment options.
            </p>
            <button
              className="text-titleBlack text-[18px] font-semibold leading-[22px] border border-[#999FB7] py-[15px] px-[35px] rounded-full transition-all duration-500 hover:bg-titleBlack hover:text-lightGray"
              onClick={() => window.open("https://twitter.com/SensuiWallet")}
            >
              Learn more
            </button>
          </div>
        </div>
        <div
          className="flex items-center justify-between mt-[80px]"
          ref={imgRef}
        >
          <div className="md:w-1/2">
            <h4 className="uppercase w-fit text-darkPink text-[14px] font-semibold leading-[1.3em] tracking-[1px] bg-[#BC35BC47] mb-[15px] py-2 px-[15px] rounded-full">
              Private and Secure
            </h4>
            <h1 className="text-titleBlack md:text-[44px] font-semibold leading-[1.3em] tracking-[-0.8px] pb-5">
              Rock solid security - Security data is stored on your device
            </h1>
            <p className="text-darkGray text-[18px] leading-[1.9em] pb-5">
              You own your private keys, and the enhanced encryption mode
              guarantees the ultimates security of the asset.
            </p>
          </div>
          <div className="md:w-1/2 p-[10px] gap-5 flex justify-center">
            <Image
              src={coinDetails}
              alt=""
              width={600}
              height={600}
              className="w-[43%] first-line:translate-y-[40px]"
            />
            <Image
              src={recepts}
              alt=""
              width={600}
              height={600}
              className="w-[40%] translate-y-[-40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
