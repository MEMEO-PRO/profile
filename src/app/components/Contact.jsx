"use client"
import React from 'react'


function Contact() {
  return (
    // <section className='grid grid-cols-1 lg:grid-cols-12 my-4'>
    //   <div className='grid grid-cols-1 lg:grid-cols-12 my-4'>
    //       <h1>Contact Us</h1>
    //       <p>Phone: +91 7977050806</p>
    //       <p>Email: yash.ecs@gmail.com</p>
          
    //   </div>
    //   {/* Embed Google Maps location */}
    //   <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
    //       <iframe
    //         title="Google Maps Location"
    //         width="600"
    //         height="450"
    //         loading="lazy"
    //         allowFullScreen
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-71.12345678901234!3d42.34567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0UuMDA4MDA4MDMxNDAwMTQzNDMsNzEuMDQyMDEwNTM4NzI5OTM0!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
    //       ></iframe>
    //   </div>
    // </section>
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
    <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start" id='contact'>
      <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
        Contact Me
      </h1>
      <h2>Phone : +91 7977050806</h2>
      <h2>Email : yash.ecs@gmail.com</h2>
    </div>
    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
      <iframe
            title="Google Maps Location"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60308.68333275845!2d72.7842069691179!3d19.13866041192397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b618b6d891dd%3A0x91f8a857c731d132!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1700964182755!5m2!1sen!2sin"
          ></iframe>
    </div>
  </section>
  )
}

export default Contact

