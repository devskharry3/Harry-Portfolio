import React, { useEffect, useRef } from 'react'
import { PROFILE } from '../constants'
import { RiArrowRightUpLine } from 'react-icons/ri'
import harry from '../assets/Harry.png'
import { gsap } from 'gsap'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(()=> {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                    duration: 0.8,
                    opacity: 0,
                },
            });

            tl.from(".hero-title", {
                y: -50,
                scale: 0.95,
            })
            .from(".hero-subheading", {
                y: 30,
                scale: 0.95,
            }, "-=0.5")
            .from(".hero-text", {
                y: 30,
            }, "-=0.5")
            .from(".hero-btn", {
                y: 20,
                scale: 0.95,
            }, "-=0.6")
            .from(".hero-img", {
                y: 50,
                scale: 0.95,
            }, "-=0.6");
        }, heroRef);

        return ()=> ctx.revert()
    }, [])
    
  return (
    <section className='flex min-h-screen flex-col items-center justify-center 
    gap-4 lg:gap-6' ref={heroRef}> 
    <div className='mt-8 lg:mt-20' >
        <h1 className='hero-title text-4xl uppercase lg:text-7xl'>{PROFILE.name}</h1>
        <h2 className='hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 
        bg-clip-text text-center text-2xl tracking-tighter text-transparent'>{PROFILE.role}</h2>

    </div>

    <p className='hero-text max-w-2xl p-2 text-center text-xl -tracking-tighter lg:text-2xl'>
        {PROFILE.subheading} </p> 
        <a href="/" target='_blank' rel='noopener noreferrer' download 
        className='hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 
        px-3 tracking-tighter'>
            <span>
                download Resume
            </span>
            <RiArrowRightUpLine/>
        </a>
        <img src={harry} alt={PROFILE.name} width={400} height="400" 
        className='hero-img rounded-3xl border border-purple-300/20 p-1'
        />

    </section>
  )
}

export default Hero