'use client'

export default function About() {
    return (
        <>
            {/* About Two Start */}
            <section className="about-two py-10">
                <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "20px",
                        }}
                    >
                        {/* Text Left */}
                        <div
                            style={{
                                width: "510px",
                                borderRadius: "10px",
                                boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.3)",
                                flex: "1 1 500px",
                                minHeight:"500px",
                                padding:"30px 30px",
                                marginRight:"-19px"
                            }}
                        >
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">ABOUT US</span>
                                    </div>
                                    <h1
                                        className="section-title__title"
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            textAlign: "left",
                                            fontSize: "clamp(32px, 4vw, 36px)",
                                            lineHeight: "1.2"
                                        }}
                                    >
                                        Tetrahedron Manufacturing Services Pvt Ltd
                                    </h1>
                                </div>
                                <p
                                    className="about-two__text"
                                    style={{
                                        textAlign: "justify",
                                        marginBottom: "16px",
                                        fontSize: "20px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        fontWeight: "400"
                                    }}
                                >
                                    Tetrahedron provides manufacturing optimization consulting services. It is one of India’s fastest-growing end-to-end solution providers to 280+ manufacturing companies across 20 different industry segments. TMS supports its customers in improving profitability and sustainability through 3 distinct service verticals.
                                </p>

                                <p
                                    className="about-two__text"
                                    style={{
                                        textAlign: "justify",
                                        fontSize: "20px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        fontWeight: "400"
                                    }}
                                >
                                    Manufacturing Management Consulting, Automation & Industry 4.0, and Training & Skill Development — by designing, developing, and implementing focused solutions.
                                </p>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.3)",
                                flex: "1 1 600px",
                                maxWidth:"540px"
                            }}
                        >
                            <div className="about-two__img" >
                                <img
                                    src="assets/images/resources/about-two-img3.jpg"
                                    alt=""
                                    style={{
                                        borderRadius: "8px",
                                        height: "528px",
                                        width: "560px",
                                        objectFit: "cover",
                                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Two End */}
        </>
    )
}
