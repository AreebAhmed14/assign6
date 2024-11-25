import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Courses = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col ">
        <h1 className={`${roboto} font-[700] text-[56px] mt-[4rem] max-[570px]:text-[32px]`}>
          Courses
        </h1>
        <p className={`text-[18px] font-[400] ${roboto} mt-[1rem]`}>
          Your Ultimate Guide to learning
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-[4rem]">
        <div className="flex justify-center items-center">
          <p className={` ${roboto} text-[16px] font-[400] mx-4 border-b-[1px] border-black`}>Popular</p>
          <p className={` ${roboto} text-[16px] font-[400] mx-4`}>
            Recommended
          </p>
          <p className={` ${roboto} text-[16px] font-[400] mx-4 max-[960px]:mx-2`}>Best Price</p>
        </div>

        <div className=" w-full flex justify-between mt-[3.5rem] items-center max-[960px]:flex-col">
          <div className="w-[416px] h-[534px] flex flex-col bg-[#F7F7F7] max-[960px]:my-[1rem] overflow-hidden rounded-[5px] max-[1250px]:w-[390px] max-[1170px]:w-[350px] max-[1050px]:w-[310px]">
            <div className="w-full h-[300px] bg-black">
              <Image
                src="/static/card1.jpg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex justify-between mt-3 pl-5">
              <p className={`${roboto} font-[600] text-[14px]`}>Design</p>
              <div className=" flex justify-center items-center pr-5 h-[24px]">
                <Image
                  src="/static/startext.png"
                  alt="Logo"
                  width={500}
                  height={1500}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h1 className={`${roboto} pl-5 font-[700] text-[24px] mt-3`}>
              UX/UI Design 201
            </h1>
            <p
              className={`${roboto} pl-5 font-[400] text-[16px] max-[960px]:pr-1 w-[382px] max-[1170px]:w-[auto] mt-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="pl-5 flex mt-[2rem] max-[1170px]:mt-[0.5rem] items-center">
              <button
                className={`py-[8px] px-[20px] rounded-[5px] border-[1px] border-black`}
              >
                Enroll Now
              </button>
              <p className={`${roboto} font-[500] text-[16px] ml-10`}>$400</p>
            </div>
          </div>

          <div className="w-[416px] h-[534px] flex flex-col bg-[#F7F7F7] max-[960px]:my-[1rem] overflow-hidden rounded-[5px] max-[1250px]:w-[390px] max-[1170px]:w-[350px] max-[1050px]:w-[310px]">
            <div className="w-full h-[300px] bg-black">
              <Image
                src="/static/card2.jpg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex justify-between mt-3 pl-5">
              <p className={`${roboto} font-[600] text-[14px]`}>Programming</p>
              <div className=" flex justify-center items-center pr-5 h-[24px]">
                <Image
                  src="/static/startext.png"
                  alt="Logo"
                  width={500}
                  height={1500}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h1 className={`${roboto} pl-5 font-[700] text-[24px] mt-3`}>
            Introduction to Python
            </h1>
            <p
              className={`${roboto} pl-5 font-[400] text-[16px] max-[960px]:pr-1 w-[382px] max-[1170px]:w-[auto] mt-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="pl-5 flex mt-[2rem] max-[1170px]:mt-[0.5rem] items-center">
              <button
                className={`py-[8px] px-[20px] rounded-[5px] border-[1px] border-black`}
              >
                Enroll Now
              </button>
              <p className={`${roboto} font-[500] text-[16px] ml-10`}>$400</p>
            </div>
          </div>

          <div className="w-[416px] h-[534px] flex flex-col bg-[#F7F7F7] max-[960px]:my-[1rem] overflow-hidden rounded-[5px] max-[1250px]:w-[390px] max-[1170px]:w-[350px] max-[1050px]:w-[310px]">
            <div className="w-full h-[300px] bg-black">
              <Image
                src="/static/card3.jpg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex justify-between mt-3 pl-5">
              <p className={`${roboto} font-[600] text-[14px]`}>Business</p>
              <div className=" flex justify-center items-center pr-5 h-[24px]">
                <Image
                  src="/static/startext.png"
                  alt="Logo"
                  width={500}
                  height={1500}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h1 className={`${roboto} pl-5 font-[700] text-[24px] max-[1050px]:text-[21px] mt-3`}>
            Data Analysis for Beginners
            </h1>
            <p
              className={`${roboto} pl-5 font-[400] text-[16px] max-[960px]:pr-1 w-[382px] max-[1170px]:w-[auto] mt-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="pl-5 flex mt-[2rem] max-[1170px]:mt-[0.5rem] items-center">
              <button
                className={`py-[8px] px-[20px] rounded-[5px] border-[1px] border-black`}
              >
                Enroll Now
              </button>
              <p className={`${roboto} font-[500] text-[16px] ml-10`}>$400</p>
            </div>
          </div>
        </div>




        <div className=" w-full flex justify-between mt-[3.5rem] items-center max-[960px]:hidden">
          <div className="w-[416px] h-[534px] flex flex-col bg-[#F7F7F7] max-[960px]:my-[1rem] overflow-hidden rounded-[5px] max-[1250px]:w-[390px] max-[1170px]:w-[350px] max-[1050px]:w-[310px]">
            <div className="w-full h-[300px] bg-black">
              <Image
                src="/static/card4.jpg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex justify-between mt-3 pl-5">
              <p className={`${roboto} font-[600] text-[14px]`}>Art</p>
              <div className=" flex justify-center items-center pr-5 h-[24px]">
                <Image
                  src="/static/startext.png"
                  alt="Logo"
                  width={500}
                  height={1500}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h1 className={`${roboto} pl-5 font-[700] text-[24px] mt-3`}>
            Art Specialization
            </h1>
            <p
              className={`${roboto} pl-5 font-[400] text-[16px] max-[960px]:pr-1 w-[382px] max-[1170px]:w-[auto] mt-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="pl-5 flex mt-[2rem] max-[1170px]:mt-[0.5rem] items-center">
              <button
                className={`py-[8px] px-[20px] rounded-[5px] border-[1px] border-black`}
              >
                Enroll Now
              </button>
              <p className={`${roboto} font-[500] text-[16px] ml-10`}>$400</p>
            </div>
          </div>

          <div className="w-[416px] h-[534px] flex flex-col bg-[#F7F7F7] max-[960px]:my-[1rem] overflow-hidden rounded-[5px] max-[1250px]:w-[390px] max-[1170px]:w-[350px] max-[1050px]:w-[310px]">
            <div className="w-full h-[300px] bg-black">
              <Image
                src="/static/card5.jpg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex justify-between mt-3 pl-5">
              <p className={`${roboto} font-[600] text-[14px]`}>Law</p>
              <div className=" flex justify-center items-center pr-5 h-[24px]">
                <Image
                  src="/static/startext.png"
                  alt="Logo"
                  width={500}
                  height={1500}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h1 className={`${roboto} pl-5 font-[700] text-[24px] mt-3`}>
            Rule of Law
            </h1>
            <p
              className={`${roboto} pl-5 font-[400] text-[16px] max-[960px]:pr-1 w-[382px] max-[1170px]:w-[auto] mt-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="pl-5 flex mt-[2rem] max-[1170px]:mt-[0.5rem] items-center">
              <button
                className={`py-[8px] px-[20px] rounded-[5px] border-[1px] border-black`}
              >
                Enroll Now
              </button>
              <p className={`${roboto} font-[500] text-[16px] ml-10`}>$400</p>
            </div>
          </div>

          <div className="w-[416px] h-[534px] flex flex-col bg-[#F7F7F7] max-[960px]:my-[1rem] overflow-hidden rounded-[5px] max-[1250px]:w-[390px] max-[1170px]:w-[350px] max-[1050px]:w-[310px]">
            <div className="w-full h-[300px] bg-black">
              <Image
                src="/static/card6.jpg"
                alt="Logo"
                width={1500}
                height={1500}
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex justify-between mt-3 pl-5">
              <p className={`${roboto} font-[600] text-[14px]`}>Tech</p>
              <div className=" flex justify-center items-center pr-5 h-[24px]">
                <Image
                  src="/static/startext.png"
                  alt="Logo"
                  width={500}
                  height={1500}
                  className="w-full h-full"
                />
              </div>
            </div>
            <h1 className={`${roboto} pl-5 font-[700] text-[24px] max-[1050px]:text-[21px] mt-3`}>
            Introduction to webflow
            </h1>
            <p
              className={`${roboto} pl-5 font-[400] text-[16px] max-[960px]:pr-1 w-[382px] max-[1170px]:w-[auto] mt-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div className="pl-5 flex mt-[2rem] max-[1170px]:mt-[0.5rem] items-center">
              <button
                className={`py-[8px] px-[20px] rounded-[5px] border-[1px] border-black`}
              >
                Enroll Now
              </button>
              <p className={`${roboto} font-[500] text-[16px] ml-10`}>$400</p>
            </div>
          </div>
        </div>


        <div className='w-full flex justify-center items-center'>
            <button className='py-[12px] px-[24px] my-[4rem] border-[1px] border-black rounded-[5px]'>View All Courses</button>
            </div>



        
      </div>
    </>
  );
};

export default Courses;
