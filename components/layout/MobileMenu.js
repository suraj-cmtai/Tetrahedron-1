'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ handleMobileMenu }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            // Close the menu if the same item is clicked again
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            // Close other open menus when a new one is clicked
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    

    const handleLinkClick = () => {
        handleMobileMenu(); // Close the mobile menu
    };

    return (
        <div className="mobile-nav__wrapper">
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="fa fa-times"></i>
                </span>

                {/* <div className="logo-box">
                    <Link href="/" aria-label="logo image">
                        <img src="assets/images/resources/logo.png" width="50" alt="Logo" />
                    </Link>
                </div> */}

                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>

                        {/* About Menu */}
                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(1)}>About Us</Link>
                            <button onClick={() => handleToggle(1)} className={isActive.key == 1 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 1 ? "block" : "none" }}>
                                <li><Link href="/about-us/" onClick={handleLinkClick}>Who We Are</Link></li>
                                <li><Link href="/our-team/" onClick={handleLinkClick}>Our Team</Link></li>
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(1, "sub1")}>Policies</Link>
                                    <button onClick={() => handleToggle(1, "sub1")} className={isActive.key == 1 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}>
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 1 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="/privacy-policy/" onClick={handleLinkClick}>Privacy Policy</Link></li>
                                        <li><Link href="/terms-of-service/" onClick={handleLinkClick}>Terms of Service</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* Consulting Menu */}
                        <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(2)}>Consulting</Link>
                            <button onClick={() => handleToggle(2)} className={isActive.key == 2 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 2 ? "block" : "none" }}>
                                {/* Manufacturing Excellence Services */}
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(2, "sub1")}>Manufacturing Excellence Services</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub1")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="/manufacturing-operational-excellence-consulting/" onClick={handleLinkClick}>Operational Excellence Consulting</Link></li>
                                        <li><Link href="/tpm-consultants/" onClick={handleLinkClick}>TPM Consulting</Link></li>
                                        <li><Link href="/tqm-consultants/" onClick={handleLinkClick}>TQM Consulting</Link></li>
                                        <li><Link href="/lean-manufacturing-consultants/" onClick={handleLinkClick}>Lean Manufacturing Consulting</Link></li>
                                        <li><Link href="/manufacturing-excellence/" onClick={handleLinkClick}>Manufacturing Cost Reduction</Link></li>
                                        <li><Link href="/visual-management-consultants/" onClick={handleLinkClick}>Visual Management Consulting</Link></li>
                                    </ul>
                                </li>
                                {/* Plant Layout Design */}
                                <li><Link href="/plant-layout-design/" onClick={handleLinkClick}>Plant Layout Design</Link></li>
                                {/* Dojo Training Center */}
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(2, "sub2")}>Dojo Training Center</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub2")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub2" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub2" ? "block" : "none" }}>
                                        <li><Link href="/dojo-training-center/" onClick={handleLinkClick}>DOJO Training Center | DOJO Centre | DOJO Simulations</Link></li>
                                        <li><Link href="/dojo-2-0/" onClick={handleLinkClick}>DOJO 2.0</Link></li>
                                        <li><Link href="/mini-dojo-training-center/" onClick={handleLinkClick}>Mini DOJO Training Center Design and Setup</Link></li>
                                    </ul>
                                </li>
                                {/* Safety Management System */}
                                <li><Link href="/safety-consultants/" onClick={handleLinkClick}>Safety Management System</Link></li>
                                {/* ISO Implementation */}
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(2, "sub3")}>ISO Implementation</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub3")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub3" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub3" ? "block" : "none" }}>
                                        <li><Link href="/iso-9001-qms/" onClick={handleLinkClick}>ISO 9001:2015 (Quality Management System)</Link></li>
                                        <li><Link href="/iso-45001-consultancy/" onClick={handleLinkClick}>ISO for Safety Management | ISO 45001 Consultancy | ISO 45001 Safety Management System</Link></li>
                                        <li><Link href="/?page_id=25434" onClick={handleLinkClick}>ISO 31000:2018 Enterprise Risk Management System Implementation ERM</Link></li>
                                        <li><Link href="/?page_id=23985" onClick={handleLinkClick}>ISO 14001:2015 (Environmental Management System)</Link></li>
                                        <li><Link href="/iso-50001-enms/" onClick={handleLinkClick}>ISO 50001 EnMS (Energy Management System)</Link></li>
                                    </ul>
                                </li>
                                {/* Energy Cost Reduction Services */}
                                <li><Link href="/energy-audit-and-efficiency-services/" onClick={handleLinkClick}>Energy Cost Reduction Services</Link></li>
                            </ul>
                        </li>

                        {/* Skill Training Menu */}
                        <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(3)}>Skill Training</Link>
                            <button onClick={() => handleToggle(3)} className={isActive.key == 3 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 3 ? "block" : "none" }}>
                                {/* Corporate Training Course */}
                                <li><Link href="/corporate-training-companies/" onClick={handleLinkClick}>Corporate Training Course In India</Link></li>
                                {/* Technical Training Courses */}
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(3, "sub1")}>Technical Training Courses</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub1")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="/corporate-training-companies/technical-trainings/advanced-product-quality-planning/" onClick={handleLinkClick}>Advanced Product Quality Planning Program-APQP</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/design-fmea/" onClick={handleLinkClick}>Design Failure Mode Effect Analysis – DFMEA</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/process-failure-mode-effect-analysis-pfmea/" onClick={handleLinkClick}>Process Failure Mode Effect Analysis – PFMEA</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/statistical-process-control/" onClick={handleLinkClick}>Statistical Process Control Training – SPC</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/measurement-system-analysis-msa/" onClick={handleLinkClick}>Measurement System Analysis (MSA)</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/geometric-dimensioning-and-tolerancing/" onClick={handleLinkClick}>GD&T Training | Geometric Dimensioning and Tolerancing</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/advanced-gd-and-t-training/" onClick={handleLinkClick}>Advanced GD&T Training Course | GD&T</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/inventory-management/" onClick={handleLinkClick}>Inventory Management Courses</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/production-part-approval-process/" onClick={handleLinkClick}>Production Part Approval Process – PPAP</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/industry-4-0-courses/" onClick={handleLinkClick}>Industry 4.0 Courses | Training</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/industry-5-0/" onClick={handleLinkClick}>Industry 5.0</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/virtual-reality/" onClick={handleLinkClick}>Virtual Reality – VR</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/design-of-experiment/" onClick={handleLinkClick}>Design Of Experiment – DOE</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/electric-vehicle/" onClick={handleLinkClick}>Electric Vehicle – EV</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/design-for-quality-training/" onClick={handleLinkClick}>Design For Quality | DFQ Training Courses</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/oee-calculation-and-improvement-action/" onClick={handleLinkClick}>Overall Equipment Effectiveness Training | OEE</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/total-productive-maintenance-course-tpm/" onClick={handleLinkClick}>TPM In Manufacturing Training Courses</Link></li>
                                        <li><Link href="/ul-60335-2-40-csa-training-harmonised-iec-standard/" onClick={handleLinkClick}>UL 60335-2-40/CSA Training Harmonized IEC Standard'</Link></li>
                                        <li><Link href="/ul-508a-training/" onClick={handleLinkClick}>Industrial Control Panel Standard UL 508A Training</Link></li>
                                    </ul>
                                </li>
                                {/* Process Improvement Training Courses */}
                                <li><Link href="/corporate-training-companies/process-improvement-training-courses/" onClick={handleLinkClick}>Process Improvement Training Courses</Link></li>
                            </ul>
                        </li>

                        {/* AMR/AGV Menu */}
                        <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(4)}>AMR/AGV</Link>
                            <button onClick={() => handleToggle(4)} className={isActive.key == 4 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 4 ? "block" : "none" }}>
                                <li><Link href="/automated-guided-vehicle-manufacturers" onClick={handleLinkClick}>Autonomous Mobile Robot | AGV | AMR</Link></li>
                            </ul>
                        </li>

                        <li><Link href="/career" onClick={handleLinkClick}>Career</Link></li>
                        <li><Link href="blogs" onClick={handleLinkClick}>Blogs</Link></li>
                        <li><Link href="contact" onClick={handleLinkClick}>Contact Us</Link></li>
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:marketing@tetrahedron.in" onClick={handleLinkClick}>marketing@tetrahedron.in</Link>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <Link href="tel:+91-8984189814" onClick={handleLinkClick}>+91-8984189814</Link>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;