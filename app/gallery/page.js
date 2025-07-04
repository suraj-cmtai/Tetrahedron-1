'use client';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Gallery">
        {/*Gallery Page Start*/}
        <section className="gallery-page">
            <div className="container">
                <div className="masonary-layout">
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture6.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-page-1-1.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture6.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-page-1-2.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture7.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture7.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Six-SIgma-Training.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Six-SIgma-Training.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/training-pic-768x432.jpg" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture2-1_bb72b4a606c59c6564021df7232071e1.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/training-pic.jpg" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture2-1.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture5.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture4.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/2-7.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture6.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture7.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Six-SIgma-Training.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                </div>
            </div>
        </section>
        {/*Gallery Page End*/}

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
              {/* Right Side: Image */}
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
                <img src="/images/Capture2-1_bb72b4a606c59c6564021df7232071e1.png" alt="Gallery" 
                  style={{ zIndex: 2, maxWidth: "350px", width: "90%", minHeight: "150px", maxHeight: "40%", borderRadius: "10px", objectFit: "cover", background: "none" }}
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