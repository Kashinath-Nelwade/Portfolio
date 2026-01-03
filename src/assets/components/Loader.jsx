import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const loaderRef = useRef()

  useEffect(() => {
    // Reset scroll position to top on page load
    window.scrollTo(0, 0)
    
    let count = 0

    const interval = setInterval(() => {
      count += 1
      setProgress(count)

      if (count === 100) {
        clearInterval(interval)

        // Wait 3 seconds before hiding loader
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: onComplete,
          })
        }, 3000)
      }
    }, 30)
  }, [])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[999] flex items-center justify-center text-white bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/bg.jpg"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Top texts */}
      <div className="absolute top-6 left-6 text-sm tracking-wide opacity-70">
        Strategic Life & Career Coach
      </div>

      <div className="absolute top-6 right-6 text-sm tracking-wide opacity-70">
        For London’s top 1%
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm tracking-widest opacity-70">
        KASHINATH NELWADE
      </div>

      {/* Center loader */}
      <h1 className="relative text-4xl tracking-widest font-light">
        {progress}%
      </h1>

      {/* Bottom */}
      <div className="absolute bottom-6 right-6 text-sm opacity-50">
        Loading...
      </div>
    </div>
  )
}

export default Loader
