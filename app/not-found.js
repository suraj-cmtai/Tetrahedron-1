"use client";
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
          <section className="cta-one"
            style={{ height: "auto", padding: "60px 0", boxSizing: 'border-box' }}
            ref={node => { if (node) node.style.setProperty("width", "100%", "important"); }}
          >
            <div className="container"
                style={{margin: '0 auto', gap: '32px'}}
                ref={node => { if (node) {
                    node.style.setProperty('width', '100%', 'important');
                    node.style.setProperty('max-width', '1200px', 'important');
                    node.style.setProperty('display', 'flex', 'important');
                    node.style.setProperty('align-items', 'center', 'important');
                    node.style.setProperty('justify-content', 'space-between', 'important');
                    node.style.setProperty('flex-direction', 'row', 'important');
                }}}
            >
              {/* Left Side: Text and Form */}
              <div
                style={{ flex: 1, boxSizing: 'border-box' }}
                ref={node => { if (node) {
                    node.style.setProperty('display', 'flex', 'important');
                    node.style.setProperty('flex-direction', 'column', 'important');
                    node.style.setProperty('justify-content', 'center', 'important');
                    node.style.setProperty('align-items', 'flex-start', 'important');
                    node.style.setProperty('height', '100%', 'important');
                    node.style.setProperty('min-height', '400px', 'important');
                    node.style.setProperty('padding', '0 0 0 24px', 'important');
                }}}
              >
              <h3 className="cta-one__title"
                style={{ marginBottom: "20px" }}
                ref={node => {
                  if (node) {
                    node.style.setProperty("font-size", "36px", "important");
                    node.style.setProperty("font-weight", "700", "important");
                    node.style.setProperty("width", "200%", "important");
                  }
                }}
              >
                  Crafting Digital Experiences That Inspire
                </h3>
                <div className="cta-one__from-box">
                  <form className="cta-one__form">
                    <div className="cta-one__input-box">
                      <input type="email" placeholder="Your E-mail" name="email" />
                    </div>
                    <button type="submit" className="cta-one__btn thm-btn" style={{width:"60%"}}>Subscribe Us</button>
                  </form>
                </div>
              </div>
              {/* Right Side: Images */}
              <div
                style={{ flex: 1, boxSizing: 'border-box' }}
                ref={node => { if (node) {
                    node.style.setProperty('display', 'flex', 'important');
                    node.style.setProperty('flex-direction', 'column', 'important');
                    node.style.setProperty('align-items', 'flex-end', 'important');
                    node.style.setProperty('justify-content', 'center', 'important');
                    node.style.setProperty('height', '80%', 'important');
                    node.style.setProperty('gap', '16px', 'important');
                    node.style.setProperty('padding-right', '24px', 'important');
                }}}
              >
                <img src="/assets/images/case-studies/CS2.jpg" alt="Inspiring Digital Experience"
                  style={{ marginBottom: '8px', zIndex: 2 }}
                  ref={node => {
                    if (node) {
                      node.style.setProperty("max-width", "350px", "important");
                      node.style.setProperty("width", "90%", "important");
                      node.style.setProperty("min-height", "150px", "important");
                      node.style.setProperty("max-height", "40%", "important");
                      node.style.setProperty("border-radius", "10px", "important");
                      node.style.setProperty("object-fit", "cover", "important");
                      node.style.setProperty("background", "none", "important");
                    }
                  }}
                />
                <img src="/assets/images/case-studies/CS6.jpg" alt="Inspiring Digital Experience 2"
                  style={{ zIndex: 2 }}
                  ref={node => {
                    if (node) {
                      node.style.setProperty("max-width", "350px", "important");
                      node.style.setProperty("width", "90%", "important");
                      node.style.setProperty("min-height", "150px", "important");
                      node.style.setProperty("max-height", "40%", "important");
                      node.style.setProperty("border-radius", "10px", "important");
                      node.style.setProperty("object-fit", "cover", "important");
                      node.style.setProperty("background", "none", "important");
                    }
                  }}
                />
              </div>
            </div>
          </section>
          {/*CTA One End*/}

            </Layout>

        </>
    )
}
