import React from 'react'
import EducationBar from '../Components/ContentEdc'
import { education } from '../Data/Education'
import Navigation from '../Components/Navigation'
import "./styles/activeNavigation.css"
import { certified } from '../Data/Certified'
import AdvcCard from '../Components/AdvancementCard'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function EducationPage() {
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
      <Navigation class2={`active`}></Navigation>
     <div className='containers' data-aos = "fade-right">
      <div className='box-education'>
        <h1>Education</h1>
        <EducationBar children={education[0].school} since={education[0].since} location={education[0].location}/>
        <EducationBar children={education[1].school} since={education[1].since} location={education[1].location}/>
        <EducationBar children={education[2].school} since={education[2].since} location={education[2].location}/>
        <EducationBar children={education[3].school} since={education[3].since} location={education[3].location}/>
        <EducationBar children={education[4].school} since={education[4].since} location={education[4].location}/>
      </div>
      <div className='box-certified' data-aos="fade-left">
      <h1>Certified</h1>
     <div className='certified'>
      <AdvcCard image={certified[0].img} text={certified[0].title} organizer={certified[0].organizer} ></AdvcCard>
      {/* <AdvcCard image={certified[1].img} text={certified[1].title} organizer={certified[1].organizer} ></AdvcCard> */}
      <AdvcCard credential={certified[2].credential} image={certified[2].img} text={certified[2].title} organizer={certified[2].organizer} ></AdvcCard>
      </div>
      </div>
      </div>
    </>
  )
}
