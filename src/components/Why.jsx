import Image from "next/image";

export default function Why({img, title, subTitle, para, classes, headColor, buttonClass, class2, mainclass, imageClass}) {
	return(
		<>
			<section className={`${mainclass} text-gray-600`} body-font>
				<div className={`container mx-auto flex px-5 py-24 ${classes} flex-col items-center max-w-7xl`}>

					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<Image className={`object-contain object-center rounded ${imageClass} max-h-[500px]`} alt="hero" src={`/img/${img}`} width={500} height={600} />
					</div>

					<div className={`lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start ${class2}`}>

						<span className={`text-xs ${headColor}`}>{title}</span>
						<h1 className="title-font md:text-6xl sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">{subTitle}</h1>
						<p className="mb-8 leading-relaxed text-sm">{para}</p>

							<div className="flex justify-center">
								<button className="inline-flex text-white bg-[#f86061] border-0 py-2 px-6 focus:outline-none hover:bg-[#da4e4e] rounded text-lg">
									Explore Now
								</button>
							</div>
					</div>
					
				</div>
			</section>
		</>
	)
};
