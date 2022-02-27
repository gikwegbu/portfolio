import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';



const Navigation = () => {
    return (
        <div className="nav text-white">
            <div className="w-full flex flex-row md:justify-center justify-between px-4 md:px-2 py-2 items-center">
                <div className="flex md:flex-[0.5] text-4xl font-bold">
                    George 
                    <span className='pl-2 hidden sm:flex'> Ikwegbu </span>
                </div>
                <div className="hidden sm:flex flex-row justify-end items-center w-9/12 ">
                    <ul className='flex flex-row justify-between w-[50%] text-base'>
                        <li>
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="#"> About </a>
                        </li>
                        <li>
                            <a href="#"> Projects </a>
                        </li>
                        <li>
                            <a href="#"> Contact Me </a>
                        </li>
                        <li>
                            <a href="#">  </a>
                        </li>
                    </ul>
                </div>
                <div className="flex sm:hidden cursor-pointer p-2">
                    <BiMenuAltRight fontSize={24} />
                    {/* <GrClose fontSize={24} /> */}
                </div>
            </div>
        </div>
    );
}

export default Navigation;