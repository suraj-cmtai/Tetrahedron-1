'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    
    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Services">
        {/*Services Page Start*/}
        <section className="services-page">
            <div className="container">
                <div className="row">
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-1.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Elite Structures</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-2.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pixel Craft</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-1.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pro Build
                                        Innovations</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-4.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pixel Craft</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-5.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pro Build
                                        Innovations</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-6.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Elite Structures</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                </div>
            </div>
        </section>
        {/*Services Page End*/}

        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__shape-1">
                        <img src="assets/images/shapes/cta-one-shape-1.png" alt=""/>
                    </div>
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta-one-img.png" alt=""/>
                    </div>
                    <h3 className="cta-one__title">Craftin digital experiences<br/> With that inspire</h3>
                    <div className="cta-one__from-box">
                        <form className="cta-one__form">
                            <div className="cta-one__input-box">
                                <input type="email" placeholder="Your E-mail" name="email"/>
                            </div>
                            <button type="submit" className="cta-one__btn thm-btn">Subscribe Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
            
            </Layout>
        </>
    )
}