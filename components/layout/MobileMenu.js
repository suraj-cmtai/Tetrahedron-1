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
                            <Link href="#" onClick={() => handleToggle(1)}>About</Link>
                            <button onClick={() => handleToggle(1)} className={isActive.key == 1 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 1 ? "block" : "none" }}>
                                <li><Link href="about-us" onClick={handleLinkClick}>Who We Are</Link></li>
                                <li><Link href="team" onClick={handleLinkClick}>Our Team</Link></li>
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(1, "sub1")}>Policies</Link>
                                    <button onClick={() => handleToggle(1, "sub1")} className={isActive.key == 1 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}>
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 1 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="privacy-policy" onClick={handleLinkClick}>Privacy Policy</Link></li>
                                        <li><Link href="terms-of-services" onClick={handleLinkClick}>Terms of Services</Link></li>
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
                                        <li><Link href="/consulting/manufacturing-operational-excellence-consulting" onClick={handleLinkClick}>Operational Excellence Consulting</Link></li>
                                        <li><Link href="/consulting/tpm-consulting" onClick={handleLinkClick}>TPM Consulting</Link></li>
                                        <li><Link href="/consulting/tqm-consulting" onClick={handleLinkClick}>TQM Consulting</Link></li>
                                        <li><Link href="/consulting/lean-manufacturing-cost-reduction" onClick={handleLinkClick}>Lean Manufacturing Cost Reduction</Link></li>
                                        <li><Link href="/consulting/visual-management-consulting" onClick={handleLinkClick}>Visual Management Consulting</Link></li>
                                    </ul>
                                </li>

                                {/* Plant Layout Design */}
                                <li><Link href="/consulting/plant-layout-design" onClick={handleLinkClick}>Plant Layout Design</Link></li>

                                {/* Dojo Training Center */}
                                <li className="dropdown">
                                    <Link href="pricing" onClick={handleLinkClick}>Dojo Training Center</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub2")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub2" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub2" ? "block" : "none" }}>
                                        <li><Link href="/consulting/dojo-simulation" onClick={handleLinkClick}>DOJO Training Center | DOJO Center | DOJO Simulations</Link></li>
                                        <li><Link href="/consulting/dojo-2-0" onClick={handleLinkClick}>DOJO 2.0</Link></li>
                                        <li><Link href="/consulting/mini-dojo-training-center" onClick={handleLinkClick}>Mini DOJO Training Center Design And Setup</Link></li>
                                    </ul>
                                </li>

                                {/* Safety Management System */}
                                <li><Link href="/consulting/safety-management-system" onClick={handleLinkClick}>Safety Management System</Link></li>

                                {/* ISO Implementation */}
                                <li className="dropdown">
                                    <Link href="faq" onClick={handleLinkClick}>ISO Implementation</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub3")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub3" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub3" ? "block" : "none" }}>
                                        <li><Link href="/consulting/iso-9001-2015" onClick={handleLinkClick}>ISO 9001:2015 (Quality Management System)</Link></li>
                                        <li><Link href="/consulting/iso-45001-consultancy" onClick={handleLinkClick}>ISO For Safety Management | ISO 45001 Consultancy | ISO 45001 Safety Management System</Link></li>
                                        <li><Link href="/consulting/iso-implementation/iso-31000-2018" onClick={handleLinkClick}>ISO 31000:2018 Enterprise Risk Management System Implementation ERM</Link></li>
                                        <li><Link href="/consulting/iso-implementation/iso-14001-2015" onClick={handleLinkClick}>ISO 14001:2015 (Environmental Management System)</Link></li>
                                        <li><Link href="/consulting/iso-50001-enms" onClick={handleLinkClick}>ISO 50001 EnMS (Energy Management System)</Link></li>
                                    </ul>
                                </li>

                                {/* Energy Cost Reduction Services */}
                                <li><Link href="/consulting/energy-cost-reduction" onClick={handleLinkClick}>Energy Cost Reduction Services</Link></li>
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
                                <li><Link href="/skill-training/corporate-training-course-in-india" onClick={handleLinkClick}>Corporate Training Course</Link></li>

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
                                        <li><Link href="/skill-training/training-apqp" onClick={handleLinkClick}>APQP Training</Link></li>
                                        <li><Link href="/skill-training/training-dfmea" onClick={handleLinkClick}>DFMEA Training</Link></li>
                                        <li><Link href="/skill-training/training-pfmea" onClick={handleLinkClick}>PFMEA Training</Link></li>
                                        <li><Link href="/skill-training/training-spc" onClick={handleLinkClick}>SPC Training</Link></li>
                                        <li><Link href="/skill-training/training-msa" onClick={handleLinkClick}>MSA Training</Link></li>
                                        <li><Link href="/skill-training/training-gdt" onClick={handleLinkClick}>GD&T Training</Link></li>
                                        <li><Link href="/skill-training/training-gdt-advanced" onClick={handleLinkClick}>Advanced GD&T Training</Link></li>
                                        <li><Link href="/skill-training/training-inventory-management" onClick={handleLinkClick}>Inventory Management Courses</Link></li>
                                        <li><Link href="/skill-training/training-ppap" onClick={handleLinkClick}>PPAP Training</Link></li>
                                        <li><Link href="/skill-training/training-industry-4-0" onClick={handleLinkClick}>Industry 4.0 Training</Link></li>
                                        <li><Link href="/skill-training/training-industry-5-0" onClick={handleLinkClick}>Industry 5.0 Training</Link></li>
                                        <li><Link href="/skill-training/training-vr" onClick={handleLinkClick}>VR Training</Link></li>
                                        <li><Link href="/skill-training/training-doe" onClick={handleLinkClick}>DOE Training</Link></li>
                                        <li><Link href="/skill-training/training-ev" onClick={handleLinkClick}>EV Training</Link></li>
                                        <li><Link href="/skill-training/training-dfq" onClick={handleLinkClick}>DFQ Training</Link></li>
                                        <li><Link href="/skill-training/training-oee" onClick={handleLinkClick}>OEE Training</Link></li>
                                        <li><Link href="/skill-training/training-tpm" onClick={handleLinkClick}>TPM Training</Link></li>
                                        <li><Link href="/skill-training/training-ul-60335" onClick={handleLinkClick}>UL 60335-2-40 Training</Link></li>
                                        <li><Link href="/skill-training/training-ul-508a" onClick={handleLinkClick}>Industrial Control Panel Training</Link></li>
                                    </ul>
                                </li>

                                {/* Process Improvement Training Courses */}
                                <li className="dropdown">
                                    <Link href="/skill-training/process-improvement-courses" onClick={() => handleToggle(3, "sub2")}>Process Improvement Training Courses</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub2")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub2" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub2" ? "block" : "none" }}>
                                        <li><Link href="/skill-training/training-cost-reduction" onClick={handleLinkClick}>Cost Reduction Strategies</Link></li>
                                        <li><Link href="/skill-training/training-7-new-qc-tools" onClick={handleLinkClick}>Problem Solving with 7 QC Tools</Link></li>
                                        <li><Link href="/skill-training/training-line-balancing" onClick={handleLinkClick}>Line Balancing Training</Link></li>
                                        <li><Link href="/skill-training/training-rca" onClick={handleLinkClick}>Root Cause Analysis Training</Link></li>
                                        <li><Link href="/skill-training/training-low-cost-automation" onClick={handleLinkClick}>Industrial Automation Training</Link></li>
                                        <li><Link href="/skill-training/training-5s" onClick={handleLinkClick}>5s Safety Training</Link></li>
                                        <li><Link href="/skill-training/training-value-engineering" onClick={handleLinkClick}>Value Engineering & Value Analysis</Link></li>
                                        <li><Link href="/skill-training/training-performance-management" onClick={handleLinkClick}>Performance Management Training</Link></li>
                                        <li><Link href="/skill-training/training-tqm" onClick={handleLinkClick}>TQM Training</Link></li>
                                        <li><Link href="/skill-training/training-quality-control" onClick={handleLinkClick}>Quality Control System Training</Link></li>
                                        <li><Link href="/skill-training/training-lean-cost-reduction" onClick={handleLinkClick}>Lean Manufacturing Cost Reduction</Link></li>
                                        <li><Link href="/skill-training/training-5why-fishbone" onClick={handleLinkClick}>5 Why Analysis Training</Link></li>
                                        <li><Link href="/skill-training/training-kaizen" onClick={handleLinkClick}>Kaizen Certification</Link></li>
                                    </ul>
                                </li>

                                {/* Strategic Management and Training Consultants */}
                                <li className="dropdown">
                                    <Link href="/skill-training/strategic-management" onClick={() => handleToggle(3, "sub3")}>Strategic Management and Training Consultants</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub3")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub3" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub3" ? "block" : "none" }}>
                                        <li><Link href="/skill-training/training-esg" onClick={handleLinkClick}>ESG Training</Link></li>
                                        <li><Link href="/skill-training/training-dwm" onClick={handleLinkClick}>Daily Work Management</Link></li>
                                        <li><Link href="/skill-training/training-design-thinking" onClick={handleLinkClick}>Design Thinking Course</Link></li>
                                        <li><Link href="/skill-training/training-finance-non-finance" onClick={handleLinkClick}>Finance for Non-Finance Managers</Link></li>
                                        <li><Link href="/skill-training/training-triz" onClick={handleLinkClick}>TRIZ Theory Training</Link></li>
                                        <li><Link href="/skill-training/training-bsc" onClick={handleLinkClick}>Balance Score Card</Link></li>
                                        <li><Link href="/skill-training/training-competency-mapping" onClick={handleLinkClick}>Competency Mapping</Link></li>
                                        <li><Link href="/skill-training/training-productivity-skill-mapping" onClick={handleLinkClick}>Productivity Skill Mapping</Link></li>
                                        <li><Link href="/skill-training/training-wcm" onClick={handleLinkClick}>World Class Manufacturing</Link></li>
                                        <li><Link href="/skill-training/training-dwm-time-management" onClick={handleLinkClick}>DWM and Time Management</Link></li>
                                    </ul>
                                </li>

                                {/* Behavioural Training */}
                                <li className="dropdown">
                                    <Link href="/skill-training/behavioural-training" onClick={() => handleToggle(3, "sub4")}>Behavioural Training</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub4")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub4" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub4" ? "block" : "none" }}>
                                        <li><Link href="/skill-training/training-presentation-skills"onClick={handleLinkClick}>Presentation Skills Training</Link></li>
                                        <li><Link href="/skill-training/training-art-of-delegation" onClick={handleLinkClick}>Delegation Training</Link></li>
                                        <li><Link href="/skill-training/training-planning-prioritization" onClick={handleLinkClick}>Prioritization Skills Training</Link></li>
                                        <li><Link href="/skill-training/training-team-time-task-management" onClick={handleLinkClick}>Team, Time, and Task Management</Link></li>
                                        <li><Link href="/skill-training/training-non-verbal-communication" onClick={handleLinkClick}>Non-Verbal Communication Training</Link></li>
                                        <li><Link href="/skill-training/training-team-dev-motivation" onClick={handleLinkClick}>Team Development & Motivation</Link></li>
                                    </ul>
                                </li>
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