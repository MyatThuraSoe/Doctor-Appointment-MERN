import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div 
            className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 md:px-6 lg:px-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${assets.DoctorAppointmentHeroBanner})` }}
        >
            {/* --------- Header Content --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ml-[3rem]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-teal-700 font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Your health, <br /> Our mission!
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Header;