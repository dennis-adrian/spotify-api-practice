import Card from './Card'
import './Cards.css'

const Cards = ({ albums }) => {
  return (
    <div className='cards-container'>
      {albums.map(album => (
        <Card
          key={album.id}
          name={album.name}
          releaseDate={album.release_date}
          imageUrl={album.images[1].url}
        />
      ))}
    </div>
  )
}

export default Cards
