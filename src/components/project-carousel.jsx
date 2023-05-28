import React from 'react'
import { Mousewheel, Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './style/carousel.css'
// import email from './images/email.png';
// import linkedin from './images/linkedin.png';
import proj1 from './images/Group 1.png'
import proj2 from './images/Group 2.png'
import proj3 from './images/Group 3.png'
function project() {

    const pagination = {
        clickable: true,
        dynamicBullets: true,
    };

    var width = window.innerWidth
    var trigger = true;

    if (trigger === false && width <= 600) {


        trigger = true;
    } else if (trigger === true && width <= 600) {
        trigger = false;
    }

    return (
        <div className='carousel'>

            <Swiper
                modules={[Mousewheel, Pagination, Navigation, Autoplay]}

                spaceBetween={20}
                slidesPerView={1}
                pagination={pagination}
                navigation={{
                    enabled: trigger,
                    invert: false
                }}
                mousewheel={{
                    invert: true,
                    forceToAxis: false
                }}
                watchSlidesProgress={true}
                loop={true}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>Resiklo Website</h1>
                            <p>Introducing Resiklo, an innovative ecommerce website for Envirotech. Our year-long effort has resulted in a self-sustaining platform with customer and admin sides. We take pride in our achievement of securing the 2nd place in the prestigious Best Capstone Project for Information Technology.</p>
                            <a href='https://resiklo-b2417.web.app' target='_blank' rel="noreferrer">View Project</a>
                        </div>
                        <div className='slideimg'><img src={proj1} alt="Envirotech Project" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>Easy-kleta</h1>
                            <p>This case study portfolio commission explores simple design and coding practices, utilizing a given design as a starting point. It involves learning about hosting services, JavaScript design flows, and implementing the provided design to create a visually appealing and functional website.</p>
                            <a href='https://dango-easykleta-casestudy.web.app' target='_blank' rel="noreferrer">View Project</a>
                        </div>
                        <div className='slideimg'><img src={proj2} alt="Envirotech Project" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>Github</h1>
                            <p>Welcome to my Github profile, where you'll find a collection of diverse projects and activities I've undertaken. This repository showcases a range of coding practices I've explored throughout my college years and internship. From personal projects to collaborative endeavors, you'll discover a variety of coding exercises that demonstrate my growth and experience in the field.</p>
                            <a href='https://resiklo-b2417.web.app' target='_blank' rel="noreferrer">View Project</a>
                        </div>
                        <div className='slideimg'><img src={proj3} alt="Envirotech Project" /></div>
                    </div>
                </SwiperSlide>


            </Swiper>

            {/* <footer>

                <h4>© 2023 Raphael Ortega. All rights reserved.</h4>
                <div className='footer-img'>
                    <a href="mailto:raphaelmar.ortega@gmail.com">

                        <img src={email} alt="email" />
                    </a>
                    <a href="https://linkedin.com/in/raphael-ortega" target='_blank' rel="noreferrer" >

                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </footer> */}

        </div>
    )
}

export default project
