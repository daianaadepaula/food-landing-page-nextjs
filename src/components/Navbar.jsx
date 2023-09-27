import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return(
		<>
			<header className="text-gray-600 body-font">
				<div className="container max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					
					<Link href="/" className="flex title-font font-medium justify-center align-middle items-center text-gray-900 mb-4 md:mb-0">
						<>
							<Image src="/img/logo.png" alt="" width={30} height={30} />
							<span className="ml-3 text-xl">Grover</span>
						</>
					</Link>

					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
						<Link href="/" className="mr-5 hover:text-gray-900">Menu</Link>
						<Link href="/" className="mr-5 hover:text-gray-900">Services</Link>
						<Link href="/" className="mr-5 hover:text-gray-900">Shop</Link>
					</nav>

				</div>
			</header>
		</>
	)
};
