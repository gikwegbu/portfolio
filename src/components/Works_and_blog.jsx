
const WorkBlogs = () => {
    return (
        <div className="works_and_blog bg-gray-100 sm:h-[60vh] sm:flex sm:flex-col sm:justify-center sm:items-center">
           <div className="flex sm:flex-row flex-col justify-center md:pl-12 items-start w-full py-12 px-4">
                <div className="sm:w-[40%] sm:pr-8 sm:pb-0 sm:border-b-0 pb-8 border-b-2 border-blue-400">
                    <div className="text-2xl font-bold text-black"> Projects </div>
                    <div className="text-base mt-4 sm:w-[100%]">
                        Most of the applications I've built are rather proprietory as I freelanced some couple of projects.
                        Not to worry, I still have some for display. ☺
                    </div>
                    <div className="mt-4">
                        {/* <Link to='/projects'></Link> */}
                        <div className="rounded-lg w-40 transition all ease-in-out border border-blue-400 hover:bg-blue-400 px-8 py-2 text-blue-400 hover:text-white cursor-pointer"> My Projects </div>
                    </div>
                </div>
                <div className="sm:w-[40%] sm:ml-8 mt-8 xs:mt-0 pt-4 sm:pt-0 sm:pl-12 sm:border-l-2 border-blue-400">
                    <div className="text-2xl font-bold text-black"> Blog Articles </div>
                    <div className="text-base mt-4 sm:w-[100%]">
                        Aside from programming, I do occassionally write articles on bug or easier approach to solving a problem
                        as a way to help any developer facing such problem.
                    </div>
                    <div className="mt-4">
                        <a href="https://dev.to/gikwegbu" title='@gikwegbu' target="_blank" rel='noopener noreferal'>
                            <div className="rounded-lg w-32 transition all ease-in-out border border-blue-400 hover:bg-blue-400 px-8 py-2 text-blue-400 hover:text-white cursor-pointer"> Blogs </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WorkBlogs;