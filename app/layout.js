import "@/node_modules/react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./global.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata = {
    title: "Tetrahedron",
    description: "Manufacturing Consulting Firm In India",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.variable}>
            <head>
                <link rel="stylesheet" href="/assets/css/elitecons.css" />
                <link rel="stylesheet" href="/assets/css/elitecons-responsive.css" />
            </head>
            <body className={poppins.className} style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', lineHeight: '1.6' }}>
                {children}
            </body>
        </html>
    );
}
