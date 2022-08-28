import './card.css'
function Card({img,title}){

    return(
        <>
        <div className="card">
            <img className="card-img" src={img} alt="kitob" />
            <h4 className='card-title'>{title}</h4>
        </div>
        </>
    )
}
export default Card;