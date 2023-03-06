import React, { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const Navbar = ({ toggle, setToggle }: any) => {
  const data = [
    {
      id: 1,
      title: "NFT",
    },
    {
      id: 2,
      title: "Crypto",
    },
    {
      id: 3,
      title: "About Us",
    },
    {
      id: 4,
      title: "Our Team",
    },
    {
      id: 5,
      title: "Contact Us",
    },
    {
      id: 6,
      title: "Online Shop",
    },
    {
      id: 7,
      title: "Blog",
    },
  ];

  const [visible, setVisible] = useState(true);
  const [expand, setExpand] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 900) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* mobile */}
      <nav
        className={`bg-black md:hidden w-screen py-[6px] px-[1rem] transition-all duration-500 overflow-hidden z-[999] ${
          toggle ? "h-screen" : "h-[53px]"
        }`}
      >
        <div className="flex items-center">
          <div
            className="px-[0.75rem] h-[2.5625rem] flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            <div className="w-[26px] h-[12px] relative cursor-pointer">
              <span
                className={`absolute bg-[#b6bdc5] w-full h-[2px] rounded-[9px] left-0 transition-all duration-300 ${
                  toggle ? "top-[3px]" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute bg-[#b6bdc5] h-[2px] rounded-[9px] left-0 top-[10px] transition-all duration-300 ${
                  toggle ? "w-full top-[7px]" : "w-1/2"
                }`}
              ></span>
            </div>
          </div>
          <div className="font-extrabold text-[21px] tracking-[-0.018em] text-center flex-grow pr-[5.125rem] pl-[1.875rem]">
            Logo
          </div>
        </div>
        <div className="pt-[6px] px-[1rem] pb-[404px]">
          {data.map((item) => (
            <div
              key={item.id}
              className={`py-[1rem] flex items-center cursor-pointer border-t border-[#b6bdc51f] text-[15px] leading-[19px] rounded-[8px] ${
                expand && activeTab === item.id
                  ? "bg-[#13171f] w-[calc(100%_+_2rem)] ml-[-1rem] p-[1rem]"
                  : ""
              }`}
              onClick={() => {
                if (activeTab !== item.id) {
                  setExpand(true);
                } else {
                  setExpand(!expand);
                }
                setActiveTab(item.id);
              }}
            >
              <div
                className={`font-medium mr-[6px] ${
                  expand && activeTab === item.id ? "text-lightGreen" : ""
                }`}
              >
                {item.title}
              </div>
              <HiChevronDown
                className={`transition-all duration-500 ${
                  expand && activeTab === item.id
                    ? "rotate-180 text-lightGreen"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="py-[9px] px-[22px] border border-border rounded-[15px] text-[15px] leading-[15px] font-medium">
            Buy Now
          </button>
        </div>
      </nav>

      {/* desktop */}
      <nav className="py-[2px] px-[1.5rem] w-full mt-4 hidden md:block absolute bg-transparent">
        <div className="flex justify-between items-center md:max-w-[1400px] mx-auto">
          <div className="font-extrabold text-[28px] cursor-pointer">LOGO</div>
          <div className="flex items-center justify-between ml-8 pl-4 text-[15px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="navbar-item flex items-center cursor-pointer transition-all duration-500 hover:text-lightGreen py-4 px-[17px]"
              >
                <div className="font-medium mr-[6px]">{item.title}</div>
                <HiChevronDown className="down-arrow transition-all duration-500" />
              </div>
            ))}
            <button className="py-[9px] px-[22px] border border-border rounded-[15px] leading-[15px] font-medium ml-5 transition-all duration-500 hover:bg-white hover:text-[#212529]">
              Buy Now
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`py-[2px] px-[1.5rem] w-full hidden md:block fixed bg-black/70 backdrop-blur-[20px] backdrop-saturate-[180%] transition-all duration-500 ${
          visible ? "translate-y-[-60px] z-[-1]" : "z-[1000] translate-y-0"
        }`}
      >
        <div className="flex justify-between items-center md:max-w-[1400px] mx-auto">
          <div className="font-extrabold text-[24px]  cursor-pointer">LOGO</div>
          <div className="flex items-center justify-between ml-8 pl-4 text-[14px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="navbar-item flex items-center cursor-pointer transition-all duration-500 hover:text-lightGreen py-4 px-[17px]"
              >
                <div className="font-medium mr-[6px]">{item.title}</div>
                <HiChevronDown className="down-arrow transition-all duration-500" />
              </div>
            ))}
            <button className="py-[9px] px-[22px] border border-border rounded-[15px] leading-[15px] font-medium ml-5 transition-all duration-500 hover:bg-white hover:text-[#212529]">
              Buy Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
