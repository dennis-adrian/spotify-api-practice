import { useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './Card.css'

const Card = ({ imageUrl, isLastItem, name, releaseDate }) => {
  const imgRef = useRef(null)
  const isVisible = useIntersectionObserver(imgRef)

  return (
    <div className={`card ${isLastItem ? 'last-item' : ''}`} ref={imgRef}>
      <img
        src={isVisible ? imageUrl : ''}
        alt={`${name} album image`}
        style={{ transition: 'opacity 0.5s', opacity: isVisible ? 1 : 0 }}
      />
      <strong>{name}</strong>
      <p>{releaseDate}</p>
    </div>
  )
}

export default Card
