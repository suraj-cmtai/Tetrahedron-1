import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list" role="menubar">
        <li>
          <Link href="/">Home </Link>
        </li>

        <li className="dropdown">
          <Link href="#" aria-haspopup="true">
            About
          </Link>
          <ul role="menu" style={{ left: '-70%', top: '100%', width: '70px' }}>
            <li>
              <Link href="/about-us">Who We Are</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                Policies
              </Link>
              <ul role="menu">
                <li>
                  <Link href="/about-us/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/about-us/terms-of-services">Terms of Services</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="#" aria-haspopup="true">
            Services
          </Link>
          <ul role="menu" style={{ left: '-50%', top: '100%', width: '70px' }}          >
            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                Consulting
              </Link>
              <ul role="menu">
                <li className="dropdown">
                  <Link href="#" aria-haspopup="true">
                    Manufacturing Excellence Services
                  </Link>
                  <ul role="menu"
                   style={{
                    overflowY: 'auto',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none', 
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}
                  >
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/manufacturing-operational-excellence-consulting" style={{ color: 'var(--elitecons-black)' }}>
                        Operational Excellence Consulting
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/tpm-consulting" style={{ color: 'var(--elitecons-black)' }}>
                        TPM Consulting
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/tqm-consulting" style={{ color: 'var(--elitecons-black)' }}>
                        TQM Consulting
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/lean-manufacturing-cost-reduction" style={{ color: 'var(--elitecons-black)' }}>
                        Lean Manufacturing Cost Reduction
                      </Link>
                    </li>
                    <li className="hover-style" >
                      <Link href="/consulting/visual-management-consulting" style={{ color: 'var(--elitecons-black)' }}>
                        Visual Management Consulting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li >
                  <Link href="/consulting/plant-layout-design">
                    Plant Layout Design
                  </Link>
                </li>

                <li className="dropdown">
                  <Link href="#" aria-haspopup="true">
                    Dojo Training Center
                  </Link>
                  <ul role="menu" style={{
                    overflowY: 'auto',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none', 
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/dojo-simulation" style={{ color: 'var(--elitecons-black)' }}>
                        DOJO Training Center | DOJO Center | DOJO Simulations
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/dojo-2-0" style={{ color: 'var(--elitecons-black)' }}>
                        DOJO 2.0
                      </Link>
                    </li>
                    <li className="hover-style">
                      <Link href="/consulting/mini-dojo-training-center" style={{ color: 'var(--elitecons-black)' }}>
                        Mini DOJO Training Center Design And Setup
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/consulting/safety-management-system">
                    Safety Management System
                  </Link>
                </li>

                <li className="dropdown">
                  <Link href="#" aria-haspopup="true">
                    ISO Implementation
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none', 
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/iso-9001-2015" style={{ color: 'var(--elitecons-black)' }}>
                        ISO 9001:2015 (Quality Management System)
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/iso-45001-consultancy" style={{ color: 'var(--elitecons-black)' }}>
                        ISO For Safety Management | ISO 45001 Consultancy | ISO
                        45001 Safety Management System
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/iso-implementation/iso-31000-2018" style={{ color: 'var(--elitecons-black)' }}>
                        ISO 31000:2018 Enterprise Risk Management System
                        Implementation ERM
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/consulting/iso-implementation/iso-14001-2015" style={{ color: 'var(--elitecons-black)' }}>
                        ISO 14001:2015 (Environmental Management System)
                      </Link>
                    </li>
                    <li className="hover-style" >
                      <Link href="/consulting/iso-50001-enms" style={{ color: 'var(--elitecons-black)' }}>
                        ISO 50001 EnMS (Energy Management System)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/consulting/energy-cost-reduction">
                    Energy Cost Reduction Services
                  </Link>
                </li>
              </ul>
            </li>



            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                Skill Training
              </Link>
              <ul role="menu">
                <li>
                  <Link href="/skill-training/corporate-training-course-in-india">
                    Corporate Training Course In India
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Technical Training Courses
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none', 
                    color: 'var(--elitecons-black)',
                    paddingLeft: '10px',
                    paddingRight: '10px'
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-apqp" style={{ color: 'var(--elitecons-black)' }}>
                        Advanced Product Quality Planning Program-APQP
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-dfmea" style={{ color: 'var(--elitecons-black)' }}>
                        Design Failure Mode Effect Analysis – DFMEA
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-pfmea" style={{ color: 'var(--elitecons-black)' }}>
                        Process Failure Mode Effect Analysis – PFMEA
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-spc" style={{ color: 'var(--elitecons-black)' }}>
                        Statistical Process Control Training – SPC
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-msa" style={{ color: 'var(--elitecons-black)' }}>
                        Measurement System Analysis (MSA)
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-gdt" style={{ color: 'var(--elitecons-black)' }}>
                        GD&T Training | Geometric Dimensioning and Tolerancing
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-gdt-advanced" style={{ color: 'var(--elitecons-black)' }}>
                        Advanced GD&T Training Course | GD&T
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-inventory-management" style={{ color: 'var(--elitecons-black)' }}>
                        Inventory Management Courses
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-ppap" style={{ color: 'var(--elitecons-black)' }}>
                        Production Part Approval Process – PPAP
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-industry-4-0" style={{ color: 'var(--elitecons-black)' }}>
                        Industry 4.0 Courses | Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-industry-5-0" style={{ color: 'var(--elitecons-black)' }}>
                        Industry 5.0
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-vr" style={{ color: 'var(--elitecons-black)' }}>
                        Virtual Reality – VR
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-doe" style={{ color: 'var(--elitecons-black)' }}>
                        Design Of Experiment – DOE
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-ev" style={{ color: 'var(--elitecons-black)' }}>
                        Electric Vehicle – EV
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-dfq" style={{ color: 'var(--elitecons-black)' }}>
                        Design For Quality | DFQ Training Courses
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-oee" style={{ color: 'var(--elitecons-black)' }}>
                        Overall Equipment Effectiveness Training | OEE
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-tpm" style={{ color: 'var(--elitecons-black)' }}>
                        TPM In Manufacturing Training Courses
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-ul-60335" style={{ color: 'var(--elitecons-black)' }}>
                        UL 60335-2-40/CSA Training Harmonized IEC Standard
                      </Link>
                    </li>
                    <li className="hover-style">
                      <Link href="/skill-training/training-ul-508a" style={{ color: 'var(--elitecons-black)' }}>
                        Industrial Control Panel Standard UL 508A Training
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Process Improvement Training Courses
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    paddingLeft: '10px',
                    paddingRight: '10px' 
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-cost-reduction" style={{ color: 'var(--elitecons-black)' }}>
                        Cost Reduction Strategies | Training Courses
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-7-new-qc-tools" style={{ color: 'var(--elitecons-black)' }}>
                        Problem Solving with new 7 QC Tools Training in India
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-line-balancing" style={{ color: 'var(--elitecons-black)' }}>
                        Line Balancing in Manufacturing | Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-rca" style={{ color: 'var(--elitecons-black)' }}>
                        Root Cause Analysis Training | RCA Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-low-cost-automation" style={{ color: 'var(--elitecons-black)' }}>
                        Simple & Low-Cost Automation | Industrial Automation Course
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-5s" style={{ color: 'var(--elitecons-black)' }}>
                        5s Safety Training in Workplace | Lean Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-value-engineering" style={{ color: 'var(--elitecons-black)' }}>
                        Value Engineering & Value Analysis Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-performance-management" style={{ color: 'var(--elitecons-black)' }}>
                        Performance Management and Improvement Plan
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-tqm" style={{ color: 'var(--elitecons-black)' }}>
                        Total Quality Management (TQM) Training Course in India
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-quality-control" style={{ color: 'var(--elitecons-black)' }}>
                        Quality Control System
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-lean-cost-reduction" style={{ color: 'var(--elitecons-black)' }}>
                        Cost Reduction by Lean Manufacturing
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-5why-fishbone" style={{ color: 'var(--elitecons-black)' }}>
                        Why Why Analysis | Fish-bone | 5 Why Training
                      </Link>
                    </li>
                    <li className="hover-style">
                      <Link href="/skill-training/training-kaizen" style={{ color: 'var(--elitecons-black)' }}>
                        Kaizen Training Program | Kaizen Certification
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Strategic Management And Training Consultants
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    paddingLeft: '10px',
                    paddingRight: '10px' 
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-esg" style={{ color: 'var(--elitecons-black)' }}>
                        Environmental, Social and Governance (ESG) Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-dwm" style={{ color: 'var(--elitecons-black)' }}>
                        Daily Work Management
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-design-thinking" style={{ color: 'var(--elitecons-black)' }}>
                        Design Thinking Course | Online Trainings
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-finance-non-finance" style={{ color: 'var(--elitecons-black)' }}>
                        Finance For Non Finance Managers Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-triz" style={{ color: 'var(--elitecons-black)' }}>
                        Theory Of Inventive Problem Solving (Triz)
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-bsc" style={{ color: 'var(--elitecons-black)' }}>
                        Balance Score Card
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-competency-mapping" style={{ color: 'var(--elitecons-black)' }}>
                        Competency Mapping
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-productivity-skill-mapping" style={{ color: 'var(--elitecons-black)' }}>
                        Productivity Focus Skill Mapping
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-wcm" style={{ color: 'var(--elitecons-black)' }}>
                        World Class Manufacturing
                      </Link>
                    </li>
                    <li className="hover-style">
                      <Link href="/skill-training/training-dwm-time-management" style={{ color: 'var(--elitecons-black)' }}>
                        DWM and Time Management Techniques
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link
                    href="#"
                    aria-haspopup="true"
                  >
                    Behavioural Training
                  </Link>
                  <ul role="menu" style={{
                    height: '400px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    paddingLeft: '10px',
                    paddingRight: '10px' 
                  }}>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px'}}>
                      <Link href="/skill-training/training-presentation-skills" style={{ color: 'var(--elitecons-black)' }}>
                        Presentation Skills Training Courses
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-art-of-delegation" style={{ color: 'var(--elitecons-black)' }}>
                        The Art of Delegation Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-planning-prioritization" style={{ color: 'var(--elitecons-black)' }}>
                        Planning & Prioritization Skills Training
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-team-time-task-management" style={{ color: 'var(--elitecons-black)' }}>
                        Team, Time and Task Management Training & Seminars
                      </Link>
                    </li>
                    <li className="hover-style" style={{ borderBottom: '1px solid lightgray', paddingBottom: '11px' }}>
                      <Link href="/skill-training/training-non-verbal-communication" style={{ color: 'var(--elitecons-black)' }}>
                        Non Verbal Communication Online Training
                      </Link>
                    </li>
                    <li className="hover-style">
                      <Link href="/skill-training/training-team-dev-motivation" style={{ color: 'var(--elitecons-black)' }}>
                        Team Development & Motivation Training Programmes
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>


            <li className="dropdown">
              <Link href="#" aria-haspopup="true">
                AMR/AGV
              </Link>
              <ul role="menu">
                <li className="hover-style">
                  <Link href="automated-guided-vehicle-manufacturers">
                    Autonomous Mobile Robot | AGV | AMR
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/career">Career</Link>
        </li>

        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>

        <li>
          <Link href="/blogs">Blogs</Link>
        </li>

        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <style jsx>{`
        /* --- GENERAL LI STYLING FOR SCALING & BORDER RADIUS --- */
        .main-menu__list li {
          /* Apply transition for transform and border-radius properties to all li */
          transition: transform 0.25s ease-in-out, border-radius 0.25s ease-in-out;
          position: relative; 
          /* You could define a base border-radius here if you want items to be slightly rounded always */
          /* border-radius: 4px; */
        }

        /* Default hover effect for ANY li in the menu */
        .main-menu__list li:hover {
          transform: scale(1.01); /* Moderate scale for dropdown/nested items */
          z-index: 15; /* Ensure hovered items are above siblings and dropdown backgrounds */
          border-radius: 6px; /* Applied border-radius on hover. Adjust as needed. */
        }

        /* --- TOP-LEVEL MENU ITEMS --- */
        .main-menu__list > li {
          display: inline-block; 
          vertical-align: middle; 
          padding: 0 5px; /* Spacing for top-level items */
        }
        
        /* Override hover effect for DIRECT children (top-level items) */
        .main-menu__list > li:hover {
          transform: scale(1.1); /* Larger scale specifically for top-level items */
          z-index: 5; /* Above direct siblings, below dropdowns */
          /* border-radius from .main-menu__list li:hover will apply (e.g., 6px).
             If a different radius is needed for top-level items on hover, specify it here:
             border-radius: 8px; 
          */
        }
        
        .main-menu__list > li > a {
            display: inline-block; 
            padding: 10px 5px; /* Padding for the link itself */
        }

        /* --- DROPDOWN STRUCTURE --- */
        .dropdown > ul {
          display: none;
          position: absolute;
          top: 0; 
          left: 100%; 
          background: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
          min-width: 250px; 
          z-index: 10; 
          list-style-type: none;
          text-align: left;
          border-radius: 4px; /* Existing radius for the dropdown box itself */
          padding: 5px 0; 
        }
        
        .dropdown:hover > ul {
          display: block;
        }

        /* --- STYLING FOR ITEMS WITHIN DROPDOWNS (.hover-style) --- */
        .hover-style {
          /* Transitions for background and text color */
          transition: background-color 0.3s ease, color 0.3s ease; 
          min-width: 150px; 
          margin-bottom: 10px;
          font-size: 18px;
          margin-top:10px;
          /* border-radius, transform, and z-index on hover are inherited from .main-menu__list li:hover */
        }

        .hover-style a {
          display: block; 
          padding: 8px 15px; 
          text-decoration: none;
          transition: color 0.3s ease; /* Link color transition */
        }
        
        .hover-style:hover {
          // background-color: var(--elitecons-base);
          background-color: var(--elitecons-base);
          color: var(--elitecons-white);
          border-radius: 10px;
          /* border-radius, transform, and z-index are handled by .main-menu__list li:hover */
        }

        .hover-style:hover a {
          // color: var(--elitecons-white) !important; 
          background-color: var(--elitecons-base);
          color: var(--elitecons-white);
          border-radius: 10px;
        }

        /* General styling for ALL links within dropdown list items */
        .dropdown ul li a { 
          display: block; 
          padding: 8px 15px; 
          text-decoration: none;
        }

        /* Specific hover for non-.hover-style list items in dropdowns, if needed */
        .dropdown ul li:not(.hover-style):hover {
            /* If these items should also get a background to make the border-radius visible, add it here. */
            /* background-color: #f0f0f0; */ /* Example */
            /* transform, border-radius, and z-index are inherited from .main-menu__list li:hover */
        }
        /* Specific hover for links inside non-.hover-style list items */
        .dropdown ul li:not(.hover-style) a:hover {
          /* color: var(--elitecons-base); */ /* Example text color change */
        }

      `}</style>
    </>
  );
}