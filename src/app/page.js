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
				classes="md:flex-row-reverse" 
				headColor="text-[#03a66b]" 
				buttonClass="" 
			/>

		</>
  )
}
