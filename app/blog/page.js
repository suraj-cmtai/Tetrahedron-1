'use client'
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const poppinsFont =  {
  fontFamily: "Poppins, sans-serif !important"
};
const mainHeading = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "32px !important"
};
const blogTitle = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "26px !important"
};
const bodyText = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "18px !important"
};
const smallText = {
  fontFamily: "Poppins, sans-serif !important",
  fontSize: "16px !important"
};

export const blogPosts = [
    {
        id: 1,
        title: "What is safety incident management",
        date: "November 16, 2024",
        image: "assets/images/blog/banner1.png",
        description: "A safety incident management system is a process of identifying, reporting, tracking, correcting, mitigating, and analysing potential incidents across the workplace in a systematic manner. It works as a proactive hazard prevention tool for the organisation, ensuring workplace safety.",
        link: "what-is-safety-incident-management"
    },
    {
        id: 2,
        title: "Value Stream Mapping Overview- What is VSM?",
        date: "September 23, 2023",
        image: "assets/images/blog/banner2.jpg",
        description: "Value Stream Mapping (VSM) is a workplace efficiency tool developed by Toyota to enhance productivity. This lean tool uses flowcharts to document each step in a process, helping to identify areas for improvement and track even the smallest progress towards efficiency.",
        link: "value-stream-mapping"
    },
    {
        id: 3,
        title: "What is AGV & How it is benefiting Indian Manufacturers?",
        date: "August 28, 2024",
        image: "assets/images/blog/banner3.jpg",
        description: "An Automated Guided Vehicle system also known as automatic guided cart which is a driverless, electric mechanized transport for flexible loads that operates in a team with warehouse systems such as conveyor lines and pallet racking.",
        link: "agv-manufacturers-in-india"
    },
    {
        id: 4,
        title: "What is Visual Management? What are its types and benefits?",
        date: "July 3, 2024",
        image: "assets/images/blog/banner4.jpg",
        description: "In this competitive market landscape, to scale your business on an upscale growth graph, all your employees must be on the same page with clear communication and collaboration. Your dedicated and skilled employees are the most valuable asset to your organization.",
        link: "what-is-visual-management"
    },
    {
        id: 5,
        title: "What are the Five S's (5S) in 5S Methodology?",
        date: "February 27, 2024",
        image: "assets/images/blog/banner5.jpg",
        description: "5S Methodology was first introduced by the Toyota Production System, and the main approach to adopt this technique is to organize the workplace in the form of a clean, protective, and highly efficient environment, well-structured and systematic to result in high productivity and significantly reduce waste effectively.",
        link: "5s-methodology"
    },
    {
        id: 6,
        title: "Plant layout : Definition, Objectives, Types, Case Studies, Factors",
        date: "February 27, 2024",
        image: "assets/images/blog/banner6.png",
        description: "Full Form of Dojo is, the character 'DO' refers to the way (in Chinese 'Dao' or 'Tao'). The character 'JO' refers to the place (in Chinese 'Chang'). Generally the phrase safety and dojo where safety refers to the practice of ensuring well being and preventing harm.",
        link: "safety-dojo"
    },
    {
        id: 7,
        title: "Plant layout : Definition, Objectives, Types, Case Studies, Factors",
        date: "December 18, 2023",
        image: "assets/images/blog/banner7.jpg",
        description: "Maximize the potential with the right and efficient plant layout design. In this, we'll explore the definition, objectives, and types of plant layout, along with detailed case studies, key strategies, & factors to consider. Whether you're looking to increase productivity, reduce costs, or improve workplace safety and efficiency.",
        link: "plant-layout"
    },
    {
        id: 8,
        title: "Maximizing Performance with Operational Excellence: Tools and Techniques for Manufacturing Firms",
        date: "April 28, 2023",
        image: "assets/images/blog/banner8.jpg",
        description: "Operational excellence in manufacturing refers to the continuous improvement and optimization of various operational processes. It involves implementing strategies and practices that aim to maximize efficiency, minimize waste, and enhance overall productivity.",
        link: "achieve-manufacturing-excellence"
    },
    {
        id: 9,
        title: "Boosting Productivity in Manufacturing Industries: Unleashing the Power of Kaizen",
        date: "April 28, 2023",
        image: "assets/images/blog/banner9.jpg",
        description: "By incorporating Kaizen principles into their manufacturing processes, companies can experience a boost in productivity, efficiency, and performance. This blog sheds light on the benefits of Kaizen, exploring how it enhances workflows and improves processes.",
        link: "unleashing-the-power-of-kaizen"
    },

   {
        id: 10,
        title: "Material Handling: A Complete Guide for Efficient Warehouse Operations",
        date: "April 25, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Material handling plays a crucial role in improving the efficiency and safety of logistics and supply chain operations. The use of material handling equipment, such as conveyor belts, forklifts, and automated storage and retrieval systems, can move large volumes of goods quickly.",
        link: "material-handling-complete-guide-for-efficient-warehouse-operations"
    },
    {
        id: 11,
        title: "A Comprehensive Guide to Six Sigma: Methodology, Tools and Implementation",
        date: "April 19, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Organizations can significantly improve their processes, reduce defects, increase overall efficiency, and ultimately enhance customer satisfaction. Six Sigma uses advanced statistical analysis to measure and analyze the performance of processes and identify key areas for improvement.",
        link: "six-sigma-comprehensive-guide-methodology-and-tools"
    },
    {
        id: 12,
        title: "VR For Training: How VR is Useful and Beneficial For Training?",
        date: "April 18, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "virtual reality has become an increasingly popular tool in the training industry due to its cost-effectiveness, realistic simulations, and enhanced learning experiences. Its applications in various fields such as healthcare, military, manufacturing, customer service, and education.",
        link: "vr-for-training"
    },
    {
        id: 13,
        title: "Total Quality Management (TQM): The Key to achieving Business Success",
        date: "April 8, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "By implementing TQM principles, manufacturing companies can significantly reduce defects, improve overall product quality, and increase operational efficiency. This, in turn, can lead to greater customer satisfaction, a stronger brand reputation, and higher profitability.",
        link: "total-quality-management-tqm-the-key-to-achieving-business-success"
    },
    {
        id: 14,
        title: "How to Maximize Air Compressor Efficiency & Reducing Cost",
        date: "March 30, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "An air compressor is a machine that converts power, usually from an electric motor, diesel engine, or gasoline engine, into potential energy stored in pressurized air. The compressed air can then be used for a variety of applications, such as powering pneumatic tools.",
        link: "how-to-maximize-air-compressor-efficiency-reducing-cost"
    },
    {
        id: 15,
        title: "Understanding Lean Manufacturing: Guide to Lean Tools and Technologies",
        date: "March 27, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Explore the benefits of implementing lean manufacturing system including increased efficiency, reduced waste & improved quality by applying lean principles from identifying value-added activities and eliminating non-value-added to implementing continuous improvement.",
        link: "lean-manufacturing-system"
    },
    {
        id: 16,
        title: "How To Improve Chiller Efficiency And Plant Performance?",
        date: "March 23, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover the strategies you can implement to improve the efficiency, reduce energy consumption & costs. From optimizing system design & maintenance to implementing best practices for operation & control, learn how to ensure reliable & efficient chiller performance.",
        link: "how-to-improve-chiller-efficiency"
    },
    {
        id: 17,
        title: "What is TPM (Total Productive Maintenance)? – TPM Pillars | 5S Methodology",
        date: "March 20, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Learn about TPM, an approach to equipment maintenance that aims to improve equipment reliability, reduce downtime & increase productivity. Discover the benefits of implementing a TPM program, from reducing maintenance costs & improving product quality.",
        link: "total-productive-maintenance"
    },
    {
        id: 18,
        title: "ISO 45001 Safety Management System: A Comprehensive Guide",
        date: "March 18, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Know the ISO 45001:2018 standard and learn how to implement a comprehensive safety management system in your organization. Discover the benefits from reducing accidents and injuries to improving employee morale & productivity.",
        link: "iso-45001-2018-safety-management-system-comprehensive-guide"
    },
    {
        id: 19,
        title: "Energy Management System: What it is and Why your business needs it.",
        date: "March 15, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover why an energy management system is crucial for businesses to save costs and reduce their carbon footprint. Learn how implementing an EMS can help you track and manage energy usage, identify inefficiencies, and improve sustainability practices.",
        link: "energy-management-system"
    },
    {
        id: 20,
        title: "Best Practices and Strategies for achieving Manufacturing Excellence",
        date: "March 13, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Unlock the secrets to achieving manufacturing excellence with these expert tips and insights. From optimizing production processes and reducing waste to implementing lean manufacturing principles, discover the strategies you need to take your operations to the next level.",
        link: "best-practices-and-strategies-for-achieving-manufacturing-excellence"
    },
    {
        id: 21,
        title: "ISO 45001:2018 Safety Management System: New Concepts and Critical Clauses",
        date: "March 18, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Explore the critical role of energy efficiency, its impact on patient care, operational costs, & environmental sustainability. Discover the benefits of implementing energy-efficient practices, from reducing energy bills & enhancing facility performance.",
        link: "iso-450012018-safety-management-system"
    },
    {
        id: 22,
        title: "Optimising Energy Efficiency in Hospitals: Strategies and Best Practices",
        date: "March 9, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Explore the critical role of energy efficiency in the health care industry, impact on patient care, operational costs, & environmental sustainability. Discover the benefits of implementing energy-efficient practices, from reducing energy bills & enhancing facility performance.",
        link: "how-does-energy-efficiency-beneficial-for-healthcare"
    },
    {
        id: 23,
        title: "ISO 45001:2018 Safety Management System: Key to Reducing Workplace Accidents",
        date: "March 7, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover how implementing an ISO 45001:2018 (OH&SMS) can help your organization create a safer, healthier workplace. Learn how an OH&SMS can help you identify and manage occupational risks, comply with regulations, and improve your overall safety performance and reputation.",
        link: "iso-450012018"
    },
    {
        id: 24,
        title: "ISO 50001: Energy Management System , Reduce Energy Costs.",
        date: "March 7, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover the benefits of implementing an ISO 50001:2018 EnMS from reducing energy costs & carbon emissions to improving operational efficiency & enhancing sustainability practices, learn how an EnMS can help you achieve your energy & environmental goals.",
        link: "iso-50001-2018-enms-energy-management-system"
    },
    {
        id: 25,
        title: "Key factors to achieve Operational Excellence in a Manufacturing Plant?",
        date: "March 4, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Find out how an Consultant can help in achieving manufacturing excellence. From optimizing production processes & reducing waste to implementing lean manufacturing principles, learn how a consultant can provide the expertise, guidance, and tools you need.",
        link: "operational-excellence-consultant-helps-in-manufacturing-excellence"
    },
    {
        id: 26,
        title: "Maximizing Energy Efficiency: The Importance of Proper Air Venting and Pipe Insulation",
        date: "February 1, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover the importance of air venting and pipe insulation in HVAC systems and how they can help you save energy and reduce costs. Learn how proper venting and insulation can improve system performance, prevent heat loss, and minimize the risk of equipment failure and downtime.",
        link: "air-venting-and-pipe-insulation"
    },
    {
        id: 27,
        title: "Salient Features of Steam Distribution System In Process Plant",
        date: "January 31, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Explore the critical role of steam distribution systems & how they can impact efficiency, productivity, & safety. From optimizing system design & maintenance to implementing best practices for operation and control, discover how to ensure reliable & efficient steam distribution.",
        link: "steam-distribution-system"
    },
    {
        id: 28,
        title: "Key factors to achieve Operational Excellence in a Manufacturing Plant?",
        date: "January 27, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Find out how an Consultant can help in achieving manufacturing excellence. From optimizing production processes & reducing waste to implementing lean manufacturing principles, learn how a consultant can provide the expertise, guidance, and tools you need.",
        link: "operational-excellence-consultant-helps-in-manufacturing-excellence"
    },
    {
        id: 29,
        title: "Maximizing Energy Efficiency: The Importance of Proper Air Venting and Pipe Insulation",
        date: "January 16, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover the importance of air venting and pipe insulation in HVAC systems and how they can help you save energy and reduce costs. Learn how proper venting and insulation can improve system performance, prevent heat loss, and minimize the risk of equipment failure and downtime.",
        link: "air-venting-and-pipe-insulation"
    },
    {
        id: 30,
        title: "Salient Features of Steam Distribution System In Process Plant",
        date: "January 16, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Explore the critical role of steam distribution systems & how they can impact efficiency, productivity, & safety. From optimizing system design & maintenance to implementing best practices for operation and control, discover how to ensure reliable & efficient steam distribution.",
        link: "steam-distribution-system"
    },
    {
        id: 31,
        title: "Revolutionizing Healthcare: How AR/VR Technology Is Transforming Medical Training",
        date: "January 27, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Discover the cutting-edge technology of Augmented Reality (AR) & Virtual Reality (VR) & its potential to revolutionize patient care & training. From enhancing surgical precision & improving diagnostic accuracy to creating immersive educational experiences.",
        link: "ar-vr-in-medical-tetrahedron"
    },
    {
        id: 32,
        title: "Lean Plant Layout: Streamlining Processes for Maximum Efficiency",
        date: "January 11, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Learn how implementing a lean plant layout can help you optimize production processes, reduce waste, & improve efficiency. From minimizing material handling & travel time to creating flexible work cells & optimizing equipment placement by discovering the strategies.",
        link: "lean-plant-layout"
    },
    {
        id: 33,
        title: "Transforming Learning: The Revolutionary Impact of AR/VR Technology in Education",
        date: "anuary 6, 2023",
        image: "assets/images/blog/banner3.jpg",
        description: "Innovative use of Augmented Reality (AR) and Virtual Reality (VR) technology in the education sector and its potential to enhance student engagement, knowledge retention, & learning outcomes. From creating immersive learning experiences to enabling remote education.",
        link: "ar-vr-in-education-tetrahedron"
    },
    {
        id: 34,
        title: "Putting Energy Management to the Test: Does It Really Help Reduce Energy Costs?",
        date: "December 27, 2022",
        image: "assets/images/blog/banner3.jpg",
        description: "Benefits of energy management and how it can help reduce energy costs. Discover the key elements of an effective energy management program, from energy audits & benchmarking to energy-efficient technologies & learn how to achieve significant energy savings.",
        link: "does-energy-management-reduce-energy-costs"
    },
    {
        id: 35,
        title: "How to Re-invent Your Business | AR VR For Industries",
        date: "November 19, 2022",
        image: "assets/images/blog/banner3.jpg",
        description: "Applications of Augmented Reality (AR) & Virtual Reality (VR) technology from manufacturing & healthcare to retail & entertainment. Discover how AR & VR are transforming the way industries operate, enhancing customer experiences, improving productivity, & reducing costs.",
        link: "ar-vr-for-industries"
    },
    {
        id: 36,
        title: "Why should an industry conduct an energy audit in their plant?",
        date: "March 27, 2020",
        image: "assets/images/blog/banner3.jpg",
        description: "Importance of conducting energy audits & how they can help you identify energy-saving opportunities, reduce operating costs, & improve sustainability. From assessing your facility's energy consumption & identifying areas of improvement to developing an action plan.",
        link: "energy-audit"
    },
    {
        id: 37,
        title: "Quality Management System – ISO 9001 certification | Benefits",
        date: "January 14, 2020",
        image: "assets/images/blog/banner3.jpg",
        description: "Benefits of ISO 9001 certification & how it can help improve the QMS. From enhancing customer satisfaction & improving product quality to reducing costs & increasing profitability, learn how ISO 9001 certification can provide a framework for continuous improvement.",
        link: "iso-9001-certification"
    },
    {
        id: 38,
        title: "Sustainable Manufacturing: 6 Ways to Reduce Energy Consumption in Your Plant",
        date: "August 29, 2022",
        image: "assets/images/blog/banner3.jpg",
        description: "Strategies and technologies for reducing energy costs. From optimizing energy consumption & improving energy efficiency to adopting renewable energy sources & implementing energy management systems, discover how you can achieve significant energy cost reductions.",
        link: "energy-cost-reduction"
    },
    {
        id: 39,
        title: "Why ISO Certification Matters: How It Can Benefit Your Business & Boost Credibility",
        date: "August 20, 2022",
        image: "assets/images/blog/banner3.jpg",
        description: "Learn about the various ISO certification services, (ISO 9001, ISO 14001, ISO 45001, ISO 50001). From gap analysis & documentation development to internal audits & certification assessments, discover how our team of experts can guide you through the ISO certification process.",
        link: "iso-certification-services"
    },
    {
        id: 40,
        title: "Be more Profitable with Manufacturing Operational Excellence",
        date: "August 28, 2024",
        image: "assets/images/blog/banner3.jpg",
        description: "Unlock the full potential with us from Lean and Six Sigma methodologies to TPM, our team of experts can help you improve efficiency, reduce waste, enhance quality, & increase profitability. Discover how it can benefit your business & take your operations to the next level.",
        link: "be-more-profitable-with-manufacturing-operational-excellence"
    },
    {
        id: 41,
        title: "5 Lean Principles of Manufacturing | Best Manufacturing Consultants",
        date: "September 20, 2020",
        image: "assets/images/blog/banner3.jpg",
        description: "Transform your manufacturing operations with the 5 essential lean principles. From reducing waste and improving efficiency to empowering your team & delivering exceptional value to customers, learn from the best manufacturing consultants & achieve excellence in your industry.",
        link: "do-you-know-about-lean-house-and-5-lean-principles-of-manufacturing"
    },
    {
        id: 42,
        title: "Ergonomics DOJO: The Key to Improving Workplace Safety and Productivity",
        date: "August 28, 2024",
        image: "assets/images/blog/banner3.jpg",
        description: "Upgrade your workplace with Ergonomics DOJO – the ultimate guide to ergonomics in the workplace. From reducing workplace injuries & improving productivity to enhancing employee engagement & satisfaction, unlock the power of ergonomic design with expert insights.",
        link: "ergonomics-and-workplace-design"
    },
    {
        id: 43,
        title: "How to Develop and Implement a Successful Competency Mapping Process",
        date: "January 14, 2020",
        image: "assets/images/blog/banner3.jpg",
        description: "Unlock the full potential of your workforce with a strategic approach to competency mapping. In this informative guide, we'll explore the process of competency mapping, from identifying key skills and behaviors to evaluating performance and creating development plans.",
        link: "process-of-competency-mapping"
    },
    {
        id: 44,
        title: "How to Set Up a Process Specific DOJO Training Simulation",
        date: "December 9, 2019",
        image: "assets/images/blog/banner3.jpg",
        description: "Take your training to the next level with a process-specific DOJO simulation. In this comprehensive guide, we'll walk you through the step-by-step process of setting up a DOJO training simulation, tailored to your organization's unique needs and processes.",
        link: "dojo-training"
    },
    {
        id: 45,
        title: "Economic Automated Guided Vehicle is the need of the Hour!",
        date: "December 4, 2019",
        image: "assets/images/blog/banner3.jpg",
        description: "Transform your material handling operations with the economic automated guided vehicle – the solution your business needs right now. In this insightful article, discover how AGVs can improve your bottom line, reduce labor costs, and boost productivity in your manufacturing operations.",
        link: "automated-guided-vehicle-manufacturers-blog"
    },
    {
        id: 46,
        title: "Skilling by Dojo in Manufacturing | Center Design",
        date: "November 30, 2019",
        image: "assets/images/blog/banner3.jpg",
        description: "Empower your workforce with the power of skilling by dojo in manufacturing. In this, learn how to design a world-class training center that aligns with your business goals & maximizes your employees' potential. From selecting the right training modules.",
        link: "dojo-in-manufacturing"
    },
    {
        id: 47,
        title: "Strategic Cost Reduction: Tips and Strategies for Maximising Efficiency",
        date: "September 9, 2019",
        image: "assets/images/blog/banner3.jpg",
        description: "Maximize your profitability and stay ahead of the competition with a strategic approach to cost reduction and budgeting. In this, we'll walk you through the process of identifying and prioritizing cost-saving opportunities, developing an effective budgeting strategy.",
        link: "cost-reduction-and-budgeting-process"
    },
];

