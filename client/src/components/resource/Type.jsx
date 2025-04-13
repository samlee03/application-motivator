import React from 'react'
import "../../styles/resource/Type.css"
const Type = ({title, subtitle, description, more}) => {
  return (
    <div className="type-container">
        <p className="section-subtitle">{subtitle}</p>
        <p className="section-description">{description}</p>
        <p className="section-title">{title}</p>
        <u className="more-content">{more}</u>
    </div>
  )
}

export default Type