import Image from "next/image";
import React from "react";
import phone from "../../public/images/header/cards.png";
import chPlay1 from "../../public/images/header/ch-play-1.png";
import chPlay2 from "../../public/images/header/ch-play-2.png";
import appStore from "../../public/images/header/app-store.png";

const Header = () => {
  return (
    <section className=" bg-[#020710] relative h-screen">
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat [background-size:55%] [background-position:100%_50%]"></div>
      <div className="md:pt-[180px]">
        <div className="relative md:max-w-[1440px] mx-auto flex items-center">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250.5"
          height="250.5"
          viewBox="0 0 250.5 250.5"
          className="absolute"
        >
          <path
            d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
            id="e-path-8e3fa3e"
          ></path>
          <text>
            <textPath
              id="e-text-path-8e3fa3e"
              href="#e-path-8e3fa3e"
              startOffset="0%"
            >
              Sensui Wallet -
            </textPath>
          </text>
        </svg> */}
          <div className="md:w-1/2">
            <div className="mr-[10%] ml-[20%]">
              <h4 className="bg-[#1a1a1a] w-fit mb-[15px] px-[15px] py-2 rounded-full text-lightGray text-[14px] font-semibold leading-[1.3em] tracking-[1px]">
                #1 SENSUI WALLET
              </h4>
              <h1 className="md:text-[62px] font-semibold leading-[1.2em] mb-5">
                The one-stop-shop for all your crypto needs
              </h1>
              <p className="text-lightGray text-[18px] leading-[1.7em] mb-[100px]">
                Sensui Wallet - the easy, secure way to store and spend your
                cryptocurrency.
              </p>
              <div className="flex justify-center gap-5 items-center mb-[100px]">
                <Image
                  src={chPlay1}
                  alt=""
                  className="w- cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.gilwallet"
                    )
                  }
                />
                <Image
                  src={appStore}
                  alt=""
                  className="w- cursor-pointer"
                  title="Coming soon"
                />
                <Image
                  src={chPlay2}
                  alt=""
                  className="w- cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://chrome.google.com/webstore/detail/sensui-wallet/ebaeifdbcjklcmoigppnpkcghndhpbbm"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mb-[80px]">
            <Image
              src={phone}
              alt=""
              className="w-[90%] mx-auto animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
