import React from 'react'
import { Roboto } from "next/font/google";
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center mt-[6rem] items-center'>
            <div className='w-[1120px] flex justify-between max-[1140px]:w-[1100px] max-[1100px]:w-[1000px] max-[1000px]:w-[900px] max-[910px]:w-[800px] max-[800px]:flex-col items-center max-[800px]:w-full'>
                <div className='flex flex-col'>
                    <h1 className={`${roboto} font-[600] text-[18px] max-[800px]:text-center max-[800px]:mb-5`}>Subscribe to our newsletter</h1>
                    <p className={`${roboto} font-[400] text-[16px] max-[800px]:text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
            <div className='flex justify-between w-[400px] max-[800px]:w-full items-center max-[800px]:flex-col'>
                <input type="text" className='py-[10px] px-[20px] w-[265px] rounded-[5px] border-[1px] border-black max-[800px]:mt-5' placeholder='Your email address'/>
                <button className={`py-[10px] px-[15px] rounded-[5px] border-[1px] border-black text-[16px] font-[700] max-[800px]:px-[5.8rem] max-[800px]:mb-8 max-[800px]:mt-2`}>Subscribe</button>
            </div>
            </div>



            <div className='w-[1120px] mt-[4rem] flex justify-between max-[1126px]:w-full max-[800px]:flex-col max-[800px]:items-center'>
                <div className='w-[250px] max-[1126px]:w-[200px] max-[815px]:w-[170px] max-[800px]:items-center max-[800px]:my-5'>
                    <div className='w-[130px]'>
                    <Image src={"/static/logo.png"} alt='logo' width={1500} height={1500} />
                    </div>
                </div>

                <div className='w-[250px] flex flex-col max-[1126px]:w-[200px] max-[815px]:w-[170px] max-[800px]:items-center max-[800px]:my-1'>
                    <p className={`${roboto} font-[600] mb-5 text-[16px]`}>Courses</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Business</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Development</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Technology</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Design</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Programming</p>
                </div>
                <div className='w-[250px] flex flex-col max-[1126px]:w-[200px] max-[815px]:w-[170px] max-[800px]:items-center max-[800px]:my-1'>
                    <p className={`${roboto} font-[600] mb-5 text-[16px]`}>Resources</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Career</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Resume</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Learning</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Interview Preparation</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Jobs</p>
                </div>
                <div className='w-[250px] flex flex-col max-[1126px]:w-[200px] max-[815px]:w-[170px] max-[800px]:items-center max-[800px]:my-1'>
                    <p className={`${roboto} font-[600] mb-5 text-[16px]`}>About Us</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Contact</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Help/Support</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>FAQ</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Terms and Conditions</p>
                    <p className={`${roboto} font-[400] mb-3 text-[16px]`}>Partners</p>
                </div>
            </div>

            <div className='w-[1120px] flex justify-between border-t-[1px] mt-[4rem] border-black mb-[10rem] max-[800px]:mb-[2rem] max-[1125px]:w-full max-[800px]:flex-col max-[800px]:items-center'>
                <div className='flex justify-between pt-5 max-[800px]:flex-col max-[800px]:items-center'>
                    <p className={`${roboto} font-[400] text-[14px]`}>2023 Ddsgnr. All right reserved.</p>
                    <div className='flex ml-5 max-[800px]:my-5'>
                    <p className={`${roboto} font-[400] text-[14px] mx-4 max-[415px]:mx-2 max-[370px]:text-[11px] border-b-[1px] border-black`}>Privacy Policy</p>
                    <p className={`${roboto} font-[400] text-[14px] mx-4 max-[415px]:mx-2 max-[370px]:text-[11px] border-b-[1px] border-black`}>Terms of Service</p>
                    <p className={`${roboto} font-[400] text-[14px] mx-4 max-[415px]:mx-2 max-[370px]:text-[11px] border-b-[1px] border-black`}>Cookies Settings</p>
                    </div>
                </div>

                <div className='w-[132px] flex justify-between pt-5'>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />

                </div>
            </div>
      </div>
    </>
  )
}

export default Footer
