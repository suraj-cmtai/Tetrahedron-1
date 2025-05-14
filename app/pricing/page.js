'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Pricing">
                {/*Pricing Four Start */}
                <section className="pricing-four pricing-page">
                    <div className="container">
                        <div className="row">
                            {/*Pricing Four Single Start*/}
                            <div className="col-xl-4 col-lg-4">
                                <div className="pricing-four__single">
                                    <h4 className="pricing-four__title">Stater Plan</h4>
                                    <div className="pricing-four__price-box">
                                        <p>$19<span>/mo</span></p>
                                    </div>
                                    <div className="pricing-four__points-and-btn">
                                        <ul className="pricing-four__points list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Mistakes To Avoid</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Your Startup</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Knew About Fonts</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Winning Metric for Your Startup</p>
                                            </li>
                                        </ul>
                                        <div className="pricing-four__btn-box">
                                            <Link href="pricing" className="thm-btn pricing-four__btn">Get Now<span
                                                    className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing Four Single End*/}
                            {/*Pricing Four Single Start*/}
                            <div className="col-xl-4 col-lg-4">
                                <div className="pricing-four__single">
                                    <h4 className="pricing-four__title">Basic Plan</h4>
                                    <div className="pricing-four__price-box">
                                        <p>$29<span>/mo</span></p>
                                    </div>
                                    <div className="pricing-four__points-and-btn">
                                        <ul className="pricing-four__points list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Mistakes To Avoid</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Your Startup</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Knew About Fonts</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Winning Metric for Your Startup</p>
                                            </li>
                                        </ul>
                                        <div className="pricing-four__btn-box">
                                            <Link href="pricing" className="thm-btn pricing-four__btn">Get Now<span
                                                    className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing Four Single End*/}
                            {/*Pricing Four Single Start*/}
                            <div className="col-xl-4 col-lg-4">
                                <div className="pricing-four__single">
                                    <h4 className="pricing-four__title">Premium Plan</h4>
                                    <div className="pricing-four__price-box">
                                        <p>$89<span>/mo</span></p>
                                    </div>
                                    <div className="pricing-four__points-and-btn">
                                        <ul className="pricing-four__points list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Mistakes To Avoid</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Your Startup</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Knew About Fonts</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Winning Metric for Your Startup</p>
                                            </li>
                                        </ul>
                                        <div className="pricing-four__btn-box">
                                            <Link href="pricing" className="thm-btn pricing-four__btn">Get Now<span
                                                    className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing Four Single End*/}
                        </div>
                    </div>
                </section>
                {/*Pricing Four End */}

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