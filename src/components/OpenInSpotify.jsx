import { useContext } from 'react'
import { DarkModeContext } from '../contexts'
import spotifyBlack from '../../assets/spotify_icon_black.png'
import spotifyWhite from '../../assets/spotify_icon_white.png'
import './OpenInSpotify.css'

const OpenInSpotify = ({ href }) => {
  const isDarkMode = useContext(DarkModeContext)
  const imgSrc = isDarkMode ? spotifyWhite : spotifyBlack

  return (
    <span className='button'>
      <img className='logo' src={imgSrc} alt='Spotify logo' />
      <a href={href} target='_blank' rel='noreferrer'>Open in Spotify</a>
    </span>
  )
}

export default OpenInSpotify
