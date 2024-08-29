import React from 'react'
import './index.css'
export default function Navigation({class1,class2,class3,class4}) {
  return (
    <>
    <div className='navigationBar'>
    <a href='/' className={class1}><p>Profile</p></a>
    <a href='/education' className={class2}><p>Education</p></a>
    <a href='/experience' className={class3}><p>Experience</p></a>
    <a href='/skill' className={class4}><p>Technical Skill</p></a>
    </div>
    </>
  )
}
