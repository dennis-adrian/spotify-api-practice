import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Card.css'
import OpenInSpotify from './OpenInSpotify'

const Card = ({ artists, imageUrl, isLastItem, name, releaseDate, spotifyUrl }) => {
  const imgRef = useRef(null)
  const isVisible = useIntersectionObserver(imgRef)

  const formattedArtists = artists.join(', ')
  const releaseYear = new Date(releaseDate).getFullYear()
  const imgSrc = isVisible ? imageUrl : ''

  return (
    <div
      className={`card ${isLastItem ? 'last-item' : ''}`}
      ref={imgRef}
    >
      <img
        src={imgSrc}
        alt={`${name} album image`}
        style={{ transition: 'opacity 0.5s', opacity: isVisible ? 1 : 0 }}
      />
      <strong className='card-title'>{name}</strong>
      <span>{`${formattedArtists} - ${releaseYear}`}</span>
      <OpenInSpotify href={spotifyUrl} />
    </div>
  )
}

export default Card
