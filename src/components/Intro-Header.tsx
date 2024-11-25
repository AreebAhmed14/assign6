import React from 'react'
// import {Roboto} from 'next/font/google'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

// const roboto = Roboto({
//   weight: ["400" ,"700"],
//   subsets: ['latin'],
// })

const IntroHeader = () => {
  return (
    <>
      <div className='w-full mb-3 h-[54px] max-[635px]:hidden bg-[#F7F7F7] flex justify-between'>
        <div className='flex h-full items-center '>
            {/* <p className={`px-5 border-r-2 border-gray-600 text-[14px] ${roboto}`}>Phone Number: 956 742 455 678</p>
            <p className={`mx-5 text-[14px] ${roboto}`}>Email:info@ddsgnr.com</p> */}
            <Image src='/static/content.png' alt='Logo' width={1500} height={1500}  className='w-[386px] h-[30px] ml-[3rem]'/>

        </div>
        <div className='flex h-full items-center mr-[3rem]'>
        <FaFacebookF className='mx-2 text-[16px]'/>
        <FaInstagram className='mx-2 text-[16px]'/>
        <FaTwitter className='mx-2 text-[16px]'/>
        <FaLinkedin className='mx-2 text-[16px]'/>
        </div>
      </div>
    </>
  )
}

export default IntroHeader
