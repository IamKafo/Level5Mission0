import React from 'react'
import './Contact.css'
import NavBar from './NavBar'

const Contact = () => {
  return (
    <>
    <NavBar/>
    <div className="contactBackground">
            <div className="contactContainer">
                <div className="contactCard">
                    <h1>
                        Contact Us
                    </h1>
                    <form className='form'>
                        <input type="text"  name='name' placeholder='Name'/>
                        <input type="text"  name='Email' placeholder='Email'/>
                    </form>
                    <div className='contactButton'>SUBMIT </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Contact