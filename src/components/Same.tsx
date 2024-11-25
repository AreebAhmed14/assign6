import React from 'react'
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ["400","700"],
  subsets: ["latin"],
});

const Same = () => {
  return (
    <>
     <div className='w-full mt-8 flex flex-col justify-center items-center'>
        <h1 className={`${roboto} text-[48px] max-[450px]:text-[32px] font-[700] max-[520px]:mt-[4rem]`}>Our Achivements</h1>
        <p className={`${roboto} text-[18px] font-[400] leading-[27px] text-center px-5 mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <span className='max-[450px]:hidden'> Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span></p>
        <div className=' flex justify-center items-center my-11 max-[900px]:flex-col'>
          <div className='w-[616px] flex justify-around max-[1230px]:w-[550px] max-[1100px]:w-[450px] max-[900px]:my-5 max-[450px]:w-[319px]'>
            <div className='w-[296px] flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>+200</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Courses</p>
            </div>
            <div className='w-[296px] flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>50K</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Mentors</p>
            </div>
          </div>


          <div className='w-[616px]  flex justify-around max-[1230px]:w-[550px] max-[1100px]:w-[450px] max-[900px]:my-5 max-[450px]:w-[319px]'>
            <div className='w-[296px]  flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>370K</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Students</p>
            </div>
            <div className='w-[296px]  flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>100+</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Recognition</p>
            </div>
          </div>
        </div>
        </div> 



        <div className='w-full mt-8 flex flex-col justify-center items-center max-[900px]:hidden'>
        <h1 className={`${roboto} text-[48px] max-[450px]:text-[32px] font-[700]`}>Our Achivements</h1>
        <p className={`${roboto} text-[18px] font-[400] leading-[27px] text-center px-5 mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. <span className='max-[450px]:hidden'> Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span></p>
        <div className=' flex justify-center items-center my-11 max-[900px]:flex-col'>
          <div className='w-[616px] flex justify-around max-[1230px]:w-[550px] max-[1100px]:w-[450px] max-[900px]:my-5 max-[450px]:w-[319px]'>
            <div className='w-[296px] flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>+200</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Courses</p>
            </div>
            <div className='w-[296px] flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>50K</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Mentors</p>
            </div>
          </div>


          <div className='w-[616px]  flex justify-around max-[1230px]:w-[550px] max-[1100px]:w-[450px] max-[900px]:my-5 max-[450px]:w-[319px]'>
            <div className='w-[296px]  flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>370K</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Students</p>
            </div>
            <div className='w-[296px]  flex justify-center items-center flex-col'>
               <h1 className={`${roboto} font-[700] text-[40px] max-[450px]:text-[30px]`}>100+</h1>
               <p className={`${roboto} font-[400] text-[16px]`}>Recognition</p>
            </div>
          </div>
        </div>
        </div> 
         
    </>
  )
}

export default Same
