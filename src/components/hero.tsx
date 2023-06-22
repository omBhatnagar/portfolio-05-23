import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import omi from "../../public/om.png";

const Hero = () => {
	return (
		<>
			<div className='text-center p-10'>
				<h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
					Om Bhatnagar
				</h2>
				<h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300'>
					Web developer.
				</h3>
				<p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500'>
					Passionate web developer, looking to learn new technologies and work
					as part of a productive team. Experienced in full stack development
					using ReactJs, NodeJs and ExpressJs.
				</p>
			</div>
			<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
				<AiFillGithub />
				<AiFillLinkedin />
				<AiFillYoutube />
			</div>
			<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
				<Image src={omi} alt='my-picture' />
			</div>
		</>
	);
};

export default Hero;
