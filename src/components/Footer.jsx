import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa"

export default function Footer() {
	return(
		<>
			<footer class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto max-w-7xl flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

					<div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<Image src='/img/logo1.png' alt="" width={100} height={50} />
						<p class="text-gray-500 text-sm mt-5 md:text-left text-center">
							Fast delivery, which is active all over the world, serves with many transportation vehicles.
						</p>
					</div>

					<div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Company</h2>
							<nav class="list-none mb-10">
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">About Us</Link>
								</li>
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">Blog</Link>
								</li>
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">All Products</Link>
								</li>
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">Locations Map</Link>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
							<nav class="list-none mb-10">
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">Order trancking</Link>
								</li>
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">Wish List</Link>
								</li>
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">My account</Link>
								</li>
								<li>
									<Link href='/' class="text-gray-600 hover:text-gray-800">Terms & Conditions</Link>
								</li>
							</nav>
						</div>
						<div class="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Get in Touch</h2>
							<p>
								Subscribe to our weekly Newsletter and receive updates via email.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-gray-100">
					<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Grover —
							<Link href="https://www.instagram.com/daianaadepaula_/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@daianaadepaula_</Link>
						</p>
						<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<Link href="https://www.linkedin.com/in/daianadepaula/" class="text-gray-500">
								<FaLinkedinIn />
							</Link>
							<Link href="https://github.com/daianaadepaula" class="ml-3 text-gray-500">
								<FaGithub />
							</Link>
							<Link href="/" class="ml-3 text-gray-500">
								<FaTwitter />
							</Link>
							<Link href="/" class="ml-3 text-gray-500">
								<FaFacebookF />
							</Link>
						</span>
					</div>
				</div>
			</footer>
		</>
	)
};
