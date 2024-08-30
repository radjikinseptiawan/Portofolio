import React from 'react'
import './index.css'
export default function EducationBar({children,since,location}) {
 
    return (
    <>
        <div className='education-box'>
            <h5>{children}</h5>
            <p>since: {since}</p>
            <a href={location} target="_tblank"><img src="map.svg" alt=""/></a>
        </div>
    </>
  )
}
