import photo from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card(){
    return (
    <div className="card">
        <img className='card--photo' src={photo} alt='card=photo'/>
        <div className='card--rating'>
            <div className='rating--info'>
                <img className='card--rating-star' src={star} alt='rating-star'/>
                <p>5.0
                <span className='grey'> (6) </span>
                <span className='grey'>• USA</span>
                </p>
                
            </div>
        </div>
        <h2 className='card--info'>Life lessons with Katie Zaferes</h2>
        <p className='card--price'><span className='bold'>From $136 /</span>  person</p>
    </div>
    )
}