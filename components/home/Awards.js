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
export default function Project() {
    return (
        <>

        {/* Project Two Start */}
        <section className="project-two">
            <div className="container">
                <div className="project-two__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Our Latest Awards</span>
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
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award1.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award1.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award5.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award5.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award2.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award2.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award3.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award3.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award4.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award4.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award6.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award6.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award7.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award7.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award8.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award8.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award9.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award9.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award10.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award10.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award11.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award11.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                             <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award12.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award12.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award13.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award13.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award14.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award14.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="project-two__single">
                                    <div className="project-two__img">
                                        <img src="assets/images/project/award15.jpg" alt=""/>
                                        <div className="project-two__content">
                                            
                                            <div className="project-two__arrow">
                                                <Link href="assets/images/project/award15.jpg" className="img-popup"><span
                                                        className="icon-dabble-arrow-right"></span></Link>
                                            </div>
                                        </div>
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
