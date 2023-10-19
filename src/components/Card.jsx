const Card = ({ imageUrl, name, releaseDate }) => {
  return (
    <div>
      <img src={imageUrl} alt={`${name} album image`} />
    </div>
  )
}

export default Card
