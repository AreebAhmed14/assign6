import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className=" flex justify-center items-center max-[920px]:flex-col ">
        <div className="w-[640px] max-[1032px]:w-[600px] max-[475px]:w-[400px] max-[600px]:w-[450px] flex flex-col max-[920px]:mt-[5rem] pl-[4rem] max-[600px]:pl-[15px] max-[400px]:pl-[0px] max-[400px]:w-[350px] max-[370px]:w-[310px]">
          <h1
            className={`w-[500] max-[370px]:pl-3 text-[56px] max-[370px]:w-[300px] max-[600px]:w-[380px] max-[400px]:w-[350px] max-[600px]:text-[40px] font-[700] ${roboto} leading-[67.2px] max-[600px]:leading-[48px] max-[400px]:text-[35px]`}
          >
            Learn new skills online with ease
          </h1>
          <p
            className={`w-[500px] max-[370px]:pl-3 max-[600px]:w-[380px] max-[400px]:text-[16px] max-[400px]:w-[340px] max-[370px]:w-[300px] max-[370px]:text-[15px] max-[370px]:mt-2 ${roboto} font-[400] text-[18px] leading-[27px] max-[370px]:leading-[20px] mt-6`}
          >
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="w-[358px] max-[370px]:pl-3 max-[400px]:w-[340px] max-[370px]:w-[300px] h-[64px] flex justify-between max-[400px]:justify-start mt-7 items-center">
            <button className="py-[12px] px-[24px] max-[400px]:px-[15px] max-[370px]:text-[14px] max-[370px]:px-[10px] border-black rounded-[5px] border-[1px] text-white bg-black">
              Start learning now
            </button>
            <button className="py-[12px] px-[24px] max-[400px]:px-[15px] max-[370px]:text-[14px] max-[370px]:px-[10px] max-[400px]:ml-2 border-black rounded-[5px] border-[1px]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-[640px] max-[920px]:w-[600px] max-[475px]:w-[350px] max-[920px]:h-[700px] max-[920px]:mt-[3rem] overflow-hidden max-[600px]:w-[428px] max-[600px]:h-[390px] h-[900px] max-[370px]:w-[310px] max-[370px]:h-[300px] max-[370px]:mt-[4.5rem]">
          <Image src={"/static/main.jpg"} alt="" width={1500} height={1500}  className="w-full "/>
        </div>
      </div>
    </>
  );
};

export default Hero;
