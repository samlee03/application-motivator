import React from 'react'
import MascotHead from "../../assets/images/mascot/logo_head.png"
import MascotBody from "../../assets/images/mascot/logo_body.png"
import BigSparkle from "../../assets/images/mascot/big_sparkle.png"
import LittleSparkle from "../../assets/images/mascot/little_sparkle.png"
import Shadow from "../../assets/images/mascot/shadow.png"
import "../../styles/jobs/Mascot.css"
const Mascot = () => {
  return (
    <div className="mascot-container">
        <img className="mascot_head" src={MascotHead}></img>
        <img className="mascot_sparkle1" src={BigSparkle}></img>
        <img className="mascot_sparkle2" src={LittleSparkle}></img>
        <img className="mascot-shadow" src={Shadow}></img>
        <img className="mascot_head" src={MascotBody}></img>
    </div>
  )
}

export default Mascot