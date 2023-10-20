import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const urlApi = 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums'
const fetchAlbums = async () => {
  const response = await fetch(urlApi, {
    headers: { authorization: 'Bearer BQBAuaggRSpb8qHnITdI5pS1XTd30yDu52wzKiL5ydJ8g-8hinHw8OV4xkSR7XOm22A-_VEt6Fs1bmur0m6prLW9tarp53rG3Uj9_Ds1tt6dOJvgnX8' }
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
