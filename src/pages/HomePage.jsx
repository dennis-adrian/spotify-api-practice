import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const urlApi = 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums'
const fetchAlbums = async () => {
  const response = await fetch(urlApi, {
    headers: { authorization: 'Bearer BQDvo7H_7XD2KzhMCOHlH7scfqW7g85_ySFAQvDJwAMIjmEEa73OzWZUsoxhKROgnaLl6w6JgWjMzmwiKkxma300nNUtks6vUXEOHkvCQJmtjcHoORI' }
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
