import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import logo from './logo.svg'
import './index.css'

// Importing Components
import { HeroSection, MidSectiion, Summary, WorkBlogs, ContactMe, Footer  } from './components';
const Navigation = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  const navList = [
    { title: 'Home', url: '/', target: false },
    { title: 'About', url: '#summary', target: false },
    { title: 'Projects', url: '#', target: true },
    { title: 'Blogs', url: '#', target: true },
    { title: 'Contact Me', url: '#contact', target: false },
  ];
  return (
      <div className="nav text-white">
          <div className="w-full flex flex-row md:justify-center justify-between px-4 md:px-2 py-2 items-center">
              <a href="/">
                <div className="flex md:flex-[0.5] text-4xl font-bold">
                    George 
                    <span className='pl-2 hidden sm:flex'> Ikwegbu </span>
                </div>
              </a>
              <div className="hidden sm:flex flex-row justify-end items-center w-9/12 ">
                  <ul className='flex flex-row justify-between w-[50%] text-base'>
                      {navList.map(({title, url, target}, index) => (
                        <NavbarItem key={title + index} title={title} url={url} />
                      ))}
                  </ul>
              </div>
              <div className="flex sm:hidden cursor-pointer p-2">
                {toggleMenu ?
                  <AiOutlineClose fontSize={24}  className="text-white" onClick={() => setToggleMenu(false)}/>
                  :
                  <BiMenuAltRight fontSize={24} className="text-white" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[50vh] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                    >
                        <li className="text-xl text-white w-full my-2">
                          <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {navList.map(({title, url, target}, index) => (
                         <span onClick={() => (toggleMenu ? setToggleMenu(false) : '')}>
                           <NavbarItem key={title + index} title={title} url={url} classProps="my-2 text-lg hover:pr-4 transition all ease-in-out"  />
                          </span>
                      ))}
                    </ul>
                )}
            </div>
          </div>
      </div>
  );
}

const NavbarItem = ({title, url, classProps, target}) => {
  return (
      <li className={`cursor-pointer ${classProps}`} >
          <a href={url} target={target? '_blank' : '_self'}> {title} </a>
      </li>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <div id="home">
            <Navigation />
          </div>
          <div>
            <HeroSection />
          </div>
        </div>
        <MidSectiion />
        <div id="summary">
          <Summary />
        </div>
        <WorkBlogs />
        <div id="contact">
          <ContactMe />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
