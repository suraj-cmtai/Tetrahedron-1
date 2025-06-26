'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

export default function Testimonial() {
    return (
        <>

            {/* Testimonial Two Start */}
            <section className="testimonial-two1">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Client testimonial</span>
                        </div>
                        <h2 className="section-title__title">Excellence Dynam Builders Every Project</h2>
                    </div>
                    <div className="row">
                        {/* Swiper section wider - col-xl-8 */}
                        <div className="col-xl-8" style={{maxWidth:"650px"}}>
                            <div className="testimonial-two__right">
                                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container" style={{borderRadius:"28px"}}>
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div
                                                style={{
                                                    background: "linear-gradient(135deg, #f9f9ff, #eef2ff)",
                                                    padding: "45px",
                                                    borderRadius: "28px",
                                                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                                    border: "1px solid rgba(255,255,255,0.9)",
                                                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                                                    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                                    minHeight:'350px'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(76,81,191,0.15)";
                                                    e.currentTarget.style.transform = "translateY(-8px)";
                                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                                                }}
                                            >
                                                <div className="testimonial-two__quote-icon">
                                                    <span className="icon-quote-2"></span>
                                                </div>
                                                <div className="testimonial-two__client-info">
                                                    <div className="testimonial-two__client-img"></div>
                                                    <div className="testimonial-two__client-content">
                                                        <h4 className="testimonial-two__client-name">Mr. Raduno Agrawal</h4>
                                                        <p className="testimonial-two__client-sub-title">(Director at Gopal Aromatics Private Limited)</p>
                                                    </div>
                                                </div>
                                                <p className="testimonial-two__text">“On behalf of GAPL, we sincerely appreciate Tetrahedron Manufacturing Services...”</p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div
                                                style={{
                                                    background: "linear-gradient(135deg, #f9f9ff, #eef2ff)",
                                                    padding: "45px",
                                                    borderRadius: "28px",
                                                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                                    border: "1px solid rgba(255,255,255,0.9)",
                                                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                                                    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                                    minHeight:'350px'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(76,81,191,0.15)";
                                                    e.currentTarget.style.transform = "translateY(-8px)";
                                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                                                }}
                                            >
                                                <div className="testimonial-two__quote-icon">
                                                    <span className="icon-quote-2"></span>
                                                </div>
                                                <div className="testimonial-two__client-info">
                                                    <div className="testimonial-two__client-img"></div>
                                                    <div className="testimonial-two__client-content">
                                                        <h4 className="testimonial-two__client-name">Mr. Mohit Nayar</h4>
                                                        <p className="testimonial-two__client-sub-title">(Owner at Modern Pipe Industries)</p>
                                                    </div>
                                                </div>
                                                <p className="testimonial-two__text">“M/S Tetrahedron Team was appointed as the Layout and Project Management Consultant...”</p>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div
                                                style={{
                                                    background: "linear-gradient(135deg, #f9f9ff, #eef2ff)",
                                                    padding: "45px",
                                                    borderRadius: "28px",
                                                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                                    border: "1px solid rgba(255,255,255,0.9)",
                                                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                                                    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                                    minHeight:'350px'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(76,81,191,0.15)";
                                                    e.currentTarget.style.transform = "translateY(-8px)";
                                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                                                }}
                                            >
                                                <div className="testimonial-two__quote-icon">
                                                    <span className="icon-quote-2"></span>
                                                </div>
                                                <div className="testimonial-two__client-info">
                                                    <div className="testimonial-two__client-img"></div>
                                                    <div className="testimonial-two__client-content">
                                                        <h4 className="testimonial-two__client-name">Mr. Amit Goel</h4>
                                                        <p className="testimonial-two__client-sub-title">(Managing Director at Edgetech Air Systems Pvt. Ltd.)</p>
                                                    </div>
                                                </div>
                                                <p className="testimonial-two__text">“On behalf of Edgetech Air Systems Pvt. Ltd., I, Amit Goel, appreciate...”</p>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>

                                <div className="testimonial-two__right" style={{ position: "relative" }}>
                                    {/* Move nav buttons above Swiper and float left */}
                                    <div className="testimonial-two__nav" style={{
                                        position: "absolute",
                                        top: "-90%",
                                        left: "-450px", // adjust as needed
                                        transform: "translateY(-40%)",
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: "6px"
                                    }}>
                                        <div className="swiper-button-prev1 h1p">
                                            <i className="icon-arrow-left"></i>
                                        </div>
                                        <div className="swiper-button-next1 h1n">
                                            <i className="icon-arrow-right"></i>
                                        </div>
                                    </div>

                                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                                        <div className="swiper-wrapper">
                                            {/* Swiper slides stay same */}
                                        </div>
                                    </Swiper>
                                </div>

                            </div>
                        </div>

                        {/* Image section narrower - col-xl-4 */}
                        <div className="col-xl-4">
                            <div className="testimonial-two__left">
                                <form
                                    action="https://formspree.io/f/your-form-id" // Replace with your actual Formspree ID
                                    method="POST"
                                    style={{
                                        background: "linear-gradient(135deg, #f9f9ff, #eef2ff)",
                                        padding: "45px",
                                        borderRadius: "28px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                        fontFamily: "'Montserrat', 'Poppins', sans-serif",
                                        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                        border: "1px solid rgba(255,255,255,0.9)",
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.boxShadow = "0 25px 50px rgba(76,81,191,0.15)";
                                        e.currentTarget.style.transform = "translateY(-8px)";
                                        e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
                                    }}
                                >
                                    <h3 style={{
                                        marginBottom: "32px",
                                        fontSize: "30px",
                                        background: "var(--elitecons-base)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontWeight: "800",
                                        textAlign: "center",
                                        letterSpacing: "0.7px",
                                        textTransform: "uppercase",
                                        textShadow: "1px 1px 1px rgba(255,255,255,0.5)"
                                    }}>Get in Touch</h3>

                                    <div style={{ marginBottom: "26px", position: "relative" }}>
                                        <label
                                            htmlFor="name"
                                            style={{
                                                display: "block",
                                                marginBottom: "8px",
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                color: "#4a5568",
                                                letterSpacing: "0.3px"
                                            }}
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                            style={{
                                                width: "100%",
                                                padding: "16px 20px",
                                                borderRadius: "14px",
                                                border: "2px solid #e2e8f0",
                                                fontSize: "17px",
                                                color: "#2d3748",
                                                fontWeight: "400",
                                                letterSpacing: "0.2px",
                                                outline: "none",
                                                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.border = "2px solid #4c51bf";
                                                e.target.style.boxShadow = "0 0 0 5px rgba(76,81,191,0.15), inset 0 2px 4px rgba(0,0,0,0)";
                                                e.target.style.backgroundColor = "#ffffff";
                                                e.target.style.transform = "translateY(-2px)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.border = "2px solid #e2e8f0";
                                                e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.05)";
                                                e.target.style.backgroundColor = "rgba(255,255,255,0.8)";
                                                e.target.style.transform = "translateY(0)";
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: "26px", position: "relative" }}>
                                        <label
                                            htmlFor="email"
                                            style={{
                                                display: "block",
                                                marginBottom: "8px",
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                color: "#4a5568",
                                                letterSpacing: "0.3px"
                                            }}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                            style={{
                                                width: "100%",
                                                padding: "16px 20px",
                                                borderRadius: "14px",
                                                border: "2px solid #e2e8f0",
                                                fontSize: "17px",
                                                color: "#2d3748",
                                                fontWeight: "400",
                                                letterSpacing: "0.2px",
                                                outline: "none",
                                                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.border = "2px solid #4c51bf";
                                                e.target.style.boxShadow = "0 0 0 5px rgba(76,81,191,0.15), inset 0 2px 4px rgba(0,0,0,0)";
                                                e.target.style.backgroundColor = "#ffffff";
                                                e.target.style.transform = "translateY(-2px)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.border = "2px solid #e2e8f0";
                                                e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.05)";
                                                e.target.style.backgroundColor = "rgba(255,255,255,0.8)";
                                                e.target.style.transform = "translateY(0)";
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: "30px", position: "relative" }}>
                                        <label
                                            htmlFor="message"
                                            style={{
                                                display: "block",
                                                marginBottom: "8px",
                                                fontSize: "15px",
                                                fontWeight: "500",
                                                color: "#4a5568",
                                                letterSpacing: "0.3px"
                                            }}
                                        >
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Type your message here..."
                                            rows="4"
                                            required
                                            style={{
                                                width: "100%",
                                                padding: "16px 20px",
                                                borderRadius: "14px",
                                                border: "2px solid #e2e8f0",
                                                fontSize: "17px",
                                                color: "#2d3748",
                                                fontWeight: "400",
                                                letterSpacing: "0.2px",
                                                lineHeight: "1.6",
                                                outline: "none",
                                                resize: "none",
                                                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.border = "2px solid #4c51bf";
                                                e.target.style.boxShadow = "0 0 0 5px rgba(76,81,191,0.15), inset 0 2px 4px rgba(0,0,0,0)";
                                                e.target.style.backgroundColor = "#ffffff";
                                                e.target.style.transform = "translateY(-2px)";
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.border = "2px solid #e2e8f0";
                                                e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.05)";
                                                e.target.style.backgroundColor = "rgba(255,255,255,0.8)";
                                                e.target.style.transform = "translateY(0)";
                                            }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            background: "var(--elitecons-base)",
                                            color: "#ffffff",
                                            padding: "16px 28px",
                                            border: "none",
                                            borderRadius: "14px",
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            letterSpacing: "0.5px",
                                            cursor: "pointer",
                                            width: "100%",
                                            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                            boxShadow: "0 6px 15px rgba(76,81,191,0.3)",
                                            textTransform: "uppercase"
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.background = "linear-gradient(135deg, #4c51bf, #434190)";
                                            e.target.style.boxShadow = "0 8px 20px rgba(76,81,191,0.5)";
                                            e.target.style.transform = "translateY(-3px) scale(1.02)";
                                            e.target.style.letterSpacing = "1px";
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.background = "var(--elitecons-base)";
                                            e.target.style.boxShadow = "0 6px 15px rgba(76,81,191,0.3)";
                                            e.target.style.transform = "translateY(0) scale(1)";
                                            e.target.style.letterSpacing = "0.5px";
                                        }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            {/* Testimonial Two End */}
        </>
    )
}
