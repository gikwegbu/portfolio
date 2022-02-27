
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';


const Footer = () => {
    return (
        <div className="footer gradient-bg-welcome text-white w-full mt-12 px-12 py-8">
            {/* <div className="flex justify-center items-center w-58 bg-blue-400 h-[1px] mb-4"></div> */}
            <div className="flex sm:flex-row flex-col justify-between items center">
                <div className="text-center sm:text-left">
                    © George Ikwegbu Chinedu {new Date().getFullYear()}
                </div>
                <div className="my-4 sm:my-0"></div>
                <div className="flex flex-[0.3] flex-row justify-evenly items-center">
                    <div>
                        <a href="tel:+2348101570258" target="_blank" title='+2348101570258' rel='noopener noreferal'>
                             <BsWhatsapp fontSize={24} color="#075e54" />
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/GIkwegbu" title='@gikwegbu' target="_blank" rel='noopener noreferal'>
                             <BsTwitter fontSize={24} color="#00acee" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/gikwegbu" title='@gikwegbu' target="_blank" rel='noopener noreferal'>
                             <FiLinkedin fontSize={24} color="#0e76a8" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/gikwegbu" title='@gikwegbu' target="_blank" rel='noopener noreferal'>
                             <BsGithub fontSize={24} color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;