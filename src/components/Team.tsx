import React from 'react'
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Team = () => {
  return (
    <>
      <div className='w-full mt-[6rem] bg-[#F7F7F7] flex flex-col items-center'>
            <div className='flex flex-col w-full justify-center items-center mt-[4rem]'>
                <h1 className={`${roboto} font-[700] text-[48px] max-[570px]:text-[32px]`}>Our team</h1>
                <p className={`${roboto} font-[400] text-[18px] text-center mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>


            <div className='w-full flex justify-center items-center max-[570px]:flex-col'>
                <div className='w-[394px] max-[570px]:w-auto h-[273px] mt-[3rem]  flex items-center flex-col'>
                    <div className='w-[80px] h-[80px] mt-3'>
                        <Image src='/static/team1.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col mt-2 '>
                        <h2 className={`${roboto} font-[600] text-[20px]`}>James Nduku</h2>
                        <p className={`${roboto} font-[400] text-[18px]`}>Marketing Coordinator</p>
                    </div>
                    <div className='flex justify-around items-end mt-[5rem]  w-[100px]'>
                    <FaLinkedin  className='w-[24px] h-[24px]'/>
                    <FaTwitter  className='w-[24px] h-[24px]'/>
                    <RiGlobalLine  className='w-[24px] h-[24px]'/>
                    </div>
                </div>
                <div className='w-[394px] max-[570px]:w-auto h-[273px] mt-[3rem]  flex items-center flex-col'>
                    <div className='w-[80px] h-[80px] mt-3 bg-purple-400'>
                        <Image src='/static/team2.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col mt-2 '>
                        <h2 className={`${roboto} font-[600] text-[20px]`}>Joseph Munyambu</h2>
                        <p className={`${roboto} font-[400] text-[18px]`}>Nursing Assistant</p>
                    </div>
                    <div className='flex justify-around items-end mt-[5rem]  w-[100px]'>
                    <FaLinkedin  className='w-[24px] h-[24px]'/>
                    <FaTwitter  className='w-[24px] h-[24px]'/>
                    <RiGlobalLine  className='w-[24px] h-[24px]'/>
                    </div>
                </div>
                <div className='w-[394px] max-[570px]:w-auto h-[273px] mt-[3rem]  flex items-center flex-col'>
                    <div className='w-[80px] h-[80px] mt-3 bg-purple-400'>
                        <Image src='/static/team3.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col mt-2 '>
                        <h2 className={`${roboto} font-[600] text-[20px]`}>Joseph Ngumbau</h2>
                        <p className={`${roboto} font-[400] text-[18px]`}>Medical Assistant</p>
                    </div>
                    <div className='flex justify-around items-end mt-[5rem]  w-[100px]'>
                    <FaLinkedin  className='w-[24px] h-[24px]'/>
                    <FaTwitter  className='w-[24px] h-[24px]'/>
                    <RiGlobalLine  className='w-[24px] h-[24px]'/>
                    </div>
                </div>

            </div>



            <div className='w-full flex justify-center items-center max-[570px]:hidden'>
                <div className='w-[394px] h-[273px] mt-[3rem]  flex items-center flex-col'>
                    <div className='w-[80px] h-[80px] mt-3 bg-purple-400'>
                        <Image src='/static/team4.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col mt-2 '>
                        <h2 className={`${roboto} font-[600] text-[20px]`}>Erick Kipkemboi</h2>
                        <p className={`${roboto} font-[400] text-[18px]`}>Web Designer</p>
                    </div>
                    <div className='flex justify-around items-end mt-[5rem]  w-[100px]'>
                    <FaLinkedin  className='w-[24px] h-[24px]'/>
                    <FaTwitter  className='w-[24px] h-[24px]'/>
                    <RiGlobalLine  className='w-[24px] h-[24px]'/>
                    </div>
                </div>
                <div className='w-[394px] h-[273px] mt-[3rem]  flex items-center flex-col'>
                    <div className='w-[80px] h-[80px] mt-3 bg-purple-400'>
                        <Image src='/static/team5.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col mt-2 '>
                        <h2 className={`${roboto} font-[600] text-[20px]`}>Stephen Kerubo</h2>
                        <p className={`${roboto} font-[400] text-[18px]`}>President of Sales</p>
                    </div>
                    <div className='flex justify-around items-end mt-[5rem]  w-[100px]'>
                    <FaLinkedin  className='w-[24px] h-[24px]'/>
                    <FaTwitter  className='w-[24px] h-[24px]'/>
                    <RiGlobalLine  className='w-[24px] h-[24px]'/>
                    </div>
                </div>
                <div className='w-[394px] h-[273px] mt-[3rem]  flex items-center flex-col'>
                    <div className='w-[80px] h-[80px] mt-3 bg-purple-400'>
                        <Image src='/static/team6.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='w-full flex justify-center items-center flex-col mt-2 '>
                        <h2 className={`${roboto} font-[600] text-[20px]`}>John Leboo</h2>
                        <p className={`${roboto} font-[400] text-[18px]`}>Dog Trainer</p>
                    </div>
                    <div className='flex justify-around items-end mt-[5rem]  w-[100px]'>
                    <FaLinkedin  className='w-[24px] h-[24px]'/>
                    <FaTwitter  className='w-[24px] h-[24px]'/>
                    <RiGlobalLine  className='w-[24px] h-[24px]'/>
                    </div>
                </div>

            </div>

                <div className='hidden max-[570px]:block'>
            <div className='w-full flex justify-center items-center '>
            <button className='py-[12px] px-[24px] my-[4rem] border-[1px] border-black rounded-[5px]'>View All</button>
            </div>
            </div>

      </div>
    </>
  )
}

export default Team
