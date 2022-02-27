
const MidSection = () => {
    return (
        <div className="middle bg-gray-100 sm:h-[60vh] sm:flex sm:flex-col sm:justify-center sm:items-center">
            <div className="flex sm:flex-row flex-col justify-center md:pl-12 items-start w-full py-12 px-4">
                <div className="flex-[0.4]">
                    <div className="text-2xl font-bold text-black"> Excellent UI </div>
                    <div className="text-base mt-4 sm:w-[75%]">
                        Learning about good designs and how it drives a product, I task myself bend the fonts, colors and use of spaces to my will. 
                    </div>
                </div>
                <div className="my-4 sm:my-0"></div>
                <div className="flex-[0.4] mt-8 xs:mt-0">
                    <div className="text-2xl font-bold text-black"> Engineering </div>
                    <div className="text-base mt-4 sm:w-[75%]">
                        Having an Engineering background coupled with a strong knowledge about Js,
                        with the help or it's libraries,
                        I get to build scalable and optimized solutions. 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MidSection;