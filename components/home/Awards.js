'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
export default function Awards() {
    return (
        <>

        {/* Project Two Start */}
        <section className="project-two">
            <div className="container">
                <div className="project-two__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" style={{top:"20px"}}>Our Latest Awards</span>
                        </div>
                        <h2 className="section-title__title">Awards & Recognition
                        </h2>
                    </div>
                    <div className="project-two__nav">
                        <div className="swiper-button-prev1 h1p">
                            <i className="icon-arrow-left"></i>
                        </div>
                        <div className="swiper-button-next1 h1n">
                            <i className="icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="project-two__bottom">
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award1.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award5.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award2.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award3.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award4.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award6.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award7.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award8.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award9.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award10.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award11.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                             <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award12.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award13.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award14.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div style={{ padding: '10px' }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <img
                                                src="assets/images/project/award15.jpg"
                                                alt=""
                                                style={{ width: '100%', transition: 'transform .4s ease', transform: 'scale(1)' }}
                                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}

                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Project Two End */}
        </>
    )
}
