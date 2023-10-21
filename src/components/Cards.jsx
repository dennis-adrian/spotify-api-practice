import Card from './Card'
import './Cards.css'

const Cards = ({ albums }) => {
  return (
    <div className='cards-container'>
      {albums.map((album) => {
        return (
          <Card
            imageUrl={album.images[1].url}
            key={album.id}
            name={album.name}
            releaseDate={album.release_date}
          />
        )
      })}
    </div>
  )
}

export default Cards
