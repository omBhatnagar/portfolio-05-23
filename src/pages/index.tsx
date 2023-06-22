import Head from "next/head";
import { useState } from "react";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Om Bhatnagar Portfolio</title>
			</Head>
			<main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
				<section className='min-h-screen'>
					<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
					<Hero />
				</section>
				<section>
					<Portfolio />
				</section>
			</main>
		</div>
	);
}
