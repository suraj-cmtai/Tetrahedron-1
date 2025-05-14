
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 4500,
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
export default function Banner() {
    return (
        <>

    
	{/*Main Slider Two Start*/}
	<section className="main-slider-two">
		<Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
			<div className="swiper-wrapper">
				<SwiperSlide>
				<div className="swiper-slide">
					<div className="main-slider-two__shape-1"></div>
					<div className="main-slider-two__shape-2"></div>
					<div className="main-slider-two__shape-3"></div>
					<div className="main-slider-two__shape-4 float-bob-x">
						<img src="assets/images/shapes/main-slider-two-shape-4.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-5 float-bob-y">
						<img src="assets/images/shapes/main-slider-two-shape-5.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-6 img-bounce">
						<img src="assets/images/shapes/main-slider-two-shape-6.png" alt=""/>
					</div>
					<div className="main-slider-two__img">
						<img src="assets/images/resources/main-slider-two-img-1-1.jpg" alt=""/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="main-slider-two__content">
									<p className="main-slider-two__sub-title">Management Consulting</p>
									<h2 className="main-slider-two__title">Find the right <br/> manufacturing <br/> consulting for <br/> your business needs
									</h2>
									{/* <p className="main-slider-two__text">Et purus duis sollicitudin dignissim habitant.
										Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus. Urna fusce
										pretium.
									</p> */}
									<div className="main-slider-two__btn-and-call-box">
										<div className="main-slider-two__btn-box">
											<Link href="contact" className="main-slider-two__btn thm-btn">Read
												more<span className="icon-dabble-arrow-right"></span></Link>
										</div>
										<div className="main-slider-two__call">
											<div className="main-slider-two__call-icon">
												<span className="icon-call"></span>
											</div>
											<div className="main-slider-two__call-number">
												<p>Need Help</p>
												<h5><Link href="tel:2085550112">(+91) 8984189814</Link></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className="swiper-slide">
					<div className="main-slider-two__shape-1"></div>
					<div className="main-slider-two__shape-2"></div>
					<div className="main-slider-two__shape-3"></div>
					<div className="main-slider-two__shape-4 float-bob-x">
						<img src="assets/images/shapes/main-slider-two-shape-4.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-5 float-bob-y">
						<img src="assets/images/shapes/main-slider-two-shape-5.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-6 img-bounce">
						<img src="assets/images/shapes/main-slider-two-shape-6.png" alt=""/>
					</div>
					<div className="main-slider-two__img">
					<img src="assets/images/resources/main-slider-two-img-1-2.jpg" alt=""/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="main-slider-two__content">
									<p className="main-slider-two__sub-title">AMR/AGV</p>
									<h2 className="main-slider-two__title">Your Trusted<br/> Partner for<br/> Advanced Mobile <br/> Robotics Solutions
									</h2>
									{/* <p className="main-slider-two__text">Et purus duis sollicitudin dignissim habitant.
										Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus. Urna fusce
										pretium.
									</p> */}
									<div className="main-slider-two__btn-and-call-box">
										<div className="main-slider-two__btn-box">
											<Link href="contact" className="main-slider-two__btn thm-btn">Read
												more<span className="icon-dabble-arrow-right"></span></Link>
										</div>
										<div className="main-slider-two__call">
											<div className="main-slider-two__call-icon">
												<span className="icon-call"></span>
											</div>
											<div className="main-slider-two__call-number">
												<p>Need Help</p>
												<h5><Link href="tel:2085550112">(+91) 8984189814</Link></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className="swiper-slide">
					<div className="main-slider-two__shape-1"></div>
					<div className="main-slider-two__shape-2"></div>
					<div className="main-slider-two__shape-3"></div>
					<div className="main-slider-two__shape-4 float-bob-x">
						<img src="assets/images/shapes/main-slider-two-shape-4.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-5 float-bob-y">
						<img src="assets/images/shapes/main-slider-two-shape-5.png" alt=""/>
					</div>
					<div className="main-slider-two__shape-6 img-bounce">
						<img src="assets/images/shapes/main-slider-two-shape-6.png" alt=""/>
					</div>
					<div className="main-slider-two__img">
					<img src="assets/images/resources/main-slider-two-img-1-3.jpg" alt=""/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="main-slider-two__content">
									<p className="main-slider-two__sub-title">Skill Training</p>
									<h2 className="main-slider-two__title">Upskill Your<br/> Workforce  & <br/>Accelerate Growth<br/> with Our Corporate <br/>Training Programs
									</h2>
									{/* <p className="main-slider-two__text">Et purus duis sollicitudin dignissim habitant.
										Egestas nulla quis <br/> venenatis cras sed eu massa eu faucibus. Urna fusce
										pretium.
									</p> */}
									<div className="main-slider-two__btn-and-call-box">
										<div className="main-slider-two__btn-box">
											<Link href="contact" className="main-slider-two__btn thm-btn">Read
												more<span className="icon-dabble-arrow-right"></span></Link>
										</div>
										<div className="main-slider-two__call">
											<div className="main-slider-two__call-icon">
												<span className="icon-call"></span>
											</div>
											<div className="main-slider-two__call-number">
												<p>Need Help</p>
												<h5><Link href="tel:2085550112">(+91) 8984189814</Link></h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</SwiperSlide>


			</div>

		</Swiper>
	</section>
	{/*Main Slider Two End*/}

        </>
    )
}
