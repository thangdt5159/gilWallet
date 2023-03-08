import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import buy from "../../public/images/buy.png";
import credit from "../../public/images/credit.png";
import coinDetails from "../../public/images/coin-details.png";
import recepts from "../../public/images/recepts.png";
import chPlay1 from "../../public/images/header/ch-play-1.png";
import chPlay2 from "../../public/images/header/ch-play-2.png";
import appStore from "../../public/images/header/app-store.png";

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
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat md:[background-size:55%] md:[background-position:90%_50%] z-[-1]"></div>
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat bg-contain md:[background-size:55%] z-[-1]"></div>
      <div className="md:max-w-[1140px] mx-auto">
        <div className="md:flex items-center justify-between pt-[80px] md:pt-0 p-[10px] md:p-0">
          <div className="md:w-1/2 p-[10px]">
            <div
              className={`w-full h-full flex justify-start relative transition-all duration-1000 ${
                isInView ? "opacity-100" : " opacity-0"
              }`}
            >
              <Image
                src={buy}
                alt=""
                width={600}
                height={600}
                className="w-[30%] md:w-[50%] rotate-[-10deg] ml-[80px] md:ml-0"
              />
              <Image
                src={credit}
                alt=""
                width={600}
                height={600}
                className={`w-[28%] md:w-[48%] absolute right-[32%] transition-all duration-[1500ms] origin-bottom ${
                  isInView && "rotate-[20deg]"
                }`}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:ml-[60px] p-[10px] mt-6 md:mt-0 text-center md:text-start">
            <h4 className="uppercase w-fit mx-auto bg-[#124EE852] text-darkBlue text-[14px] font-semibold leading-[1.3em] tracking-[1px] mb-[15px] py-2 px-[15px] rounded-full">
              About Sensui Wallet
            </h4>
            <h1 className="text-[32px] md:text-[44px] text-titleBlack font-semibold leading-[1.3em] tracking-[-0.8px] pb-[15px]">
              Your phone and your card - nothing more!
            </h1>
            <p className="text-darkGray md:text-[18px] leading-[1.9em] pb-5">
              Your all-in-one crypto wallet solution with seamless integration
              of Visa and Mastercard payment options.
            </p>
            <button
              className="text-titleBlack text-[18px] font-semibold leading-[22px] my-[10px] md:my-0 border border-[#999FB7] py-[15px] px-[35px] rounded-full transition-all duration-500 hover:bg-titleBlack hover:text-lightGray"
              onClick={() => window.open("https://twitter.com/SensuiWallet")}
              ref={imgRef}
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[80px]">
          <div className="md:w-1/2 mt-6 md:mt-0 p-5 md:p-0 text-center md:text-start">
            <h4 className="uppercase w-fit mx-auto md:mx-0 text-darkPink text-[14px] font-semibold leading-[1.3em] tracking-[1px] bg-[#BC35BC47] mb-[15px] py-2 px-[15px] rounded-full">
              Private and Secure
            </h4>
            <h1 className="text-titleBlack text-[32px] md:text-[44px] font-semibold leading-[1.3em] tracking-[-0.8px] pb-5">
              Rock solid security - Security data is stored on your device
            </h1>
            <p className="text-darkGray md:text-[18px] leading-[1.9em] pb-5 md:pb-10">
              You own your private keys, and the enhanced encryption mode
              guarantees the ultimates security of the asset.
            </p>
            <div className="flex flex-wrap justify-center gap-5 items-center mb-[60px] md:mb-[100px]">
              <Image
                src={chPlay1}
                alt=""
                className="w-[45%] md:w-auto md:w- bg-titleBlack rounded-[8px] cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.gilwallet"
                  )
                }
              />
              <Image
                src={appStore}
                alt=""
                className="w-[45%] md:w-auto bg-titleBlack rounded-[8px] cursor-pointer"
                title="Coming soon"
              />
              <Image
                src={chPlay2}
                alt=""
                className="w-[45%] md:w-auto bg-titleBlack rounded-[8px] cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://chrome.google.com/webstore/detail/sensui-wallet/ebaeifdbcjklcmoigppnpkcghndhpbbm"
                  )
                }
              />
            </div>
          </div>
          <div className="md:w-1/2 p-[10px] gap-5 flex justify-center">
            <Image
              src={coinDetails}
              alt=""
              width={600}
              height={600}
              className="w-[28%] md:w-[43%] first-line:translate-y-[40px]"
            />
            <Image
              src={recepts}
              alt=""
              width={600}
              height={600}
              className="w-[25%] md:w-[40%] translate-y-[-40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
