import './index.css'
import myProfile from '../../Data/Profile'
export default function Profile(){
    return(
        <>
        <div>
      <h3>Fullname : {myProfile.name}</h3>
      <h3>Birdth : {myProfile.Birdth}</h3>
      <h3>NIM : {myProfile.NIM}</h3>
      <p>{myProfile.address}</p>
      <a href={`${myProfile.Whatsapp}`}><img src={`${myProfile.WhatsappImage}`} alt='whatsapp' width={'80px'}/></a>
      <a href={`mailto:${myProfile.email}`}><img src={`${myProfile.EmailImage}`} alt='email' width={'80px'}/></a>
      <a href={`${myProfile.linkedin}`}><img src={`${myProfile.linkedinImage}`} alt='Linkedin' width={'80px'}/></a>
      <a href={`${myProfile.instagram}`}><img src={`${myProfile.instagramImage}`} alt='Instagram' width={'80px'}/></a>
      <a href={`${myProfile.facebook}`}><img src={`${myProfile.facebookImage}`} alt='Facebook' width={'80px'}/></a>
      </div>
      
      <div className="myProfile">
      <img src={`${myProfile.myPhoto}`}alt="Profil"/>
      </div>
      </>
    )
}