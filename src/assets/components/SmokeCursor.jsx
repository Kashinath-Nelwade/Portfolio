import React, { useEffect, useRef } from 'react'

const SmokeCursor = () => {
  const mousePos = useRef({ x: 0, y: 0 })
  const prevPos = useRef({ x: 0, y: 0 })
  const smokeTrail = useRef([])

  useEffect(() => {
    let animationId
    
    const handleMouseMove = (e) => {
      prevPos.current = { ...mousePos.current }
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Create more smoke particles for denser effect
      if (Math.random() > 0.4) { // Increased frequency for more smoke
        createSmokeParticle()
      }
      if (Math.random() > 0.6) { // Additional particles
        createSmokeParticle()
      }
    }

    const createSmokeParticle = () => {
      const particle = document.createElement('div')
      
      // Create realistic smoke behind cursor
      const trailX = mousePos.current.x - (mousePos.current.x - prevPos.current.x) * 0.5
      const trailY = mousePos.current.y - (mousePos.current.y - prevPos.current.y) * 0.5
      
      const offsetX = (Math.random() - 0.5) * 15
      const offsetY = (Math.random() - 0.5) * 15
      const size = Math.random() * 8 + 3
      
      particle.style.cssText = `
        position: fixed;
        left: ${trailX + offsetX - size/2}px;
        top: ${trailY + offsetY - size/2}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, 0.7) 0%, 
          rgba(230, 230, 230, 0.5) 30%, 
          rgba(200, 200, 200, 0.3) 60%, 
          rgba(150, 150, 150, 0.1) 80%, 
          transparent 100%);
        border-radius: ${Math.random() * 50 + 50}%;
        pointer-events: none;
        z-index: 9998;
        filter: blur(${Math.random() * 2 + 1}px);
        box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.3);
        animation: airySmoke ${4 + Math.random() * 3}s ease-out forwards;
      `
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 5000)
    }

    // Add CSS styles
    const style = document.createElement('style')
    style.textContent = `
      @keyframes airySmoke {
        0% {
          opacity: 0.8;
          transform: translate(0, 0) scale(0.3);
        }
        20% {
          opacity: 0.6;
          transform: translate(${Math.random() * 25 - 12}px, ${Math.random() * -15 - 5}px) scale(0.7);
        }
        40% {
          opacity: 0.4;
          transform: translate(${Math.random() * 45 - 22}px, ${Math.random() * -35 - 10}px) scale(1.2);
        }
        60% {
          opacity: 0.25;
          transform: translate(${Math.random() * 65 - 32}px, ${Math.random() * -55 - 15}px) scale(1.8);
        }
        80% {
          opacity: 0.12;
          transform: translate(${Math.random() * 85 - 42}px, ${Math.random() * -75 - 20}px) scale(2.4);
        }
        100% {
          opacity: 0;
          transform: translate(${Math.random() * 105 - 52}px, ${Math.random() * -95 - 25}px) scale(3.0);
        }
      }
      
      body {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M2 2l20 8-8 2-2 8z" fill="white" stroke="rgba(255,255,255,0.8)" stroke-width="1" filter="url(%23glow)"/></svg>') 2 2, auto;
      }
      
      .arrow-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        pointer-events: none;
        z-index: 10000;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
        box-shadow: 0 0 15px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.1);
        transition: transform 0.1s ease;
      }
    `
    document.head.appendChild(style)

    // Create cursor glow effect
    const cursor = document.createElement('div')
    cursor.className = 'arrow-cursor'
    document.body.appendChild(cursor)

    const updateCursor = (e) => {
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', updateCursor)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', updateCursor)
      if (style.parentNode) style.parentNode.removeChild(style)
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return null
}

export default SmokeCursor