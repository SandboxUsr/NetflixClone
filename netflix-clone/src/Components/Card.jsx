import React from 'react'
import "../Styles/card.css"

export default function Card(props) {
  return (
    <div>
      <img className="poster" src={`https://image.tmdb.org/t/p/w200/${props.poster}`} alt="poster" />
    </div>
  )
}
