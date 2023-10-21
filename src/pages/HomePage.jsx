import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const urlApi = 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums'
const fetchAlbums = async () => {
  const response = await fetch(urlApi, {
    headers: { authorization: 'Bearer BQBCfRnpWLMVubEUiO4X11A95ZlrRpyw-JApKcYHgS4gZbG4YEwec7Maxy4T6IOiU_ieB_ykSbEbWyh9VzOsu9tCXX2DjKZA5V5LdUF7r0xA1iya1ME' }
  })
  return await response.json()
}

const HomePage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetchAlbums().then(({ items }) => setAlbums(items))
  }, [])

  return <Cards albums={albums} />
}

export default HomePage
