import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/*Site Footer Two Start*/}
      <footer className="site-footer-two">
        <div
          className="site-footer-two__shape-1 img-bounce"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-two-shape-1.png",
          }}
        ></div>
        <div className="site-footer-two__top">
          <div className="container">
            <div className="site-footer-two__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__about">
                    <div className="footer-widget-two__logo">
                      <Link href="/">
                        <img
                          src="assets/images/resources/footer-logo-2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <p className="footer-widget-two__about-text">
                      Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is
                      simply
                    </p>
                    <div className="site-footer-two__social">
                      <Link href="#">
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link href="#">
                        <i className="icon-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="icon-link-in"></i>
                      </Link>
                      <Link href="#">
                        <i className="icon-pinterest"></i>
                      </Link>
                    </div>
                    <form className="footer-widget-two__about-form mc-form">
                      <div className="footer-widget-two__about-form-input-box">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          name="EMAIL"
                        />
                        <button
                          type="submit"
                          className="footer-widget-two__about-btn"
                        >
                          <span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__service">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Expertise</h3>
                    </div>
                    <ul className="footer-widget-two__service-list list-unstyled">
                      <li>
                        <Link href="service-details" style={{flexWrap:"inherit"}}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Consulting Services
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details" style={{flexWrap:"inherit"}}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Corporate Training
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details" style={{flexWrap:"inherit"}}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details" style={{flexWrap:"inherit"}}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Sitemap
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details" style={{flexWrap:"inherit"}}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          DMCA PROTECTED
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__links">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Quick Links</h3>
                    </div>
                    <ul className="footer-widget-two__service-list list-unstyled">
                      <li>
                        <Link href="">
                          {" "}
                          <span className="icon-angle-left"></span> Home
                        </Link>
                      </li>
                      <li>
                        <Link href="about">
                          {" "}
                          <span className="icon-angle-left"></span> About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="contact">
                          {" "}
                          <span className="icon-angle-left"></span> Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="gallery">
                          {" "}
                          <span className="icon-angle-left"></span> Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="resources">
                          {" "}
                          <span className="icon-angle-left"></span> Resources
                          Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__contact">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title">Contact Us</h3>
                    </div>
                    <ul className="footer-widget-two__contact-list list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            <Link href="mailto:marketing@tetrahedron.in">
                              marketing@tetrahedron.in
                            </Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            <Link href="tel:918984189814">+91-8984189814</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            Main Office:- 204, Block A, Ecotech III, Noida,
                            Khera Choganpur, Uttar Pradesh 201306, India
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p>
                            Regional Office (East):- Unit 630, Located at DLF
                            Cybercity, Infocity Park, Patia – 751024,
                            Bhubaneswar, Odisha (India)
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="site-footer-two__bottom-inner">
              <p className="site-footer-two__bottom-text">
                Copyright© 2025, Tetrahedron Manufacturing Services Pvt. Ltd.
                All Rights Reserved.
              </p>
              <ul className="list-unstyled site-footer-two__bottom-menu">
                <li>
                  <Link href="about">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}
