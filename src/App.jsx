import React, { useState } from 'react'
import Page1 from './pages/Page1'
import Header from './assets/components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import SmokeCursor from './assets/components/SmokeCursor'
import Page6 from './pages/Page6'
import SmoothScroll from './utils/smoothScroll'
import Loader from './assets/components/Loader'






const App = () => {
   const [loaded, setLoaded] = useState(false)
   
  
  return (
   <>
   
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}




   <SmoothScroll/>
   <SmokeCursor />
   <Header/>
   <Page1/>
   <Page2/>
   <Page3/>
   <Page4/>
   {/* <Page5/> */}
   <Page6/>
   {/* <Contact/> */}
   </>
  )
}

export default App