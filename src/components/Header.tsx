import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { IoIosMenu } from "react-icons/io";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const Header = () => {
  return (
    <>
      <div className="h-[72px]  w-full bg-[#F7F7F7] border-b-[1px] border-b-[#676767] flex justify-between max-[656px]:justify-center items-center">
        <div className="w-[130.6px] max-[656px]:w-[1040px] h-[41px] flex justify-between item-center max-[756px]:ml-[1rem] ml-[3rem]">
          <Image
            src={"/static/logo.png"}
            alt=""
            width={150}
            height={1500}
            className="w-auto h-auto "
          />
          <IoIosMenu className="hidden mt-2 mr-3 max-[656px]:block w-[35px] h-[30px]" />
        </div>
        <div className="w-[910px] bg-purple-500 max-[1180px]:w-[750px]  max-[656px]:hidden h-[44px] max-[986px]:w-[600px] max-[870px]:w-[500px] max-[756px]:w-[440px] max-[756px]:mr-[2rem] mr-[3rem] flex items-center justify-end">
          <ul className="flex items-center justify-between w-full h-full bg-white">
            <li className={`text-[16px] font-[400] ${roboto} ml-2`}>Home</li>
            <li className={`text-[16px] font-[400] ${roboto}`}>Courses</li>
            <li className={`text-[16px] font-[400] ${roboto}`}>Services</li>
            <li className={`text-[16px] font-[400] ${roboto}`}>Achivement</li>
            <li className={`text-[16px] font-[400] ${roboto}`}>About Us</li>
            <li
              className={`text-[16px] font-[400] max-[870px]:hidden ${roboto}`}
            >
              Testimonial
            </li>
            <div className="flex max-[986px]:hidden">
              <li>
                <button className="w-[80px] border-[1px] mx-4 border-black h-[40px] rounded-[5px]">
                  Login
                </button>
              </li>
              <li>
                <button className="w-[80px] border-[1px] bg-black text-white border-black h-[40px] rounded-[5px]">
                  Sign Up
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
