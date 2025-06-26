'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState, useCallback, useEffect } from 'react';


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
    const [lightboxImg, setLightboxImg] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);

    // Detect desktop only
    useEffect(() => {
        const checkDesktop = () => setIsDesktop(true);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const openLightbox = useCallback((src) => {
        if (isDesktop) setLightboxImg(src);
    }, [isDesktop]);
    const closeLightbox = useCallback(() => setLightboxImg(null), []);

    return (
        <>
        {/* Lightbox Overlay */}
        {lightboxImg && isDesktop && (
    <div
        onClick={closeLightbox}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.9)',
            backgroundColor: 'rgba(0,0,0,0.9) !important',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            transition: 'background 0.3s ease',
            zoom:"125%"
        }}
    >
        <img
            src={lightboxImg}
            alt="Award Preview"
            onClick={e => e.stopPropagation()}
            style={{
                height: '90vh',
                width: 'auto',
                maxWidth: '90vw',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 0 40px 8px rgba(0,0,0,0.8)',
                background: '#fff',
                zIndex: 100000,
                cursor: 'default',
                display: 'block',
                margin: 'auto',
            }}
        />
        <button
            onClick={closeLightbox}
            style={{
                position: 'absolute',
                top: '32px',
                right: '32px',
                zIndex: 100001,
                background: 'rgba(0,0,0,0.8)',
                backgroundColor: 'rgba(0,0,0,0.8) !important',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0,0,0,0.9)';
                e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0,0,0,0.8)';
                e.target.style.transform = 'scale(1)';
            }}
            aria-label="Close"
        >
            ×
        </button>
    </div>
)}
        {/* Project Two Start */}
        <section className="project-two">
            <div className="container" style={{width:"80vw !important"}}>
                <div className="project-two__top" style={{ 
                    position: 'relative', 
                    width: '100%', 
                    margin: '0 auto', 
                    padding: '20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div className="section-title text-left" style={{ 
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '1200px',
                        padding: '0 20px',
                        marginBottom: '20px'
                    }}>
                        <div className="section-title__tagline-box" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <span className="section-title__tagline" style={{ 
                                fontSize: '30px !important',
                                color: '#ff5e14',
                                fontWeight: '700 !important',
                                display: 'block',
                                marginBottom: '10px',
                                textAlign: 'left !important',
                                alignSelf: 'flex-start',
                                marginLeft: '0 !important',
                                width: 'auto !important',
                            }}>
                                Our Latest Awards
                            </span>
                            <div className="project-two__nav" style={{ 
                                display: 'flex',
                                gap: '20px',
                                width: 'auto',
                                margin: '0',
                                padding: '0',
                                pointerEvents: 'none'
                            }}>
                                <div className="swiper-button-prev1 h1p" style={{ 
                                    pointerEvents: 'auto',
                                    cursor: 'pointer',
                                    zIndex: 10
                                }}>
                                    <i className="icon-arrow-left" style={{ fontSize: '24px !important' }}></i>
                                </div>
                                <div className="swiper-button-next1 h1n" style={{ 
                                    pointerEvents: 'auto',
                                    cursor: 'pointer',
                                    zIndex: 10
                                }}>
                                    <i className="icon-arrow-right" style={{ fontSize: '24px !important' }}></i>
                        </div>
                    </div>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            maxWidth: '100vw',
                            margin: "0 auto",
                            padding: "0 20px"
                        }}>
                            <h2 className="section-title__title" style={{
                                textAlign: "center",
                                width: "100%",
                                maxWidth: "1200px",
                                fontSize: '40px !important',
                                fontWeight: '700 !important',
                                color: '#0a1c4c',
                                margin: '0'
                            }}>
                                Awards & Recognition
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="project-two__bottom" style={{marginTop:"10px", zoom:"80%"}}>
                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award1.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award1.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award5.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award5.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            {/*Services One Single Start*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award2.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award2.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award3.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award3.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award4.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award4.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award6.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award6.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award7.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award7.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award8.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award8.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award9.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award9.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award10.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award10.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award11.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award11.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                             <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award12.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award12.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award13.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award13.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award14.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award14.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
                                            />
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Services One Single End*/}
                             {/*Services One Single Start*/}
                             <SwiperSlide>
                            <div className="swiper-slide">
                                    <div 
                                        style={{ 
                                            padding: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            position: 'relative',
                                            zIndex: '1',
                                        }}
                                    >
                                        <div 
                                            style={{ 
                                                border: '4px solid orange !important',
                                                borderRadius: '12px !important',
                                                background: '#fff',
                                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06) !important',
                                                transition: 'transform .4s cubic-bezier(.4,2,.6,1) !important, box-shadow .4s !important',
                                                width: '100% !important',
                                                maxWidth: '320px !important',
                                                cursor: 'pointer',
                                                zIndex: '120 !important',
                                                position: 'relative !important',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                                e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
                                                e.currentTarget.style.zIndex = '9999';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
                                                e.currentTarget.style.zIndex = '120';
                                            }}
                                            onClick={() => openLightbox('assets/images/project/award15.jpg')}
                                        >
                                            <img
                                                src="assets/images/project/award15.jpg"
                                                alt=""
                                                style={{ width: '100% !important', display: 'block', transition: 'transform .4s !important', borderRadius: '8px !important' }}
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
