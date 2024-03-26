import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    /* 데스크탑 */
    <nav className="navbar flex w-full items-center justify-between py-6">
      {/* <img src={logo} alt="hoobank" className="h-[32px] w-[124px]" /> */}
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        <li
          className={`cursor-pointer font-poppins text-[16px] font-normal text-white
        }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`cursor-pointer font-poppins text-[16px] font-normal text-white ml-10
        }`}
        >
          <Link to="/result">Result</Link>
        </li>
      </ul>

      {/* 모바일 디바이스 */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex-1 flex-col list-none items-center justify-end flex">
            <li
              className={`cursor-pointer font-poppins text-[16px] font-normal text-white}`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer font-poppins text-[16px] font-normal text-white ml-10}`}
            >
              <Link to="/result">Result</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
