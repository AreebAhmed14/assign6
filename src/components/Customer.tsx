import React from "react";
import { Roboto } from "next/font/google";
import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Customer = () => {
  return (
    <>
      <div className="w-full bg-[#F7F7F7]">
        <div className="w-full flex flex-col">
          <h1
            className={`font-[700] text-[48px] max-[650px]:hidden ml-[4rem] mt-[4rem] ${roboto}`}
          >
            Customer testimonials
          </h1>
          <h1
            className={`font-[700] hidden max-[650px]:block text-[32px] text-center mt-[4rem] ${roboto}`}
          >
           What Our Student Say
          </h1>
          <p className={`font-[400] text-[18px] ml-[4rem] max-[650px]:text-center max-[650px]:ml-0 mt-[1rem] ${roboto}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full flex h-[418px] mb-[3rem] mt-[5rem] flex-col items-center">
          <div className="w-[1152px] h-[321px] flex justify-around max-[1140px]:w-[auto] max-[350px]:h-[340px]">
            <div className="w-[363px] h-full border-[1px] border-black max-[1140px]:mr-2 max-[1150px]:w-[320px] max-[995px]:mr-0 max-[350px]:w-[300px]">
              <div className="w-[116px] h-[19px]  ml-7 mt-8 flex">
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
              </div>

              <p className={`mx-7 mt-7 ${roboto} font-[400] text-[18px]`}>
               {` "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."`}
              </p>

              <div className="w-[215px] h-[56px]  flex items-center justify-between ml-7 mt-5 ">
                <div className="w-[56px] h-[56] rounded-[50%] overflow-hidden ">
                  <Image
                    src="/static/team3.png"
                    alt="Logo"
                    width={1500}
                    height={1500}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[145px] h-[48px] flex flex-col ">
                  <h1 className={`${roboto} font-[600] text-[16px]`}>
                    James Nduku
                  </h1>
                  <p className={`${roboto} font-[400] text-[16px]`}>
                    Software Developer
                  </p>
                </div>
              </div>
            </div>



            <div className="w-[363px] h-full border-[1px] border-black max-[1150px]:w-[320px] max-[650px]:hidden max-[995px]:ml-3">
              <div className="w-[116px] h-[19px]  ml-7 mt-8 flex">
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
              </div>

              <p className={`mx-7 mt-7 ${roboto} font-[400] text-[18px]`}>
               {` "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."`}
              </p>

              <div className="w-[215px] h-[56px]  flex items-center justify-between ml-7 mt-5 ">
                <div className="w-[56px] h-[56] rounded-[50%] overflow-hidden ">
                  <Image
                    src="/static/team1.png"
                    alt="Logo"
                    width={1500}
                    height={1500}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[145px] h-[48px] flex flex-col ">
                  <h1 className={`${roboto} font-[600] text-[16px]`}>
                  Erick Kipkemboi
                  </h1>
                  <p className={`${roboto} font-[400] text-[16px]`}>
                  Scrum Master
                  </p>
                </div>
              </div>
            </div>



            <div className="w-[363px] h-full border-[1px] border-black ml-2 max-[1150px]:w-[320px] max-[995px]:hidden">
              <div className="w-[116px] h-[19px]  ml-7 mt-8 flex">
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
                <RiStarSFill className="w-[22px] h-[20px]" />
              </div>

              <p className={`mx-7 mt-7 ${roboto} font-[400] text-[18px]`}>
                {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."`}
              </p>

              <div className="w-[215px] h-[56px]  flex items-center justify-between ml-7 mt-5 ">
                <div className="w-[56px] h-[56] rounded-[50%] overflow-hidden ">
                  <Image
                    src="/static/team6.png"
                    alt="Logo"
                    width={1500}
                    height={1500}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[145px] h-[48px] flex flex-col ">
                  <h1 className={`${roboto} font-[600] text-[16px]`}>
                  Stephen Kerubo
                  </h1>
                  <p className={`${roboto} font-[400] text-[16px]`}>
                  UI/UX Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          


        <div className="w-[1152px] h-[48px]   mt-[2rem] flex items-center justify-between max-[1165px]:w-[1100px] max-[1150px]:w-[95%]">
            <div className="w-[72px] h-[8px] flex justify-between">
                <div className="w-[8px] h-[8px] bg-black rounded-[50%]"></div>
                <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
                <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
                <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
                <div className="w-[8px] h-[8px] bg-[#8D8D8D] rounded-[50%]"></div>
            </div>

            <div className="w-[111px] h-[48px] flex items-center justify-between ">
            <FaRegArrowAltCircleLeft className="w-[48px] h-[48px]"/>
            <FaRegArrowAltCircleRight className="w-[48px] h-[48px]"/>
            </div>
        </div>
          
        </div>
      </div>
    </>
  );
};

export default Customer;
