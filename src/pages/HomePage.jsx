import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const urlApi = 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/albums'
const fetchAlbums = async () => {
  const response = await fetch(urlApi, {
    headers: { authorization: 'Bearer BQBaS5t5aTjXWBKc3rRfjjVijMbysYc_l5R4GVUC0BIyUpBxngWV-qQX6-LCyk3smbwPcfduDlg2wYPfH3VhPAQCSzbQFtZMzjD0WhcGdeTS2oYC3JQ' }
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
