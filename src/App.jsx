import { useState } from 'react'
import logo from './logo.svg'
import './index.css'

// Importing Components
import { Navigation, HeroSection, MidSectiion, Summary, WorkBlogs, ContactMe, Footer  } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <MidSectiion />
        <Summary />
        <WorkBlogs />
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
}

export default App
