import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";

export default function Cards({ images, title, dataAos }) {
    useEffect(() => {
        AOS.init({
            offset: 5,
            duration: 1000,
            easing: "ease-in-sine",
            delay: 100,
            once: true
        });
    }, []);  // Empty dependency array to initialize AOS only once

    return (
        <>
            <div className='card' data-aos={dataAos}>
                <div>
                    <img src={images} alt='' width={'250px'} />
                </div>
                <h3>{title}</h3>
                <button className='button1'>Source Code</button>
                <button className='button2'>See</button>
            </div>
        </>
    );
}
