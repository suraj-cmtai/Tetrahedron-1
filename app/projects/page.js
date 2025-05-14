'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {

    
    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Project">      
            {/*Project Page Start */}
            <section className="projects-page">
                <div className="container">
                    <div className="row">
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Build
                                                Construction</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-1.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Precision
                                                Craftsmen</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-2.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Hammer
                                                Construction</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-3.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">MasterCraft
                                                Construction</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-4.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">BuildTech
                                                Solutions</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-5.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-6.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Renovate Right</Link>
                                        </h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-6.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                    </div>
                </div>
            </section>
            {/*Project Page End */}

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