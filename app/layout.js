import "@/node_modules/react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap", // Optional: improves loading performance
});

export const metadata = {
    title: "Tetrahedron",
    description: "Manufacturing Consulting Firm In India",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.variable} >
            <head>
                <link rel="stylesheet" href="/assets/css/elitecons.css" />
                <link rel="stylesheet" href="/assets/css/elitecons-responsive.css" />
                <style dangerouslySetInnerHTML={{
                    __html: `
                        /* Global Typography Settings */
                        :root {
                            --tagline-size: 32px;
                            --heading-size: 43px;
                            --body-text-size: 18px;
                            --small-text-size: 14px;
                        }
                        
                        /* About section specific font sizes */
                        .about-two .section-title__tagline {
                            font-size: 32px !important;
                        }
                        
                        .about-two .section-title__title {
                            font-size: 43px !important;
                        }
                        
                        /* Global tagline styling - applies to all components */
                        .section-title__tagline,
                        .tagline,
                        [class*="tagline"] {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                            font-size: var(--tagline-size) !important;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                            line-height: 1.2 !important;
                        }
                        
                        /* Global heading styling - applies to all components */
                        .section-title__title,
                        .main-heading,
                        h1.section-title,
                        h2.section-title,
                        [class*="title"]:not([class*="sub-title"]) {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                            font-size: var(--body-text-size) !important;
                            font-weight: 700;
                            line-height: 1.1 !important;
                        }
                        
                        /* Services section specific styling */
                        .services-four__title,
                        .services-four__title a {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                            font-size: 20px !important;
                            font-weight: 700 !important;
                            line-height: 1.1 !important;
                        }
                        
                        .services-four__text {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                            font-size: 16px !important;
                            line-height: 1.5 !important;
                        }
                        
                        /* Responsive adjustments for services */
                        @media (max-width: 768px) {
                            .services-four__title,
                            .services-four__title a {
                                font-size: 18px !important;
                            }
                            
                            .services-four__text {
                                font-size: 14px !important;
                            }
                        }
                        
                        @media (max-width: 480px) {
                            .services-four__title,
                            .services-four__title a {
                                font-size: 16px !important;
                            }
                            
                            .services-four__text {
                                font-size: 13px !important;
                            }
                        }
                        
                        /* Global body text styling */
                        .section-text,
                        .content-text,
                        p:not(.section-title__tagline):not([class*="tagline"]) {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                            font-size: var(--body-text-size);
                            line-height: 1.6;
                        }
                        
                        /* Global small text styling */
                        .small-text,
                        .caption,
                        [class*="caption"] {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                            font-size: var(--small-text-size);
                            line-height: 1.5;
                        }
                        
                        /* Global section container styling */
                        section,
                        .section,
                        [class*="section"] {
                            font-family: var(--font-poppins), Poppins, sans-serif !important;
                        }
                        
                        /* Responsive adjustments */
                        @media (max-width: 768px) {
                            :root {
                                --tagline-size: 24px;
                                --heading-size: 32px;
                                --body-text-size: 16px;
                            }
                            
                            .about-two .section-title__tagline {
                                font-size: 27px !important;
                            }
                            
                            .about-two .section-title__title {
                                font-size: 37px !important;
                            }
                        }
                        
                        @media (max-width: 480px) {
                            :root {
                                --tagline-size: 24px;
                                --heading-size: 32px;
                                --body-text-size: 15px;
                            }
                            
                            .about-two .section-title__tagline {
                                font-size: 24px !important;
                            }
                            
                            .about-two .section-title__title {
                                font-size: 32px !important;
                            }
                        }
                    `
                }} />
            </head>
            <body className={poppins.className} style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', lineHeight: '1.6' }}>
                {children}
            </body>
        </html>
    );
}