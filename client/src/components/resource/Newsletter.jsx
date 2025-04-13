import React from 'react'

import Titles from '../../components/home/Titles'
import "../../styles/resource/Newsletter.css"

const Newsletter = () => {
    return (
        <div className='newsletter-section'>
            <Titles title="Newsletter" subtitle="Never miss an opportunity again"/>
            <form className='form-section'>
                <div className='input-section'>
                    <input className='email-input' placeholder='example@email.com'/>
                    <input className='mobile-input' placeholder='Mobile (optional)'/>
                </div>
                <div className='checkbox-wrapper'>
                    <input type='checkbox' id='notifications'/>
                    <label for='notifications'>Allow notifications</label>  
                </div>  
                <div className='button-section'>
                    <input type='submit' value="Join"/>
                </div>
            </form>
        </div>
    )
}

export default Newsletter