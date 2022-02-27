
const Input = ({type, name, placeholder, value}) => {
    return (
        <input
            type={type}
            name={name}
            required
            className="w-[100%] sm:w-96 pt-4 text-xl transition all ease-in-out focus:outline-none focus:border-b-blue-400 focus:text-blue-400 border border-t-0 border-l-0 border-r-0 border-b-black"
            placeholder={placeholder}
        />
    );
}

const Contact = () => {
    return (
        <div className="contact sm:h-[60vh] sm:flex sm:flex-col sm:justify-center sm:items-center">
           <div className="flex flex-col justify-center md:pl-36 items-center w-full py-12 px-4">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="text-2xl font-bold text-black"> Contact Me </div>
                    <div className="text-base mt-4 w-[60%] sm:w-[75%]">
                        Do I seem like the right developer for your next project, or you wish to say hello? Go ahead.
                    </div>
                </div>
                <div className="my-4"></div>
                <div className="w-full sm:flex sm:justify-center items-center">
                    <form>
                        <div className="flex sm:flex-row flex-col">
                            <div className="form-group">
                                <div>
                                    <label htmlFor="name"> Your Name </label>
                                </div>
                                <div>
                                    <Input type={'text'} name={'name'} placeholder={'Enter your name'}/>
                                </div>
                            </div>
                            <div className="mt-8 sm:mt-0 mx-8"></div>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="name"> Email Address </label>
                                </div>
                                <div>
                                    <Input type={'email'} name={'email'} placeholder={'Enter your email'}/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-12"></div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="name"> Message </label>
                            </div>
                            <div>
                                <textarea placeholder="type..." rows='1' className="w-[100%] pt-4 text-xl transition all ease-in-out focus:outline-none focus:border-b-blue-400 focus:text-blue-400 border border-t-0 border-l-0 border-r-0 border-b-black"></textarea>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-center items-center">
                            <div className="rounded-lg w-[40%] text-center transition all ease-in-out border border-blue-400 hover:bg-blue-400 px-8 py-2 text-blue-400 hover:text-white cursor-pointer">
                                Send Message
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;