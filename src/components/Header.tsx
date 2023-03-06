import Image from "next/image";
import React from "react";
import phone from "../../public/images/header/phone.png";

const Header = () => {
  return (
    <section className="md:pt-[180px] bg-[#020710]">
      <div className="md:max-w-[1440px] mx-auto flex items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <Image src={phone} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
