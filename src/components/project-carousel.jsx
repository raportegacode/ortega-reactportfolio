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
import proj4 from './images/PhilNITS_Certificate.jpg'
import proj5 from './images/Javascript for Beginners_page-0001.jpg'
import proj6 from './images/ReactJS for Beginners_page-0001.jpg'
function project() {

    const pagination = {
        clickable: true,
        dynamicBullets: false,
    };

    var width = window.innerWidth
    var trigger = false;
    // setInterval(() => {
    if (width >= 600) {
        trigger = true;
    } else if (width < 600) {

        trigger = false;
    }
    // }, 1000);

    return (
        <div className='carousel'>

            <Swiper
                modules={[Mousewheel, Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={pagination}
                navigation={trigger}
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

                        <div className='slide-details' >
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
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>PhilNITS IT Passport Examination</h1>
                            <p>The capability of people in their knowledge of Information Technology and how IT can be used in carrying out their tasks in the workplace.</p>
                            <a href='https://www.philnits.org/passers_IP2018.html#Oct20022IP' target='_blank' rel="noreferrer">View Passers</a>
                        </div>
                        <div className='slideimg'><img src={proj4} alt="PhilNITS Certificate" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>Javascript for Beginners - Simplilearn</h1>
                            <p>Certified in 'Javascript for Beginners,' I have gained a solid understanding of the core concepts of JavaScript, empowering me to create dynamic and interactive web applications. </p>
                            <br></br>

                        </div>
                        <div className='slideimg'><img src={proj5} alt="PhilNITS Certificate" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>ReactJs for Beginners - Simplilearn</h1>
                            <p>Certified in 'ReactJS for Beginners,' I have acquired the essential skills to build dynamic and responsive user interfaces using ReactJS.</p>
                            <br></br>
                        </div>
                        <div className='slideimg'><img src={proj6} alt="PhilNITS Certificate" /></div>
                    </div>
                </SwiperSlide>


            </Swiper>



        </div>
    )
}

export default project
