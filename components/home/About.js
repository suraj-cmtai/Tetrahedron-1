'use client'

export default function About() {
    return (
        <>
            {/* About Two Start */}
            <section className="about-two py-10">
                <div className="container mx-auto max-w-[1200px] px-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

                        {/* Text Left */}
                        
                        <div className="w-full md:w-6/12 lg:max-w-[540px] rounded-[10px] shadow-[0_20px_20px_rgba(0,0,0,0.3)] min-h-[500px] p-6">
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">ABOUT US</span>
                                    </div>
                                    <h1 className="section-title__title text-left text-[clamp(32px,4vw,36px)] leading-[1.2] font-bold text-[#0a1c4c]">
                                        Tetrahedron Manufacturing Services Pvt Ltd
                                    </h1>
                                </div>

                                <p className="text-justify mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-[#333] font-normal">
                                    Tetrahedron provides manufacturing optimization consulting services. It is one of India’s
                                    fastest-growing end-to-end solution providers to 280+ manufacturing companies across 20
                                    different industry segments. TMS supports its customers in improving profitability and
                                    sustainability through 3 distinct service verticals.
                                </p>

                                <p className="about-two__text text-justify text-base sm:text-lg md:text-xl leading-relaxed text-[#333] font-normal">
                                    Manufacturing Management Consulting, Automation & Industry 4.0, and Training & Skill Development — by designing, developing, and implementing focused solutions.
                                </p>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="w-full md:w-6/12 lg:max-w-[540px] rounded-[10px] shadow-[0_20px_20px_rgba(0,0,0,0.3)] overflow-hidden">
                            <div className="about-two__img w-full h-full min-h-[300px] md:min-h-[500px]">
                                <img
                                    src="assets/images/resources/about-two-img3.jpg"
                                    alt="Tetrahedron Manufacturing Services" 
                                    className="w-full h-full object-cover rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                                    style={{borderRadius:"20px"}}
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
