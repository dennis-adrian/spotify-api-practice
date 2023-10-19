import { useEffect, useState } from 'react'
import Card from '../components/Card'

const urlApi = 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums'
const fetchAlbums = async () => {
  const response = await fetch(urlApi, {
    headers: { authorization: 'Bearer BQBbWmNmXEzbwQGMvfTQ4in930-eSQI_L5elx_r4si4jxO-UUGwCLa2WmMIfOAh1xUo50dcqhiPuGxHTfhpkLYGvBUfwE7en55u1HmK-4lUiJWHea9U' }
  })
  return await response.json()
}

const HomePage = () => {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetchAlbums().then(({ items }) => setAlbums(items))
  }, [])

  return albums.map((album) => (
    <Card
      key={album.id}
      name={album.name}
      releaseDate={album.release_date}
      imageUrl={album.images[0].url}
    />
  ))
}

export default HomePage
