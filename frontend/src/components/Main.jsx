import images from '/assets/photo-grid.png';
import photo from '/assets/katie-zaferes.png'
import Card from './Card';
import Data from '../data'

function Hero(){
	return (
		<section className='hero'>
			<img className='hero--photo' src={images} alt="Image stack" />
			<h1 className='hero--title'>Online Experiences</h1>
			<p className='hero--info'>
				Join unique interactive activities led by
				one-of-a-kind hosts—all without leaving 
				home.
			</p>
		</section>
	)
}

export default function Main(){
	const cardElements = Data.map((x)=>{
		return (
			<Card 
				key = {x.id}
				{...x}
			/>
		)
	})

	return (
		<main>
			<Hero />
			<section className='cards-list'>
				{cardElements}
			</section>
		</main>
	)
}
