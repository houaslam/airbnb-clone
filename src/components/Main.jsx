import images from '../assets/photo-grid.png';
import Card from './Card';

export default function Main(){

	const Hero = (
		<section>
			<img src={images} alt="Image stack" />
			<h1 className='hero--title'>Online Experiences</h1>
			<p className='hero--info'>
				Join unique interactive activities led by
				one-of-a-kind hosts—all without leaving 
				home.
			</p>
		</section>
	)
	return (
		<main>
			{/* {Hero} */}
			<Card/>
		</main>
	)
}
