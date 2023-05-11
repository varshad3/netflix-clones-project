import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [show,setshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setshow(true)

            }
            else{
                setshow(false)
            }
        })
    })
  return (
    
    <div className={`nav ${show && 'blackNav'}`}>
        <img style={{width:'150px'}} src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="netflix image" />
    </div>
  )
}

export default Navbar