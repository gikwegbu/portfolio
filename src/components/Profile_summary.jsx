import Dp from '../assets/images/dp.jpg';
import Bg from '../assets/images/profile_bg.jpg';
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import Js from '../assets/images/js.png'
import Ts from '../assets/images/ts.png'
import Scss from '../assets/images/sass.png'
import Tailwindcss from '../assets/images/tailwindcss.png'
import AntD from '../assets/images/antd.png'
import Vue from '../assets/images/vue.png'
import Vuex from '../assets/images/vuex.png'
import Nuxt from '../assets/images/nuxt.png'
import Quasar from '../assets/images/quasar.png'
import Vuetify from '../assets/images/vuetify.png'
import React from '../assets/images/react.png'
import Redux from '../assets/images/redux.png'
import Solidity from '../assets/images/solidity.png'
import Ethers from '../assets/images/ethers.png'
import Flutter from '../assets/images/flutter.png'
import Firebase from '../assets/images/firebase.png'

const langs = [
    { title: 'Html 5', imgSrc: Html },
    { title: 'Css 3', imgSrc: Css },
    { title: 'JavaScript', imgSrc: Js },
    { title: 'TypeScript', imgSrc: Ts },
    { title: 'Scss/Sass', imgSrc: Scss },
    { title: 'TailwindCss', imgSrc: Tailwindcss },
    { title: 'AntD', imgSrc: AntD },
    { title: 'Vuejs', imgSrc: Vue },
    { title: 'Vuex', imgSrc: Vuex },
    { title: 'Nuxt', imgSrc: Nuxt },
    { title: 'Quasar', imgSrc: Quasar },
    { title: 'Vuetify', imgSrc: Vuetify },
    { title: 'React', imgSrc: React },
    { title: 'Redux', imgSrc: Redux },
    { title: 'Solidity', imgSrc: Solidity },
    { title: 'Ethers', imgSrc: Ethers },
    { title: 'Flutter', imgSrc: Flutter },
    { title: 'Firebase', imgSrc: Firebase },
]

const LangImage = ({title, imgSrc}) => {
    return <img src={imgSrc} className="w-24" title={title} />;
}

const Summary = () => {
    return (
        <div className="summary md:h-screen md:flex md:flex-col md:justify-center md:items-center">
             <div className="w-full flex sm:flex-row flex-col justify-start items-center px-4 md:px-44">
                 <div className="flex ">
                     <div className="">
                        <div className="text-2xl font-bold">
                            Profile Summary
                        </div>
                        <div className="mt-4 w-full sm:w-[80%]">
                            Having gone through the tertiary institution and acquired <code> B.Eng </code> in <mark> Computer Engineering </mark>, I've since set out to not 
                            just build but to initiate solutions through tech, to basic works of life. Over the past, I have learned, built <mark> IOT </mark> based systems before transitioning
                            into Software dev and as such has enabled me to have wider reach in rendering Solutions.
                            <br />
                            <br />
                            So far in my Software journey, I have built websites, web applications (PWA), then mobile applications 
                            using Flutter. I am currently research and building upon the web3 <mark> blockchain </mark> technology, as it's the future
                            of the web.
                        </div>
                        <div className="mt-12"></div>
                        <div className="mt-12 xs:mt-4 sm:hidden">
                            <img src={Dp} className="transition all ease-in-all hover:filter-none drop-shadow-2xl rounded-lg sm:rounded-full"/>
                        </div>
                        <div className="mt-12"></div>
                        <div className="text-2xl font-bold">
                            Skills
                        </div>
                        <div className="mt-4 w-full sm:w-[80%]">
                            <div>Below are some of the skills set in my possesion, and I'm open to learning new ones as the Job might require.</div>
                            <div className="mt-8 flex flex-wrap justify-evenly items-center">
                                {langs.map(({title, imgSrc}) => (
                                    <LangImage imgSrc={imgSrc} title={title}/>
                                ))}
                            </div>
                        </div>
                     </div>
                 </div>
                 <div className="mt-12 xs:mt-4 hidden sm:block">
                     <img src={Dp} className="transition all ease-in-all hover:filter-none drop-shadow-2xl rounded-lg sm:rounded-full"/>
                 </div>
             </div>
        </div>
    );
}
export default Summary;