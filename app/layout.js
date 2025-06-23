import "@/node_modules/react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { yantramanav } from "@/lib/font";

export const metadata = {
    title: "Tetrahedron",
    description: "Manufacturing Consulting Firm In India",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${yantramanav.variable}`}>
            <head>
                <link rel="stylesheet" href="/assets/css/elitecons.css" />
                <link rel="stylesheet" href="/assets/css/elitecons-responsive.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
