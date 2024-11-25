import React from 'react'
import { Roboto } from "next/font/google";
import Image from 'next/image';

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const CBL = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='my-[5rem] w-[768px] max-[770px]:w-[600px] max-[600px]:w-[385px] max-[380px]:w-[300px] max-[600px]:my-[3rem]'>
      <h1 className={` font-[700] ${roboto} text-[48px] max-[600px]:text-[32px] max-[600px]:leading-[41px] leading-[58.6px]`}><center>Explore Courses By Category</center></h1>
      <center><p className={`text-[18px]  font-[400] ${roboto} leading-[27px] max-[600px]:mt-5`}>{"Discover a wide range of courses covering a variety of subjects, taught by expert instructors."}</p></center>
        </div>

        <div className='w-full'>
            <div className='w-full flex justify-between items-center max-[914px]:flex-col'>
                <div className='w-[410px]  h-[132px] bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/pen.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[190px] max-[1024px]:text-[17px] max-[1024px]:font-[700]`}>Design & Development</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>

                <div className='w-[410px]  h-[132px] bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[90px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px] '>
                        <Image src='/static/volume2.png' alt='Logo' width={1500} height={1500}  className='w-full h-full'/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] max-[1145px]:w-[0px] font-[600] text-[20px]`}>Marketing</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>

                <div className='w-[410px]  h-[132px] bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/arrow.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] max-[1145px]:w-[0px] font-[600] text-[20px]`}>Development</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-[132px]  flex mt-[4rem] justify-between max-[914px]:hidden'>
                <div className='w-[410px] h-full bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/mic.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[0px]`}>Communication</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>

                <div className='w-[410px] h-full bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/loop.png' alt='Logo' width={1500} height={1500}  className='w-full h-full'/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[190px] max-[1024px]:text-[17px] max-[1024px]:font-[700]`}>Digital Marketing</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>

                <div className='w-[410px] h-full bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/reversable.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[190px] max-[1024px]:text-[17px] max-[1024px]:font-[700]`}>Self Development</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-[132px] flex mt-[4rem] justify-between max-[914px]:hidden'>
                <div className='w-[410px] h-full bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/bag.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[0px]`}>Business</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>

                <div className='w-[410px] h-full bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/book.png' alt='Logo' width={1500} height={1500}  className='w-full h-full'/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[0px]`}>Finance</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>

                <div className='w-[410px] h-full bg-[#F7F7F7] flex justify-around items-center rounded-[5px] max-[1232px]:w-[380px] max-[1232px]:h-[115px] max-[1145px]:w-[340px] max-[1145px]:h-[105px] max-[1024px]:w-[300px] max-[1024px]:my-3'>
                    <div className='w-[100px] h-[100px] flex items-center max-[1145px]:w-[90px] max-[1024px]:w-[80px] max-[1024px]:h-[80px]'>
                        <Image src='/static/const.png' alt='Logo' width={1500} height={1500}  className=''/>
                    </div>
                    <div className='flex flex-col'>
                    <h1 className={`w-[246.7px] font-[600] text-[20px] max-[1145px]:w-[0px]`}>Consulting</h1>
                    <p className={`${roboto} text-[18px] font-[400]`}>50+ Courses Available</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
            <button className='py-[12px] px-[24px] mt-[4rem] max-[914px]:mt-[2rem] border-[1px] border-black rounded-[5px]'>View All Courses</button>
            </div>
        </div>
    </div>
  )
}

export default CBL
