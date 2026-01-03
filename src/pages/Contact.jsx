import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Contact = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const socialRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { y: -100, opacity: 0, scale: 0.8 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Form animation
    gsap.fromTo(formRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Social section animation
    gsap.fromTo(socialRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0, opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Kashinath-Nelwade' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/kashinath-nelwade/' },
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/kashinathnelwade/' },
    { name: 'Telegram', icon: '✈️', url: 'https://t.me/kashinathnelwade' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/919307608255' }
  ]

  return (
    <div className='min-h-screen bg-zinc-900 flex justify-center items-center p-5 sm:p-6 md:p-5 overflow-x-hidden'>
      <div 
        ref={containerRef}
        className='w-full h-full relative rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-[0_0_20px_rgba(0,0,0,0.5)] text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden'
      >
        {/* Animated geometric background pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0' style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
            `,
            backgroundSize: '60px 60px, 40px 40px, 100px 100px',
            animation: 'backgroundMove 20s linear infinite'
          }} />
        </div>
        
        {/* Floating particles for depth */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-white' : i % 3 === 1 ? 'bg-gray-300' : 'bg-gray-500'
              } opacity-20`}
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Diagonal light streaks */}
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-12 animate-pulse' />
          <div className='absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent transform rotate-12 animate-pulse' style={{ animationDelay: '1s' }} />
        </div>
        <div className='relative z-10 h-full flex flex-col p-8 md:p-12 lg:p-16 overflow-y-auto'>
          
          {/* Title Section */}
          <div ref={titleRef} className='text-center mb-8'>
            <h1 className='text-[clamp(3rem,8vw,6rem)] font-[kashh] uppercase tracking-wider text-white mb-4'>
              Contact
            </h1>
            <p className='text-xl opacity-80 max-w-2xl mx-auto text-gray-200'>
              Let's connect and build something amazing together!
            </p>
          </div>

          {/* Main Content */}
          <div className='flex flex-col lg:flex-row gap-8 flex-1'>
            
            {/* Contact Form */}
            <div ref={formRef} className='lg:w-1/2'>
              <div className='bg-white/10 rounded-2xl p-6 border border-white/20 h-full backdrop-blur-sm'>
                <h3 className='text-2xl font-bold text-white mb-6'>Send Message</h3>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 backdrop-blur-sm transition-all duration-300'
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 backdrop-blur-sm transition-all duration-300'
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className='w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 backdrop-blur-sm transition-all duration-300 resize-none'
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className='w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg'
                  >
                    Send Message 🚀
                  </button>
                </form>
              </div>
            </div>

            {/* Social Media Links */}
            <div ref={socialRef} className='lg:w-1/2 flex flex-col justify-center'>
              <div className='bg-white/10 rounded-2xl p-8 border border-white/20 backdrop-blur-sm'>
                <h3 className='text-3xl font-bold text-white mb-8 text-center'>Connect With Me</h3>
                
                {/* Contact Info */}
                <div className='mb-8 space-y-4'>
                  <div className='text-center text-gray-200'>
                    <p className='mb-2'>📧 kashinathnelwade@gmail.com</p>
                    <p className='mb-2'>📱 +91 9307608255</p>
                    <p>📍 Maharashtra, India</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className='grid grid-cols-2 gap-4'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm shadow-sm'
                    >
                      <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>
                        {social.icon}
                      </div>
                      <span className='text-white font-medium group-hover:text-gray-200 transition-colors duration-300 text-sm'>
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>



                  

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact