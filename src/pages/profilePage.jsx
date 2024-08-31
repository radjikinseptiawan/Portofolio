import React from 'react'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Profile from '../Components/Profile/Index'
import Navigation from '../Components/Navigation'
import Motto from '../Components/Motivation'
import Cards from '../Components/Cards'
import { Project } from '../Data/Projects'

import './styles/activeNavigation.css'


export default function profilePage() {
    
  useEffect(()=>{
    AOS.init({
      offset : 5,
      duration : 1000,
      easing :"ease-in-sine",
      delay : 100,
      once : true
    })  
  },[])

  return (
    <>
    <div>
  <Navigation class1={`active`}/>
</div>

    <div className='box'>
      <Profile/>
    </div>
    <div>
    <Motto/>
    </div>

    <div className='border'>
      <h1>Projects</h1>
      <div className="box-grid">
        <Cards images={Project[1].img} title={Project[1].title} dataAos={'flip-left'}></Cards>
        <Cards images={Project[0].img} title={Project[0].title} dataAos={'flip-right'}></Cards>
        <Cards images={Project[0].img} title={Project[0].title} dataAos={'flip-left'}></Cards>
        <Cards images={Project[0].img} title={Project[0].title} dataAos={'flip-right'}></Cards>
        <Cards images={Project[0].img} title={Project[0].title} dataAos={'flip-left'}></Cards>
        <Cards images={Project[0].img} title={Project[0].title} dataAos={'flip-right'}></Cards>
      </div>
    </div>

    </>
  )
}
