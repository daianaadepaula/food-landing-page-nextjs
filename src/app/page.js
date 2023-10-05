import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
		
			<Hero />
			<Services />
			<Why 
				img="image and card.png" 
				title="WHY CHOOSE US" 
				subTitle="Find Favorites And Discover New Ones" 
				para="At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti."
				classes="md:flex-row" 
				headColor="text-[#03a66b]" 
				buttonClass="" 
			/>
			<Why 
				img="image & card.png" 
				title="HOME DELIVERY" 
				subTitle="Sit At Home We Will Take Care Your Order" 
				para="At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti atque corrupti quos."
				classes="md:flex-row-reverse" 
				headColor="text-[#f9ba45]" 
				buttonClass="" 
				class2="lg:pr-24 md:pr-16"
			/>

		</>
  )
}
