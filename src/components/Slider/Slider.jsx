import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import adib from '../../assets/img/navoiy.png'
import { sliderData } from '../../lib/slider';

function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination,]}
                className="mySwiper"
            > 
            {
                sliderData && sliderData.map((item, index ) => (
                    <SwiperSlide  key={index}>
                        <div className="slider__item">
                            <p className="slider__title">{item.title}</p>
                            <img src={item.img} alt="" />
                        </div>
                </SwiperSlide>
                ))
            }
            </Swiper>
        </>
    );
}

export default Slider