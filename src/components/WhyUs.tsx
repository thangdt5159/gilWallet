import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import swap from "../../public/images/swap.png";
import trade from "../../public/images/nft-details.png";
import chPlay1 from "../../public/images/header/ch-play-1.png";
import chPlay2 from "../../public/images/header/ch-play-2.png";
import appStore from "../../public/images/header/app-store.png";
import phone2 from "../../public/images/phone-2.png";

const WhyUs = () => {
  const data1 = [
    {
      id: 1,
      image: "/images/whyUs/token-1.png",
    },
    {
      id: 2,
      image: "/images/whyUs/token-2.png",
    },
    {
      id: 3,
      image: "/images/whyUs/token-3.png",
    },
    {
      id: 4,
      image: "/images/whyUs/token-4.png",
    },
  ];

  const data2 = [
    {
      id: 1,
      image: "/images/whyUs/token-5.png",
      title: "",
    },
    {
      id: 2,
      image: "/images/whyUs/token-6.png",
      title: "",
    },
    {
      id: 3,
      image: "/images/whyUs/token-gil.png",
      title: "GIL",
    },
    {
      id: 4,
      image: "/images/whyUs/token-7.png",
      title: "",
    },
    {
      id: 5,
      image: "/images/whyUs/token-8.png",
      title: "",
    },
  ];

  const data3 = [
    {
      id: 1,
      image: "/images/whyUs/token-9.png",
      title: "",
    },
    {
      id: 2,
      image: "/images/whyUs/token-10.png",
      title: "",
    },
    {
      id: 3,
      image: "/images/whyUs/token-sui.png",
      title: "SUI",
    },
    {
      id: 4,
      image: "/images/whyUs/token-11.png",
      title: "",
    },
    {
      id: 5,
      image: "/images/whyUs/token-12.png",
      title: "",
    },
  ];

  const data4 = [
    {
      id: 1,
      image: "/images/whyUs/token-13.png",
    },
    {
      id: 2,
      image: "/images/whyUs/token-14.png",
    },
    {
      id: 3,
      image: "/images/whyUs/token-15.png",
    },
    {
      id: 4,
      image: "/images/whyUs/token-16.png",
    },
  ];

  const img1Ref = useRef<any>(null);
  const img2Ref = useRef<any>(null);
  const img3Ref = useRef<any>(null);
  const img4Ref = useRef<any>(null);

  useLayoutEffect(() => {
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const img4 = img4Ref.current;

    Object.keys(img1.children).forEach((element: any) => {
      img1.children[element].style.animationDuration =
        Math.floor(Math.random() * 5 + 5) + "s";
    });
    Object.keys(img2.children).forEach((element: any) => {
      img2.children[element].style.animationDuration =
        Math.floor(Math.random() * 5 + 4) + "s";
    });
    Object.keys(img3.children).forEach((element: any) => {
      img3.children[element].style.animationDuration =
        Math.floor(Math.random() * 5 + 6) + "s";
    });
    Object.keys(img4.children).forEach((element: any) => {
      img4.children[element].style.animationDuration =
        Math.floor(Math.random() * 5 + 7) + "s";
    });
  }, []);

  return (
    <section className="relative">
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat [background-size:120%] [background-position:100%_70%] md:[background-size:55%] md:[background-position:100%_50%] z-[-1]"></div>
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat bg-top bg-contain md:[background-size:55%] md:[background-position:0%_50%] z-[-1]"></div>
      <div className="md:py-[100px] pb-[50px]">
        <div className="md:max-w-[1140px] mx-auto">
          <div className="md:flex items-center justify-between">
            <Image
              src={phone2}
              alt=""
              width={600}
              height={600}
              className="scale-[0.7] md:scale-90"
            />
            {/* <div className="md:w-1/2 md:flex p-[10px]">
              <Image
                src={swap}
                alt=""
                width={600}
                height={600}
                className="w-1/2 mr-[-60px] [transform:perspective(9cm)_rotateX(2deg)_rotateZ(-15deg)_rotateY(22deg)_scale(0.8)]"
              />
              <Image
                src={trade}
                alt=""
                width={600}
                height={600}
                className="w-1/2 ml-[-40px] [transform:perspective(9cm)_rotateX(7deg)_rotateZ(15deg)_rotateY(-25deg)_scale(0.6)_translateY(-200px)]"
              />
            </div> */}
            <div className="md:w-1/2 md:ml-[60px] md:p-[10px] p-5 text-center">
              <h4 className="uppercase w-fit mx-auto md:mx-0 bg-[#124EE852] text-darkBlue text-[14px] font-semibold leading-[1.3em] tracking-[1px] mb-[15px] py-2 px-[15px] rounded-full">
                MORE POSSIBILITIES
              </h4>
              <h1 className="text-[32px] md:text-[44px] text-titleBlack font-semibold leading-[1.3em] tracking-[-0.8px] pb-5 md:pb-0">
                Take control of your digital assets
              </h1>
              <p className="text-darkGray md:text-[18px] leading-[1.9em] pb-5">
                Say goodbye to the hassle of managing multiple accounts, and
                hello to easy and secure transactions
              </p>
              <div className="flex flex-wrap justify-center gap-5 items-center mt-10">
                <Image
                  src={chPlay1}
                  alt=""
                  className="w-[45%] md:w-auto bg-titleBlack rounded-[8px] cursor-pointer"
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
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10">
            <div className="md:w-1/2 text-center p-5 md:p-0">
              <h4 className="uppercase w-fit mx-auto md:mx-0 mt-8 md:mt-0 text-darkPink text-[14px] font-semibold leading-[1.3em] tracking-[1px] bg-[#BC35BC47] mb-[15px] py-2 px-[15px] rounded-full">
                Why sensui wallet
              </h4>
              <h1 className="text-titleBlack text-[32px] md:text-[44px] font-semibold leading-[1.3em] tracking-[-0.8px] pb-5">
                1000+ cryptocurrencies and tokens
              </h1>
              <p className="text-darkGray md:text-[18px] leading-[1.9em] pb-5">
                Sensui Wallet will support multiple tokens starting with SUI
              </p>
              <button
                className="text-titleBlack text-[18px] font-semibold leading-[22px] my-[10px] md:my-0 border border-[#999FB7] py-[15px] px-[35px] rounded-full transition-all duration-500 hover:bg-titleBlack hover:text-lightGray"
                onClick={() => window.open("https://twitter.com/SensuiWallet")}
              >
                Learn more
              </button>
            </div>
            <div className="md:w-1/2 p-[10px] pb-0 md:ml-[60px]">
              <div className="flex justify-center items-center" ref={img1Ref}>
                {data1.map((item) => (
                  <Image
                    src={item.image}
                    alt=""
                    key={item.id}
                    width={100}
                    height={100}
                    className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-blink mx-[2px] md:mx-[5px] rounded-full`}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center" ref={img2Ref}>
                {data2.map((item) => (
                  <Image
                    src={item.image}
                    alt=""
                    key={item.id}
                    width={100}
                    height={100}
                    className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-blink mx-[2px] md:mx-[5px] rounded-full`}
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center" ref={img3Ref}>
                {data3.map((item) => (
                  <Image
                    src={item.image}
                    alt=""
                    key={item.id}
                    width={100}
                    height={100}
                    className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-blink mx-[2px] md:mx-[5px] rounded-full`}
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center" ref={img4Ref}>
                {data4.map((item) => (
                  <Image
                    src={item.image}
                    alt=""
                    key={item.id}
                    width={100}
                    height={100}
                    className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-blink mx-[2px] md:mx-[5px] rounded-full`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
