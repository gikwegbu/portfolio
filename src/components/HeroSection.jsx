
import Dp from '../assets/images/dp.jpg';

const HeroSection = () => {
    return (
        <div className="hero h-[80vh] flex flex-col justify-center items-center">
            <div className="flex sm:flex-row flex-col w-full justify-center items-center py-8">
                <div className="flex flex-[0.7] lg:flex-[0.5] flex-col p-4 ">
                    <div className=" text-blue-400">
                        <div className='text-white text-xl'>
                            Frontend
                        </div>
                        <div className="flex flex-row justify-start items-center font-bold text-3xl">
                            Blockchain | Web | Mobile <i className='pl-2 text-white'> Developer</i>
                        </div>
                    </div>
                    <div className="text-base py-6  sm:w-[80%] md:w-[60%] text-white">
                        I just don't build pixel perfect UIs, I make them scalable with Great Ux
                    </div>
                    <div className="hidden sm:flex flex-row justify-between items-center text-base text-gray-200 md:w-[80%]">
                        <div className="w-[48%]">
                            Healthy working codebase produces healthy UI implementation.
                        </div>
                        <div className="w-[48%]">
                            Having over 4+ years of experience building products for clients.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-[0.25] lg:flex-[0.155]  mt-8 xs:mt-0">
                    <img src={Dp} className='object-cover h-64 rounded-full shadow-2xl'  />
                </div>
            </div>
        </div>
    );
}
export default HeroSection;