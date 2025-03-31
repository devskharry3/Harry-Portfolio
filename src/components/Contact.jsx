import React, { useEffect, useRef } from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiMailAddFill, RiTwitterFill } from 'react-icons/ri'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const contactRef = useRef(null) 

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-text", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            })
            gsap.from(".contact-icon", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })
        }, contactRef)

        return () => ctx.revert()
    }, [])
  return (
    <section className='py-16' id='contact' ref={contactRef} >
        <div className='px-4 text-center'>
            <h2 className='mb-8 text-3xl font-medium lg:text-4xl'>Contact</h2>
            <p className='contact-text mb-4 text-lg lg:text-xl'>
                Feel free to reach out to me via email: {" "}
                <a href="oshosunkanmi@gmail.com" className='border-b'>sunkanmiharry.osho@itdcanada.ca</a>
            </p>

            <div className='mt-8 flex items-center justify-center gap-8'>
                <a href="https://linkedin.com/in/harrysk"
                target='_blank'
                rel='noopener noreferrer' 
                className='contact-icon inline-flex items-center justify-center transition-transform hover:scale-110' 
                aria-label='Visit my Linkedin profile'> 
                    <RiLinkedinBoxFill className='text-5xl text-gray-700 hover:text-blue-600' /> 
                </a>

                <a href="https://github.com/devskharry3"
                target='_blank'
                rel='noopener noreferrer' 
                className='contact-icon inline-flex items-center justify-center transition-transform hover:scale-110'
                aria-label='Visit my github profile'> 
                    <RiGithubFill className='text-5xl text-gray-700 hover:text-gray-800'/> 
                </a>

                <a href="https://twitter.com/in/harrysk"
                target='_blank'
                rel='noopener noreferrer' 
                className='contact-icon inline-flex items-center justify-center transition-transform hover:scale-110'
                aria-label='Visit my Twitter profile'> 
                    <RiTwitterFill className='text-5xl text-gray-700 hover:text-blue-400' /> 
                </a>

                <a href="mailto:sunkanmiharry.osho@itdcanada.ca"
                target='_blank'
                rel='noopener noreferrer' 
                className='contact-icon inline-flex items-center justify-center transition-transform hover:scale-110'
                aria-label='Send me an email'> 
                    <RiMailAddFill className='text-5xl text-gray-700 hover:text-blue-400' /> 
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact