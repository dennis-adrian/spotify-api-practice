import Card from './Card'
import './Cards.css'

const Cards = ({ albums }) => {
  return (
    <div className='cards-container'>
      {albums.map((album) => {
        return (
          <Card
            artists={album.artists.map(({ name }) => name)}
            imageUrl={album.images[1].url}
            key={album.id}
            name={album.name}
            releaseDate={album.release_date}
            spotifyUrl={album.external_urls.spotify}
          />
        )
      })}
    </div>
  )
}

export default Cards
