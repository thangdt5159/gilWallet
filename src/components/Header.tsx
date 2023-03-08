import Image from "next/image";
import React from "react";
import phone from "../../public/images/header/cards.png";
import chPlay1 from "../../public/images/header/ch-play-1.png";
import chPlay2 from "../../public/images/header/ch-play-2.png";
import appStore from "../../public/images/header/app-store.png";

const Header = () => {
  return (
    <section className=" bg-[#020710] relative min-h-screen md:h-screen">
      <div className="absolute w-full h-full bg-gradientBg bg-no-repeat bg-top [background-size:130%] md:[background-size:55%] md:[background-position:100%_50%]"></div>
      <div className="md:pt-[180px]">
        <div className="relative md:max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="absolute uppercase md:w-[100px] md:h-[100px] w-[60px] h-[60px] bg-star [background-size:30%] md:[background-size:25%] bg-no-repeat bg-center animate-spin top-[5%] md:top-0 md:left-1/2 left-[30%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 250.5 250.5"
              overflow="visible"
              className="md:w-[100px] md:h-[100px] w-[60px] h-[60px]"
            >
              <path
                d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                id="e-path"
                fill="transparent"
              ></path>
              <text>
                <textPath
                  id="e-text-path"
                  href="#e-path"
                  startOffset="0%"
                  fill="#fff"
                  className="text-[28px] [word-spacing:50px]"
                >
                  Sensui Wallet - Sensui Wallet -
                </textPath>
              </text>
            </svg>
          </div>
          <div className="md:w-1/2 px-5 text-center md:text-start md:px-0">
            <div className="md:mr-[10%] md:ml-[20%]">
              <h4 className="bg-[#1a1a1a] w-fit mb-[15px] px-[15px] py-2 rounded-full text-lightGray text-[14px] font-semibold leading-[1.3em] tracking-[1px] mx-auto md:mx-0">
                #1 SENSUI WALLET
              </h4>
              <h1 className="text-[40px] md:text-[62px] font-semibold leading-[1.2em] mb-5">
                The one-stop-shop for all your crypto needs
              </h1>
              <p className="text-lightGray md:text-[18px] leading-[1.7em] mb-10 md:mb-[80px]">
                Sensui Wallet - the easy, secure way to store and spend your
                cryptocurrency.
              </p>
              <div className="flex flex-wrap justify-center gap-5 items-center md:mb-[100px]">
                <Image
                  src={chPlay1}
                  alt=""
                  className="w-[45%] md:w-auto cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.gilwallet"
                    )
                  }
                />
                <Image
                  src={appStore}
                  alt=""
                  className="w-[45%] md:w-auto cursor-pointer"
                  title="Coming soon"
                />
                <Image
                  src={chPlay2}
                  alt=""
                  className="w-[45%] md:w-auto cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://chrome.google.com/webstore/detail/sensui-wallet/ebaeifdbcjklcmoigppnpkcghndhpbbm"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:mb-[80px] my-10">
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
