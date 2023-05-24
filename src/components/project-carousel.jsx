import React from 'react'
import { Mousewheel, Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './style/carousel.css'
import proj1 from './images/Group 1.png'
import proj2 from './images/Group 2.png'
import proj3 from './images/Group 3.png'
function project() {

    const pagination = {
        clickable: true,
        dynamicBullets: true,
    };



    return (
        <div className='carousel'>

            <Swiper
                modules={[Mousewheel, Pagination, Navigation, Autoplay]}

                spaceBetween={20}
                slidesPerView={1}
                pagination={pagination}
                navigation={{

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
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iusto, nam similique voluptatem explicabo quidem quam inventore alias illo necessitatibus sed. Voluptatibus fugiat dignissimos dolorem culpa quidem, iste expedita id.</p>
                            <a href='https://resiklo-b2417.web.app'>View Project</a>
                        </div>
                        <div className='slideimg'><img src={proj1} alt="Envirotech Project" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>Easy-kleta</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iusto, nam similique voluptatem explicabo quidem quam inventore alias illo necessitatibus sed. Voluptatibus fugiat dignissimos dolorem culpa quidem, iste expedita id.</p>
                            <a href='https://dango-easykleta-casestudy.web.app'>View Project</a>
                        </div>
                        <div className='slideimg'><img src={proj2} alt="Envirotech Project" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-conts">

                        <div className='slide-details'>
                            <h1>Github</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iusto, nam similique voluptatem explicabo quidem quam inventore alias illo necessitatibus sed. Voluptatibus fugiat dignissimos dolorem culpa quidem, iste expedita id.</p>
                            <a href='https://resiklo-b2417.web.app'>View Project</a>
                        </div>
                        <div className='slideimg'><img src={proj3} alt="Envirotech Project" /></div>
                    </div>
                </SwiperSlide>


            </Swiper>

            {/* <h1 className='carousel-title'>My Projects</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est esse cupiditate amet id odio, molestias nisi nihil alias, debitis et ipsum nam
                    repellendus voluptas illo eaque voluptates, voluptate pariatur perferendis?</p> */}


        </div>
    )
}

export default project
