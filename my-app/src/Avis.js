import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Avis.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRight from '@mui/icons-material/KeyboardArrowRight';


const Avis = () => {
    let data = [
        {
            id : 1 ,
            ParentName : "Nour",
            childName : "rahma",
            userName : "@nour_ch",
            avis :"les avis des parents sur la crèche peuvent varier en fonction de leur expérience "
        },
        {
            id : 2 ,
            ParentName : "Nour",
            childName : "rahma",
            userName : "@nour_ch",
            avis :"les avis des parents sur la crèche peuvent varier en fonction de leur expérience "
        },
        {
            id : 3 ,
            ParentName : "Nour",
            childName : "rahma",
            userName : "@nour_ch",
            avis :"les avis des parents sur la crèche peuvent varier en fonction de leur expérience "
        },
        {
            id : 4 ,
            ParentName : "Nour",
            childName : "rahma",
            userName : "@nour_ch",
            avis :"les avis des parents sur la crèche peuvent varier en fonction de leur expérience "
        },
        {
            id : 5 ,
            ParentName : "Nour",
            childName : "rahma",
            userName : "@nour_ch",
            avis :"les avis des parents sur la crèche peuvent varier en fonction de leur expérience "
        }
    ]
    return ( 
        <div className="avis-container">
            <h1 className="heading">Avis des parents</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                { data.map((item,index)=>{
                    return(
                        <SwiperSlide>
                            <div className='avis-card'>
                                <p className='parentName'>{`${item.ParentName} ,${item.childName}'s mom `}</p>
                                <p className='userName'>{ item.userName}</p>
                                <p className='avi-content'>{item.avis}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowLeft></ArrowLeft>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowRight></ArrowRight>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
     );
}
 
export default Avis;