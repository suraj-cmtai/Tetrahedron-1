'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'


export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Faq">
                {/*Faq Page Start*/}
                <section className="faq-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="faq-page__left">
                                    <div className="faq-one__right">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What is construction?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How long does project typically take?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What different of construction projects?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>What is the role of a construction manager?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="faq-page__right">
                                    <div className="faq-one__right">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                            <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                                <div className="accrodion-title">
                                                    <h4>What is construction?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                                <div className="accrodion-title">
                                                    <h4>How long does project typically take?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                                <div className="accrodion-title">
                                                    <h4>What different of construction projects?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                                <div className="accrodion-title">
                                                    <h4>What is the role of a construction manager?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Faq Page End*/}

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