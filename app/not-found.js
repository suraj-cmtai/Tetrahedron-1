import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="404 Error">
            
                {/*Error Page Start*/}
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__title-box">
                                        <h2 className="error-page__title">404</h2>
                                    </div>
                                    <h3 className="error-page__tagline">Sorry we can't find that page!</h3>
                                    <p className="error-page__text">The page you are looking for was never existed.</p>
                                    <form className="error-page__form">
                                        <div className="error-page__form-input">
                                            <input type="search" placeholder="Search here"/>
                                            <button type="submit"><i className="icon-search"></i></button>
                                        </div>
                                    </form>
                                    <Link href="/" className="thm-btn error-page__btn">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Error Page End*/}

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
