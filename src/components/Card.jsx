import './Card.css'

const Card = ({ imageUrl, name, releaseDate }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={`${name} album image`} />
    </div>
  )
}

export default Card
