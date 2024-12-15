import photo from '/assets/katie-zaferes.png'
import star from '/assets/star.png'

export default function Card(props){
    let badge = 'ONLINE'
    if (!props.openSpots)
        badge = 'SOLD OUT'

    return (
    <div className="card">
        <div className='wrap'>
            <div className='card--badge'>{badge}</div> 
            <img className='card--photo' src={`/assets/${props.coverImg}`} alt='card-photo'/>
            <div className='description--overlay'>

                <p className='card--description'>{props.description}</p>
            </div>
        </div>
        <div className='card--rating'>
            <div className='rating--info'>
                <img className='card--rating-star' src={star} alt='rating-star'/>
                <p>{props.stats.rating}
                <span className='grey'> ({props.stats.reviewCount}) </span>
                <span className='grey'>• {props.location}</span>
                </p>
                
            </div>
        </div>
        <h2 className='card--info'>{props.title}</h2>
        <p className='card--price'><span className='bold'>From ${props.price} /</span>  person</p>
    </div>
    )
}