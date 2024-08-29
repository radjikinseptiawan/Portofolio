import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './index.css'

export default function Motto() {
  const element = useRef(null)
  useEffect(()=>{
    const typed = new Typed(element.current,{
        strings:[`Success is a failure in a different way and form, but with the same goal, which ultimately creates something called success.`],
        typeSpeed:50,
        backSpeed:50,
        backDelay:1000,
        loop:true
    })

    return ()=>{
        typed.destroy()
    }
  },[])
    return (
    <div className='bg'>
    <div className='text'>
        <h2 ref={element}></h2>
    </div>
    </div>
  )
}
