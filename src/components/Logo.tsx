import React from 'react'
import Image from 'next/image';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div className='w-full h-[228px] max-[520px]:h-full max-[520px]:mt-10 max-[520px]:mb-10 max-[520px]:bg-[#ffff] bg-[#F7F7F7] flex justify-between max-[860px]:flex-col max-[860px]:justify-around items-center'>
        <h1 className={`font-[700] text-[24px] ${roboto} max-[860px]:hidden w-[330px] ml-1 leading-[33.6px]`}>Trusted by 2000+ companies worldwide.</h1>
        <h1 className={`font-[700] text-[18px] px-2 hidden max-[860px]:block ${roboto} ml-1 leading-[33.6px]`}>{`Trusted by world's best companies`} <br />[social proof to build credibility]</h1>
        <div className='w-[880px] max-[990px]:w-[700px] max-[666px]:w-full max-[910px]:w-[650px] flex justify-around items-center max-[520px]:flex-col max-[520px]:h-auto max-[520px]:mt-5'>
            <div className='w-[123.8px] max-[520px]:w-[150px] max-[520px]:h-[50px] h-[38.52px] flex justify-center items-center'>
                <Image src='/static/logo1.png' alt='logo' width={123.8} height={38.52}  className='w-full'/>
            </div>
            <div className='w-[123.8px] max-[520px]:w-[150px] max-[520px]:h-[50px] h-[38.52px] flex justify-center items-center'>
                <Image src='/static/logo2.png' alt='logo' width={123.8} height={38.52}  className='w-full'/>
            </div>
            <div className='w-[123.8px] max-[520px]:w-[150px] max-[520px]:h-[50px] h-[38.52px] flex justify-center items-center'>
                <Image src='/static/logo3.png' alt='logo' width={123.8} height={38.52}  className='w-full'/>
            </div>
            <div className='w-[123.8px] max-[520px]:w-[150px] max-[520px]:h-[50px] h-[38.52px] flex justify-center items-center'>
                <Image src='/static/logo4.png' alt='logo' width={123.8} height={38.52}  className='w-full'/>
            </div>
            <div className='w-[123.8px] max-[520px]:w-[150px] max-[520px]:h-[50px] h-[38.52px] flex justify-center items-center'>
                <Image src='/static/logo05.png' alt='logo' width={123.8} height={38.52}  className='w-full'/>
            </div>
            <div className='w-[123.8px] max-[520px]:w-[150px] max-[520px]:h-[50px] h-[38.52px] flex justify-center items-center'>
                <Image src='/static/logo6.png' alt='logo' width={123.8} height={38.52}  className='w-full'/>
            </div>
        </div>
        </div>
  )
}

export default Logo
