import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";

const Portfolio = () => {
	const projectImages = [web1, web2, web3, web4, web5];

	return (
		<>
			<div>
				<h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
				<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					nesciunt quibusdam ipsam nihil iure id eius laboriosam rerum
					recusandae quis voluptatum aut saepe, maxime est voluptas modi, minima
					sapiente! Illum!
				</p>
				<p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
					nesciunt quibusdam ipsam nihil iure id eius.
				</p>
			</div>
			<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
				{projectImages?.map((projectImage) => (
					<>
						<div className='basis-1/3 flex-1 w-full h-full'>
							<Image
								src={projectImage}
								className='rounded-lg object-cover'
								alt='project-image'
							/>
						</div>
					</>
				))}
			</div>
		</>
	);
};

export default Portfolio;
