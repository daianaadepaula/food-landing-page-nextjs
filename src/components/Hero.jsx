import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

export default function Hero() {
	return(
		<>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-7xl">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font md:text-6xl sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
							Groceries delivered in as little as {''}
							<span className="text-[#f54748] font-medium">2 hours</span>
						</h1>
						<p className="mb-8 leading-relaxed text-sm">
							Grocen atssures fresh grocery morning to your family without getting out in this pandemic.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-[#f86061] border-0 py-2 px-6 focus:outline-none hover:bg-[#da4e4e] rounded text-lg">Order Now</button>

							<button className="ml-4 inline-flex text-black bg-transparent border-0 py-2 px-6 focus:outline-none hover:bg-[#da4e4e] hover:text-white justify-center align-middle items-center rounded text-lg">
							<BsFillPlayFill className="mr-5 text-[#fdc55e]" />
								Order Process</button>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<Image className="object-cover object-center rounded" alt="hero" src="/img/header-image.png" width={500} height={600} />
					</div>
				</div>
			</section>
		</>
	)
};
