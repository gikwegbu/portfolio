import Dp from '../assets/images/dp.jpg';
import Bg from '../assets/images/profile_bg.jpg';

const Summary = () => {
    return (
        <div className="summary sm:h-screen sm:flex sm:flex-col sm:justify-center sm:items-center">
             <div className="w-full flex sm:flex-row flex-col justify-start items-center px-4 md:px-44">
                 <div className="flex ">
                     <div className="">
                        <div className="text-2xl font-bold">
                            Profile Summary
                        </div>
                        <div className="mt-4 w-[80%]">
                            Having gone through the tertiary institution and acquired <code> B.Eng </code> in <mark> Computer Engineering </mark>, I've since set out to not 
                            just build but to initiate solutions through tech, to basic works of life. Over the past, I have learned, built <mark> IOT </mark> based systems before transitioning
                            into Software dev and as such has enabled me to have wider reach in rendering Solutions.
                            <br />
                            <br />
                            So far in my Software journey, I have built websites, web applications (PWA), then mobile applications 
                            using Flutter. I am currently research and building upon the web3 <mark> blockchain </mark> technology, as it's the future
                            of the web.
                        </div>
                     </div>
                 </div>
                 <div className="mt-12 xs:mt-4">
                     <img src={Dp} className="transition all ease-in-all hover:filter-none drop-shadow-2xl rounded-lg sm:rounded-full"/>
                 </div>
             </div>
        </div>
    );
}
export default Summary;