export default function Home() {
    const [visiblePosts, setVisiblePosts] = useState(6);

    const loadMorePosts = () => {
        setVisiblePosts((prev) => prev + 6);    
    };

    return (
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog">
            <section className="blog-one">
                <div className="container">
                    <div className="row">
                        {blogPosts.slice(0, visiblePosts).map((post) => (
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" key={post.id} data-wow-delay="300ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src={post.image} alt={post.title} className="main-img" />
                                            <img src={post.image} alt={post.title} className="hover-img" />
                                            <Link href={post.link} className="blog-one__link"><span className="sr-only"></span></Link>
                                        </div>
                                    </div>
                                    <Link 
                                        href={post.link} 
                                        ref={el => {
                                            if (el) {
                                                el.style.setProperty("font-size", "17px", "important");
                                            }
                                        }}
                                    >
                                        <span className="icon-calender"></span> 
                                        <span 
                                            ref={el => {
                                                if (el) {
                                                    el.style.setProperty("font-size", "17px", "important");
                                                }
                                            }}
                                        >
                                            {post.date}
                                        </span>
                                    </Link>
                                    <div className="blog-one__content">
                                        <h3 
                                            className="blog-one__title"
                                            ref={el => {
                                                if (el) {
                                                    el.style.setProperty("font-size", "24px", "important");
                                                }
                                            }}
                                        >
                                            <Link 
                                                href={post.link}
                                                ref={el => {
                                                    if (el) {
                                                        el.style.setProperty("font-size", "24px", "important");
                                                    }
                                                }}
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p 
                                            ref={el => {
                                                if (el) {
                                                    el.style.setProperty("font-size", "18px", "important");
                                                }
                                            }}
                                        >
                                            {post.description}
                                        </p>
                                        <div className="blog-one__read-more">
                                            <Link 
                                                href={post.link}
                                                ref={el => {
                                                    if (el) {
                                                        el.style.setProperty("font-size", "17px", "important");
                                                    }
                                                }}
                                            >
                                                Read more<span className="icon-dabble-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visiblePosts < blogPosts.length && (
                        <div className="text-center mt-4">
                            <button 
                                className="btn" 
                                style={{
                                    backgroundColor: "#eb7434", 
                                    color: "white", 
                                    padding: "12px 24px", 
                                    borderRadius: "5px", 
                                    border: "none",
                                    cursor: "pointer"
                                }}
                                ref={el => {
                                    if (el) {
                                        el.style.setProperty("font-size", "18px", "important");
                                    }
                                }}
                                onClick={loadMorePosts}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
