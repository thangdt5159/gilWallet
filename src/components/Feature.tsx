import Image from "next/image";
import React from "react";
import purpleDot from "../../public/images/purple-dot.png";

const Feature = () => {
  const data = [
    {
      id: 1,
      title: "High security",
      des: "Sensui wallet is designed with advanced security features and private key to ensure the safety of users' assets",
    },
    {
      id: 2,
      title: "Multi-cryptocurrency integration",
      des: "Sensui wallet with the future will be muiltichain, support multiple cryptocurrencies",
    },
    {
      id: 3,
      title: "Ease of use",
      des: "Simple and user-friendly interface, easy to operate and control assets",
    },
    {
      id: 4,
      title: "Card payment integration",
      des: "Sensui wallet integrates Visa and Mastercard payments, making it easy for users to buy and sell cryptocurrencies",
    },
    {
      id: 5,
      title: "Cross-platform support",
      des: "Sensui wallet can be used on multiple platforms, including iOS, Android and Web, helping users access and manage assets anytime and anywhere",
    },
    {
      id: 6,
      title: "Staking Support",
      des: "Sensui wallet supports staking for some cryptocurrencies which helps users to profit from holding crypto",
    },
  ];

  return (
    <section className="bg-titleBlack relative">
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat bg-cover [background-position:50%_40%]"></div>
      <div className="md:py-[120px]">
        <div className="md:max-w-[1140px] mx-auto relative z-10">
          <div className="md:pb-10 md:max-w-[560px] mx-auto text-center">
            <h4 className="uppercase bg-[#1a1a1a] mx-auto w-fit mb-[15px] px-[15px] py-2 rounded-full text-lightGray text-[14px] font-semibold leading-[1.3em] tracking-[1px]">
              Sensui Wallet
            </h4>
            <h1 className="text-[44px] font-semibold leading-[1.3em] tracking-[-0.8px] pb-5">
              The ultimate cryptocurrency solution
            </h1>
            <p className="text-darkGray text-[18px] leading-[1.7em]">
              Experience lightning-fast transactions and rock-solid security
            </p>
          </div>
          <div className="md:p-[60px] [background-image:radial-gradient(at_top_left,#1A1A1A85_0%,#1A1A1ACF_100%)] grid grid-cols-3 gap-y-5 rounded-[20px]">
            {data.map((item) => (
              <div key={item.id} className=" flex p-5">
                <Image
                  src={purpleDot}
                  alt=""
                  className="w-[29px] h-[29px] mr-[30px]"
                />
                <div>
                  <h4 className="text-[22px] font-bold leading-[1.7em]">
                    {item.title}
                  </h4>
                  <p className="text-[#D3D3D4A1]">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Feature;
