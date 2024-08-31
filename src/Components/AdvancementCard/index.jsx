import React from 'react'
import './index.css'
export default function AdvcCard({text,image,credential,organizer}) {
  return (
    <>
    <div className='cardAdv'>
        <img src={image}/>
        <h3>{text}</h3>
        <h5>{organizer}</h5>
    <a href={credential} className='btn-credential'>See Credential</a>
    </div>
    </>
  )
}
