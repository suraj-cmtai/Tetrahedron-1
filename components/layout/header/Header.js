'use client'
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
// Correct the import path for Modal if it's in app/components or similar
// Assuming it might be in app/components/Modal.js or similar:
// import Modal from "@/components/Modal"; // Example correction
import Modal from "../../../app/leadModal"; // Keep if this path is correct relative to Header.js
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";

export default function Header({ scroll, handlePopup, handleMobileMenu }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [modalButtonText, setModalButtonText] = useState("");

    const openContactModal = (buttonText) => {
        setModalButtonText(buttonText);
        setIsContactModalOpen(true);
    };

    const closeContactModal = () => {
        setIsContactModalOpen(false);
        setModalButtonText("");
    };

    return (
        <>
            <header className={`main-header-two ${scroll ? "fixed-header" : ""}`} style={{ zoom: '80%' }}>
                <div className="main-header-two__wrap">
                    <div className="main-header-two__logo">
                        <Link href="/">
                            <img
                                src="/assets/images/Tetrahedron Logo.png"
                                alt="Logo"
                                style={{
                                    width: "70px",
                                    height: "auto",
                                    minHeight: "110px",
                                    minWidth: "110px",
                                }}
                                className="main-header-two__logo-img"
                            />
                        </Link>
                        <style jsx>{`
                            @media (max-width: 1200px) {
                                
                                .main-header-two__logo-img {
                                    width: 60px !important;
                                    position: absolute !important;
                                    top: -12px !important;
                                    height: auto !important;
                                    min-height: 90px !important;
                                    min-width: 90px !important;
                                }
                            }
                        `}</style>
                    </div>

                    <div className="main-header-two__top">
                        <div className="main-header-two__top-inner">
                            <ul className="list-unstyled main-header-two__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-call"></i>
                                    </div>
                                    <div className="text">
                                        <p>
                                            <Link href="tel:918984189814" ref={node => { if (node) node.style.setProperty("font-size", "17px", "important"); }}>+91-8984189814</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-email"></i>
                                    </div>
                                    <div className="text">
                                        <p>
                                            <Link href="mailto:marketing@tetrahedron.in" ref={node => { if (node) node.style.setProperty("font-size", "17px", "important"); }}>
                                                marketing@tetrahedron.in
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <div className="main-header-two__top-right">
                                <div className="main-header-two__social-box">
                                    <div className="main-header-two__social-box-inner">
                                        <h4 className="main-header-two__social-box-title" ref={node => { if (node) node.style.setProperty("font-size", "16px", "important"); }}>
                                            Follow Us On:
                                        </h4>
                                        <div className="main-header-two__social" style={{ height: "24px" }}>
                                            {/* --- FIX HERE: Add actual URLs --- */}
                                            <Link href="https://www.facebook.com/TetrahedronManufacturingServices" target="_blank" rel="noopener noreferrer">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                            <Link href="https://www.instagram.com/tetrahedron_tms/" target="_blank" rel="noopener noreferrer">
                                                <i className="icon-instagram"></i>
                                            </Link>
                                            <Link href="https://x.com/Tetrahe35782523" target="_blank" rel="noopener noreferrer"> {/* Replace with actual URL if icon-Frame is X/Twitter or other */}
                                                <i className="icon-Frame"></i>
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/tetrahedronmanufacturingservicesprivatelimited/" target="_blank" rel="noopener noreferrer">
                                                <i className="icon-link-in"></i>
                                            </Link>
                                            {/* --- END FIX --- */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="main-menu main-menu-two">
                        <div className="main-menu-two__wrapper">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__menu-box-and-btn-box">
                                    <Link
                                        href="#"
                                        className="mobile-nav__toggler"
                                        onClick={handleMobileMenu}
                                    >
                                        <div className="main-menu-two__menu-box">
                                            <div className="main-menu-two__main-menu-box">
                                                <i className="fa fa-bars"></i>
                                                <Menu />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="main-menu-two__btn-box">
                                        <button
                                            onClick={() => openContactModal("Quick Support")}
                                            className="main-menu-two__btn thm-btn"
                                            style={{ backgroundColor: "#ffc001" }}
                                            ref={node => { if (node) node.style.setProperty("font-size", "17px", "important"); }}
                                        >
                                            Quick Support
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
            {isModalOpen && (
                <div className="modal-overlay active">
                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                </div>
            )}
            <ContactFormModal
                open={isContactModalOpen}
                onClose={closeContactModal}
                buttonText={modalButtonText}
            />
        </>
    );
}
