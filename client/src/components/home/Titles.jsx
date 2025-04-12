import React from 'react'
import "../../styles/home/Titles.css"
const Titles = ({title, subtitle}) => {
  return (
    <div className="title-container">
        <p className="heading-title">{title}</p>
        <p className="heading-subtitle">{subtitle}</p>
    </div>
  )
}

export default Titles