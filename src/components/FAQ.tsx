import React from "react";

const FAQ = () => {
  return (
    <section className="md:py-[120px] bg-titleBlack text-center bg-gradientBg bg-no-repeat bg-bottom [background-size:55%]">
      <div className="md:max-w-[1040px] mx-auto relative">
        <div className="bg-gradientBg bg-no-repeat absolute bg-cover w-full h-full [background-position:30%_90%] top-0 left-0"></div>
        <div className="bg-transparent [background-image:radial-gradient(at_top_left,#1A1A1A85_0%,#1A1A1ACF_100%)] p-[60px]">
          <div className="md:max-w-[657px] mx-auto p-[10px]">
            <h1 className="text-[56px] font-semibold leading-[1.2em] mb-5">
              Your go-to crypto solution
            </h1>
            <p className="text-darkGray text-[18px] leading-[1.7em] mb-5">
              Whether you're a seasoned crypto investor or just getting started,
              Sensui Wallet has everything you need to manage your digital
              assets with ease
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
