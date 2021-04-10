import React, {useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import AlertModal from "../AlertModal/AlertModal"
import FavModel from "../FavModel/FavModel"

import './ComicsCard.scss'

const Card = ({ item }) => {
  const [force2, setForce2] = useState(0)
  const [favs, setFavs] = useState([])
  const user = useSelector(state => state.userId)
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false)

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favsComics')) || [])
  }, [force2])

  const handleFavourite = (item) => {
    if (user) {
      localStorage.setItem('favsComics', JSON.stringify([item, ...favs]))
      setShow(true)
      setTimeout(()=>setShow(false), 1000)
      setForce2(force2 + 1)
    } else {
      setModalShow(true)
    }
  }

  return (
    <div className='snip-wrapper'>
       <a href={item.urls[0].url}>
      <figure className='snip1584'>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
        <figcaption>
          <h3>see details...</h3>
        </figcaption>
      </figure>
      </a>
      <Button className="button"onClick={() => handleFavourite(item)} variant='secondary'>Add Fav</Button>
      <h3>{item.title}</h3>
      {  item.creators.items[0] && <h5>{item.creators.items[0].name}</h5>}
      <AlertModal show={modalShow} onHide={() => setModalShow(false)} />
      <FavModel show={show} onHide={() => setShow(false)} />
    </div>
  )
}

export default Card
