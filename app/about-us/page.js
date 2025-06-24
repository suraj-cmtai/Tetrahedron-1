'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
import { useState } from 'react'


export default function About() {
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
      {/* CSS for Font, Spacing, and Responsive Layout Improvements */}
      <style jsx global>{`
        /* 1. Apply Poppins Font Family */
        /* body, h1, h2, h3, h4, h5, h6, p, a, span, li, input, textarea, button {
            font-family: 'Poppins', sans-serif !important;
        } */

        /* 2. Standardized Section Padding */
        .section-padding {
            padding: 80px 0;
        }
        
        /* 3. Helper class for light background sections */
        .section-bg-light {
            background-color: #f7faff;
        }

        /* 4. Custom Feature Box for the services section */
        .feature-box {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
            height: 100%;
            transition: all 0.3s ease;
        }

        .cta-one__title{
          font-size: 32px !important; /* Adjusted for better visibility */
          font-weight: 700 !important; /* Ensure title is bold */
        }

        /* 5. Responsive Adjustments */
        @media (max-width: 991px) {
            .section-title__title {
                font-size: 28px !important; /* Slightly smaller titles on tablets */
            }
            .section-padding {
                padding: 60px 0; /* Reduced padding on tablets */
            }
            .about-one__right, .success-one__left, .faq-one__left {
                margin-top: 30px; /* Add space when columns stack */
            }
            .contact-two__right {
                margin-top: 40px;
            }

        }

        @media (max-width: 767px) {
            .section-title__title {
                font-size: 24px !important; /* Smaller titles on mobile */
            }
            .section-padding {
                padding: 50px 0; /* Further reduced padding on mobile */
            }
            /* Hide desktop-only line breaks */
            .section-title__title br, .cta-one__title br {
                display: none;
            }
            .about-one__right {
                padding-left: 0 !important; /* Remove desktop padding */
            }
            .counter-two__single {
                margin-bottom: 30px; /* Space between stacked counters */
            }
            .cta-one__form {
                flex-direction: column; /* Stack form elements */
                width: 100%;
                max-width: 350px;
                margin: 20px auto 0;
            }
            .cta-one__input-box {
                margin-right: 0;
                margin-bottom: 15px;
            }
        }
    `}</style>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="About Us">
          {/* About Us Section Start */}
          <section className="about-one section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-one__left">
                    <div className="about-one__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                      <img src="assets/images/resources/CICU-Industry.jpg" alt="Manufacturing Industry" style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-one__right" style={{ paddingLeft: "30px" }}>
                    <div className="section-title text-left" style={{ marginBottom: "10px !important" }}>
                      <div className="section-title__tagline-box">
                        <span className="section-title__tagline">ABOUT US</span>
                      </div>
                      <h2 className="section-title__title" style={{ fontSize: "26px !important"}}>
                        Manufacturing Management Consulting
                      </h2>
                    </div>
                    <p className="about-one__text" style={{ lineHeight: "1.5" }}>
                      Tetrahedron provides Manufacturing Consulting Services with different COEs: Manufacturing Excellence, Plant Layout Design, System Standardization (ISO Implementation, Manufacturing Audit), Energy Cost Reduction, and DOJO Implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Section End */}

          {/* Core Services Section Start */}
          <section className="section-padding section-bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="feature-box">
                    <div className="section-title text-left" style={{ marginBottom: "10px !important" }}>
                      <h2 className="section-title__title" style={{ fontSize: "26px !important"}}>
                        Training and Skill Development
                      </h2>
                    </div>
                    <p className="contact-two__text" style={{ lineHeight: "1.5" }}>
                      Tetrahedron provides Manufacturing Consulting Services with different COEs: Manufacturing Excellence, Plant Layout Design, System Standardization (ISO Implementation, Manufacturing Audit), Energy Cost Reduction, and DOJO Implementation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-box">
                    <div className="section-title text-left" style={{ marginBottom: "10px !important" }}>
                      <h2 className="section-title__title" style={{ fontSize: "26px !important"}}>
                        Automation and Industry 4.0
                      </h2>
                    </div>
                    <p className="contact-two__text" style={{ lineHeight: "1.5" }}>
                      Manpower Cost Reduction, Improvement of Cycle Time, Material Handling, Quality Control, Increase the Speed of Innovation, Leading to Faster Design Processes, and More Flexible Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Core Services Section End */}

          {/* Why Choose Us Section Start */}
          <section className="contact-two section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div className="contact-two__left" style={{ textAlign: "justify" }}>
                    <div className="section-title ">
                      <h2 className="section-title__title" style={{ fontSize: "26px !important", marginBottom: "10px !important" }}>Why Choose Us</h2>
                    </div>
                    <p className="contact-two__text ">
                      We believe in the best solution at the most competitive price. We are into continuous improvement and innovation to help clients experience the most effective solution. We practice inclusive growth of the entire value chain to make the solution sustainable. Our post-delivery service is to empower our customers and to be their first choice.
                    </p>
                    <p className="contact-two__text ">
                      We promise a 10% improvement in quality, productivity, and profit margin in 10-12 weeks.
                    </p>
                    <p className="contact-two__text ">
                      We have a working team from premier management schools such as IIM Calcutta and top technical institutes such as IIT Delhi and IIT Roorkee, enabling clients to become high-performance businesses and build a long-term relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Why Choose Us Section End */}

          {/* Our Core Values (Accordion) Start */}
          <section className="faq-one section-padding section-bg-light">
            <div className="container">
              <div className="section-title mb-5" style={{ textAlign: "justify" }}>
                <h2 className="section-title__title" style={{ fontSize: "26px !important" }}>Our Core Values</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="faq-one__right">
                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                      <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                          <div className="accrodion-title"><h4>Excellence</h4></div>
                          <div className="accrodion-content"><div className="inner"><p>We provide our client with best-in-class solutions. We develop problem-solving capabilities in each individual of our team to help clients experience the change.</p></div></div>
                      </div>
                      <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                          <div className="accrodion-title"><h4>Satisfaction</h4></div>
                          <div className="accrodion-content"><div className="inner"><p>We work with the client to map the pain points to mitigate the real cause of the problem or the area of improvement to be a business leader. We balance between task and relationship attitude.</p></div></div>
                      </div>
                      <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                          <div className="accrodion-title"><h4>Deliverable</h4></div>
                          <div className="accrodion-content"><div className="inner"><p>We make the client understand and track the progress of the implementation by qualifying the solution into quantifiable parameters, and we always deliver on those parameters in time.</p></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="faq-one__right">
                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                       <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                           <div className="accrodion-title"><h4>Relationship Building</h4></div>
                           <div className="accrodion-content"><div className="inner"><p>Our service aims to build a long-term relationship with the client, providing in-time service, execution, post-delivery services, and identifying new areas of improvement.</p></div></div>
                       </div>
                       <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                           <div className="accrodion-title"><h4>Execution</h4></div>
                           <div className="accrodion-content"><div className="inner"><p>We provide end-to-end solutions to our clients – stalwarts working on the project, practicing their expertise. We are a result and future-oriented team, which enables us to deliver successful future-proofed services and support to our clients.</p></div></div>
                       </div>
                       <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                           <div className="accrodion-title"><h4>Expertise</h4></div>
                           <div className="accrodion-content"><div className="inner"><p>We have expertise in 16 different industries to serve our clients. Our team always endeavours to keep up with the changes in technology and happenings in the world to serve the client better.</p></div></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Core Values (Accordion) End */}

          {/* Counter Two Start */}
          <section className="counter-two">
            <div className="counter-two__bg-box">
              <div className="counter-two__bg" style={{ backgroundImage: "url(assets/images/resources/j.jpg" }}></div>
            </div>
            <div className="container">
              <div className="counter-two__top">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Best roof repairing</span>
                  </div>
                  <h2 className="section-title__title" style={{ fontSize: "26px !important" }}>
                    Crafting Structures That <br /> Stand the Test of Time
                  </h2>
                </div>
                <p className="counter-two__top-text">
                  We are dedicated to building structures that last, using the highest quality materials and expert craftsmanship to ensure durability and excellence.
                </p>
              </div>
              <div className="counter-two__bottom" style={{ marginTop: '40px' }}>
                <div className="row">
                  <div className="col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="counter-two__single">
                      <div className="counter-two__icon"><span className="icon-settings"></span></div>
                      <div className="counter-two__count count-box"><CounterUp end={200} /><span className="counter-two__plus">+</span></div>
                      <p className="counter-two__count-text">Team Members</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                    <div className="counter-two__single">
                      <div className="counter-two__icon"><span className="icon-paint"></span></div>
                      <div className="counter-two__count count-box"><CounterUp end={20} /><span className="counter-two__plus">+</span></div>
                      <p className="counter-two__count-text">Years of Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                    <div className="counter-two__single">
                      <div className="counter-two__icon"><span className="icon-mechanic-2"></span></div>
                      <div className="counter-two__count count-box"><CounterUp end={10} /><span className="counter-two__plus">k+</span></div>
                      <p className="counter-two__count-text">Completed Projects</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                    <div className="counter-two__single">
                      <div className="counter-two__icon"><span className="icon-analytics"></span></div>
                      <div className="counter-two__count count-box"><CounterUp end={900} /><span className="counter-two__plus">+</span></div>
                      <p className="counter-two__count-text">Client Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Counter Two End */}
          
          {/*Contact Two Start */}
          <section className="contact-two contact-four section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-two__left">
                    <div className="section-title text-left">
                      <div className="section-title__tagline-box"><span className="section-title__tagline">Talk to Us</span></div>
                      <h2 className="section-title__title" style={{ fontSize: "26px !important" }}>Crafting Perfection from <br /> Foundation to Finish</h2>
                    </div>
                    <p className="contact-two__text">We handle every detail with precision. Contact us today to discuss your project and see how we can bring your vision to life.</p>
                    <div className="contact-two__call-box">
                      <div className="icon"><span className="icon-call"></span></div>
                      <div className="content">
                        <span>Need help?</span><p><Link href="tel:8984189814">+91-8984189814</Link></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-two__right">
                    <form action="assets/inc/sendemail.php" className="contact-two__form contact-form-validated">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="contact-two__input-box"><input type="text" placeholder="Your Name" name="name" /></div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-two__input-box"><input type="email" placeholder="Your E-mail" name="email" /></div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-two__input-box"><input type="text" placeholder="Your Phone" name="phone" /></div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-two__input-box"><input type="text" placeholder="Your Location" name="location" /></div>
                        </div>
                        <div className="col-12">
                          <div className="contact-two__input-box text-message-box"><textarea name="message" placeholder="Your Message"></textarea></div>
                          <div className="contact-two__btn-box">
                            <button type="submit" className="thm-btn contact-two__btn">Send us<span className="icon-dabble-arrow-right"></span></button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="result"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Contact Two End */}

          {/* Success One Start */}
          <section className="success-one section-padding">
            <div className="success-one__shape-1">
              <img src="assets/images/shapes/success-one-shape-1.png" alt="" />
            </div>
            <div className="container">
              <div className="row align-items-center" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start !important', width: '100% !important', margin: '0 !important', padding: '0 !important'}}>
                <div className="col-lg-6" style={{display: 'flex', alignItems: 'flex-start !important', justifyContent: 'flex-start !important', width: '50% !important', maxWidth: '50% !important', padding: '0 !important', margin: '0 !important'}}>
                  <div className="" style={{width: '100% !important', display: 'flex', justifyContent: 'flex-start !important', alignItems: 'flex-start !important', marginLeft: '0 !important', paddingLeft: '0 !important'}}>
                    <div className="" style={{width: '100% !important', maxWidth: '400px !important', marginLeft: '0 !important'}}>
                      <img src="assets/images/resources/g.jpg" alt="Construction Success" style={{ maxWidth: '100% !important', height: 'auto !important', borderRadius: '8px !important', display: 'block !important', objectFit: 'cover !important', width: '100% !important', minWidth: '220px !important', marginLeft: '60px !important', marginTop: '140px !important', transform: 'scale(1.5)' }} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start !important', alignItems: 'flex-start !important', width: '50% !important', maxWidth: '50% !important', padding: '0 16px !important', margin: '0 !important'}}>
                  <div className="success-one__left" style={{width: '100% !important', display: 'flex', flexDirection: 'column', alignItems: 'flex-start !important', marginTop: '0 !important'}}>
                    <div style={{ background: '#eb7434', color: 'white', borderRadius: '0.5rem', padding: '24px 24px 18px 24px', marginBottom: '20px', maxWidth: '340px', width: '100% !important', boxSizing: 'border-box', fontFamily: 'Poppins, sans-serif !important', marginTop: '0 !important' }}>
                      <div style={{ fontWeight: 700, fontSize: '28px !important', lineHeight: 1.1, marginBottom: '8px' }}>100%</div>
                      <div style={{ fontSize: '16px !important', fontWeight: 500, marginBottom: '12px' }}>Success Rate</div>
                      <hr style={{ border: '1px solid #fff', opacity: 0.3, margin: '12px 0' }} />
                      <div style={{ fontWeight: 700, fontSize: '22px !important', lineHeight: 1.1, marginBottom: '8px' }}>250+</div>
                      <div style={{ fontSize: '16px !important', fontWeight: 500 }}>Happy Clients</div>
                    </div>
                    <div className="section-title text-left" style={{width: '100% !important', marginTop: '0 !important'}}>
                      <div className="section-title__tagline-box"><span className="section-title__tagline" style={{fontSize: "14px !important"}}>Best Services</span></div>
                      <h2 className="section-title__title" style={{ fontSize: "22px !important", margin: '0 0 12px 0', whiteSpace: 'nowrap', width: '100% !important', overflow: 'hidden', textOverflow: 'ellipsis' }}>Creating Innovative and Sustainable Places</h2>
                    </div>
                    <p className="success-one__text" style={{fontSize: "15px !important", margin: '0 0 12px 0', width: '100% !important'}}>We specialize in building environments that are not only modern and innovative but also sustainable and built to last. Our commitment is to excellence and forward-thinking design.</p>
                    <ul className="list-unstyled success-one__points" style={{margin: 0, padding: 0, width: '100% !important'}}>
                      <li style={{fontSize: "14px !important", marginBottom: '6px'}}>
                        <div className="success-one__points-icon" style={{marginRight: '6px'}}><span className="icon-constructo-pro"></span></div>
                        <p className="success-one__points-text" style={{fontSize: "14px !important", display: 'inline'}}><Link href="/service-details" style={{fontSize: "14px !important"}}>Master Craft Construction</Link></p>
                      </li>
                      <li style={{fontSize: "14px !important"}}>
                        <div className="success-one__points-icon" style={{marginRight: '6px'}}><span className="icon-proconstruct"></span></div>
                        <p className="success-one__points-text" style={{fontSize: "14px !important", display: 'inline'}}><Link href="/service-details" style={{fontSize: "14px !important"}}>Quality Construction Co</Link></p>
                      </li>
                    </ul>
                    <div className="success-one__btn-box" style={{marginTop: '12px'}}>
                      <Link href="/about-us" className="success-one__btn thm-btn" style={{fontSize: "14px !important"}}>Read more<span className="icon-dabble-arrow-right"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Success One End */}

          {/*FAQ One Start*/}
          <section className="faq-one faq-five section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="faq-one__left">
                    <div className="section-title text-left">
                      <div className="section-title__tagline-box"><span className="section-title__tagline">SOME FAQs</span></div>
                      <h2 className="section-title__title" style={{ fontSize: "26px !important" }}>Creating Structures That <br /> Stand the Test of Time</h2>
                    </div>
                    <p className="faq-one__text">Here are answers to some of the most common questions we receive. If you have other questions, feel free to get in touch with our team.</p>
                    <div className="faq-one__btn-box">
                      <Link href="/contact" className="faq-one__btn thm-btn">Learn more<span className="icon-dabble-arrow-right"></span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="faq-one__right">
                     <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-3">
                        <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                            <div className="accrodion-title"><h4>What is construction?</h4></div>
                            <div className="accrodion-content"><div className="inner"><p>Construction is the process of creating and building infrastructure or a facility. It involves planning, designing, financing, and building structures.</p></div></div>
                        </div>
                        <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                            <div className="accrodion-title"><h4>How long does a project typically take?</h4></div>
                            <div className="accrodion-content"><div className="inner"><p>The duration of a project depends on its scope, size, and complexity. We provide a detailed timeline after the initial consultation and planning phase.</p></div></div>
                        </div>
                        <div className={isActive.key == 9 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(9)}>
                            <div className="accrodion-title"><h4>What different types of construction projects do you handle?</h4></div>
                            <div className="accrodion-content"><div className="inner"><p>We handle a wide range of projects, including residential, commercial, and industrial construction, as well as renovations and remodeling.</p></div></div>
                        </div>
                        <div className={isActive.key == 10 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(10)}>
                            <div className="accrodion-title"><h4>What is the role of a construction manager?</h4></div>
                            <div className="accrodion-content"><div className="inner"><p>A construction manager oversees the planning, coordination, and execution of a project, ensuring it is completed on time, within budget, and to the required quality standards.</p></div></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*FAQ One End*/}

          {/*CTA One Start*/}
          <section className="cta-one" style={{ height: "auto", padding: "60px 0" }}>
            <div className="container" >
              <div className="cta-one__inner">
                <div className="cta-one__shape-1"></div>
                <div className="cta-one__img">
                  <img src="assets/images/case-studies/CS2.jpg" alt="Inspiring Digital Experience" style={{ maxWidth: "450px", minHeight: "375px", borderRadius: "10px" }} />
                </div>
                <h3 className="cta-one__title" style={{ fontSize: "45px !important", fontWeight: "700 !important", marginBottom: "20px" }}>
                  Crafting Digital Experiences <br /> That Inspire
                </h3>
                <div className="cta-one__from-box">
                  <form className="cta-one__form">
                    <div className="cta-one__input-box">
                      <input type="email" placeholder="Your E-mail" name="email" />
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
    );
}