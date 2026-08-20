import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Avis.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRight from '@mui/icons-material/KeyboardArrowRight';
import * as avisApi from './mock/api/avis';

const Avis = () => {
    const [data, setData] = useState([]);

    useEffect(() => { avisApi.getApprovedAvis().then(setData); }, []);

    if (data.length === 0) return null;

    return (
        <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <h2 className="pb-4 text-center font-display text-4xl font-normal text-primary sm:text-5xl lg:text-6xl">Avis des parents</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                spaceBetween={28}
                autoHeight={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 60,
                    modifier: 1.2,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container !overflow-visible px-4 py-10"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[340px]">
                        <div className="grid gap-3 rounded-[2rem] bg-[#FFF5D2] p-8 font-poppins text-gray-dark shadow-xl">
                            <p className="text-xl font-medium text-primary sm:text-2xl">{item.parentName}</p>
                            {item.childName && <p className="text-sm font-bold">Parent de {item.childName}</p>}
                            <p className="text-base sm:text-lg">{item.message}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="slider-controler relative mt-8 flex items-center justify-center gap-6">
                <div className="swiper-button-prev slider-arrow !static !left-auto !top-auto !m-0 !grid !h-14 !w-14 !translate-y-0 place-items-center rounded-full bg-accent-orange drop-shadow-lg after:!content-none">
                    <ArrowLeft style={{ height: 37, width: 37, color: "#fff" }}></ArrowLeft>
                </div>
                <div className="swiper-pagination !static !w-auto"></div>
                <div className="swiper-button-next slider-arrow !static !right-auto !top-auto !m-0 !grid !h-14 !w-14 !translate-y-0 place-items-center rounded-full bg-accent-orange drop-shadow-lg after:!content-none">
                    <ArrowRight style={{ height: 37, width: 37, color: "#fff" }}></ArrowRight>
                </div>
            </div>
        </section>
    );
}

export default Avis;
