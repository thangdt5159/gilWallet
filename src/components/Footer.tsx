import React from "react";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Dex",
    },
    {
      id: 3,
      title: "Launchpad",
    },
    {
      id: 4,
      title: "Marketplace",
    },
    {
      id: 5,
      title: "Docs",
    },
    {
      id: 6,
      title: "Contact Us",
    },
  ];

  return (
    <section className="md:bg-gradient-to-r from-[#141d21] via-[#070d16] to-[#0c1225] font-inter">
      <div className="max-w-[1366px] mx-auto pt-[2rem] pb-[0.5rem] px-8 md:px-[15px]">
        <div className="mt-4 md:mt-[3rem] mb-[1.5rem] pb-[0.5rem] border-b border-[#ffffff12]">
          <div className="-mx-8 md:flex justify-between">
            {/* 1 */}
            <div className="md:w-1/3 px-8 pb-8">
              <h3 className="text-[30px] mb-[15px] font-bold">LOGO</h3>
              <p className="text-[15px] mb-4 tracking-[-0.009em]">
                Store and manage your crypto assets with ease and security.
              </p>
            </div>

            {/* 2 */}
            <div className="md:w-1/3 px-8 pb-8 tracking-[-0.009em]">
              <h4 className="text-[14px] mb-5 font-semibold tracking-[0.5px] before:w-2 before:content-['|'] before:text-lightGreen before:font-extrabold before:mr-2 before:text-[14px]">
                CONTACT US
              </h4>
              <p className="text-[15px] mb-4">
                202 Helga Springs Rd, Crawford, TN 38554
              </p>
              <p className="mb-4">
                Call Us:{" "}
                <span className=" ransition-all duration-300 hover:text-lightGreen cursor-pointer">
                  <b>800.275.8777</b>
                </span>
              </p>
              <p className="mb-4 transition-all duration-300 hover:text-lightGreen cursor-pointer">
                alex@company.com
              </p>
            </div>

            {/* 3 */}
            <form className="md:w-1/3 px-8 pb-8">
              <h4 className="text-[14px] mb-5 font-semibold tracking-[0.5px] before:w-2 before:content-['|'] before:text-lightGreen before:font-extrabold before:mr-2 before:text-[14px]">
                SIGN UP FOR EMAIL UPDATES
              </h4>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="bg-[#1c222b] w-[64%] rounded-[20px] py-4 px-[25px] leading-[20px] focus:outline-none"
                  required
                />
                <input
                  type="submit"
                  value="Subcribe"
                  className="bg-[#36bb91] w-[41%] rounded-[20px] py-4 px-[25px] leading-[20px] ml-[-7%] tracking-[-0.011em] cursor-pointer"
                />
              </div>
              <p className="text-[14px] mt-[22px] leading-[22px] tracking-[-0.006em]">
                Sign up with your email address to receive news and updates
              </p>
            </form>
          </div>
        </div>
        <div className="max-w-[690px] md:max-w-none flex flex-col-reverse md:flex-row justify-between text-[13px]">
          <p className="mb-4 text-[#9097aa] tracking-[-0.0025em] text-center md:text-start">
            Copyright ©2023 SenSui. All rights reserved.
          </p>
          <ul className="mb-4 flex flex-wrap justify-center md:justify-between">
            {data.map((item) => (
              <li
                key={item.id}
                className="pr-4 md:px-4 leading-[1.7rem] tracking-[-0.0025em] cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
