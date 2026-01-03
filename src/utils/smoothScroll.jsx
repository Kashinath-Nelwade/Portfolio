import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SmoothScroll = () => {
  useEffect(() => {
    // 1️⃣ Lenis init
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.06, // smoothness (0.05 = very smooth, 0.1 = fast)
      wheelMultiplier: 0.4,
      touchMultiplier: 1.5,
    })

    // 2️⃣ RAF loop
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 3️⃣ GSAP sync
    lenis.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    ScrollTrigger.addEventListener('refresh', () => lenis.resize())
    ScrollTrigger.refresh()

    // 4️⃣ Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return null // ye component UI nahi dikhata
}

export default SmoothScroll
