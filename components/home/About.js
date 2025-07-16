'use client'

export default function About() {
    return (
        <>
            {/* About Two Start */}
            <section className="about-two py-10 w-100" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                <div className="mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

                        {/* Text Left */}
                        <div className="w-full rounded-[10px] shadow-[0_20px_20px_rgba(0,0,0,0.3)] min-h-[500px] p-6">
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        {/* Will be 24pt from global styles + Poppins font */}
                                        <span 
                                            className="section-title__tagline text-[#0066cc] font-semibold"
                                            style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                                        >
                                            ABOUT US
                                        </span>
                                    </div>
                                    {/* Will be 32pt from global styles + Poppins font */}
                                    <h1 
                                        className="section-title__title text-left font-bold text-[#0a1c4c] mt-2 mb-4"
                                        style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                                    >
                                        Tetrahedron Manufacturing Services Pvt Ltd
                                    </h1>
                                </div>

                                {/* Body text with Poppins font and global sizing */}
                                <p 
                                    className="section-text text-justify mb-4 text-[#333] font-normal"
                                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                                >
                                    Tetrahedron provides manufacturing optimization consulting services. It is one of India's
                                    fastest-growing end-to-end solution providers to 280+ manufacturing companies across 20
                                    different industry segments. TMS supports its customers in improving profitability and
                                    sustainability through 3 distinct service verticals.
                                </p>

                                <p 
                                    className="section-text about-two__text text-justify text-[#333] font-normal"
                                    style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}
                                >
                                    Manufacturing Management Consulting, Automation & Industry 4.0, and Training & Skill Development — by designing, developing, and implementing focused solutions.
                                </p>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div
                            className="w-full md:w-6/12 lg:max-w-[540px] rounded-[10px] shadow-[0_20px_20px_rgba(0,0,0,0.3)] overflow-hidden"
                        >
                            <div
                                className="about-two__img w-full h-full min-h-[300px] md:min-h-[500px]"
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <img
                                    src="assets/images/resources/about-two-img3.jpg"
                                    alt="Tetrahedron Manufacturing Services"
                                    className="object-cover rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                                    ref={node => {
                                        if (node) {
                                            // Always set border radius
                                            node.style.setProperty("border-radius", "20px", "important");
                                            // Responsive width/height for mobile/desktop
                                            const setResponsiveImg = () => {
                                                if (window.innerWidth < 768) {
                                                    node.style.setProperty("width", "100%", "important");
                                                    node.style.setProperty("height", "100%", "important");
                                                    node.style.setProperty("maxWidth", "100%", "important");
                                                    node.style.setProperty("maxHeight", "100%", "important");
                                                } else {
                                                    node.style.setProperty("width", "60%", "important");
                                                    node.style.setProperty("height", "40%", "important");
                                                    node.style.setProperty("maxWidth", "", "important");
                                                    node.style.setProperty("maxHeight", "", "important");
                                                }
                                            };
                                            setResponsiveImg();
                                            window.addEventListener("resize", setResponsiveImg);
                                        }
                                    }}
                                    style={{
                                        borderRadius: "20px",
                                        width: "60%",
                                        height: "40%",
                                        objectFit: "cover"
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