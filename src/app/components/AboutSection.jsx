"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'> 
                <li>AI & Machine Learning</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Python</li>  
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelor of Technology in Artificial Intelligence & Machine Learning</li>
                <li>Minors in Data Science</li>
                <li>DJSCE (University of Mumbai)</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Microsoft Certified Azure Developer</li>
                <li>IIT Guwahati - Artificial Intelligence with Python</li>
                <li>VJTI Mumbai - Advanced Artificial Intelligence</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    }
  
  
    return (


    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16' id='about'>
        <Image src={"/images/aboutpic.jpeg"} alt={"Description"} width={500} height={500}/ >
        
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-white text-4xl  font-bold mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>Curiosity Drives Me</p>
            <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t)=>t.id === tab).content}</div>
        
        </div>
        
        </div>
    </section>
  )
}

export default AboutSection
