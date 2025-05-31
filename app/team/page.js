'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

// Data array for team members
const teamMembersData = [
    { id: 1, name: "Nitin Kumar", imgSrc: "/assets/images/team/M1.png" },
    { id: 2, name: "Alok Sahu", imgSrc: "/assets/images/team/M2.png" },
    { id: 3, name: "Jyoti Prakash Dhupal", imgSrc: "/assets/images/team/M3.png" },
    { id: 4, name: "Shubham Katoch", imgSrc: "/assets/images/team/Subham Koch.jpg" },
    { id: 5, name: "Penushya", imgSrc: "/assets/images/team/Penushya.jpg" },
    { id: 6, name: "Shubham Verma", imgSrc: "/assets/images/team/M6.png" },
    { id: 7, name: "Suraj Singh", imgSrc: "/assets/images/team/M7.png" },
    { id: 8, name: "Priya Dwivedi", imgSrc: "/assets/images/team/M17.jpg" },
    { id: 9, name: "Rajat Yadav", imgSrc: "/assets/images/team/Rajat Yadav.jpg" },
    { id: 10, name: "Saurabh Verma", imgSrc: "/assets/images/team/Saurabh Verma.jpg" },
    { id: 11, name: "Tausif Ahamed", imgSrc: "/assets/images/team/Tausif Ahamed.jpg" },
    { id: 12, name: "Ashad", imgSrc: "/assets/images/team/Ashad.jpg" },
    { id: 13, name: "Gudepu Abhilash", imgSrc: "/assets/images/team/Gudepu Abhi Patil.jpg" },
    { id: 14, name: "Bedadeepa Sahoo", imgSrc: "/assets/images/team/Bedadeepa Sahoo.jpg" },
    { id: 15, name: "Shreya Semwal", imgSrc: "/assets/images/team/Shreya Semwal.jpg" },
    { id: 16, name: "Shruti Singh", imgSrc: "/assets/images/team/M20.jpg" },
    { id: 17, name: "Piyush Singh", imgSrc: "/assets/images/team/Piyush Singh.jpg" },
    { id: 18, name: "Vikram", imgSrc: "/assets/images/team/Vikram.jpg" },
    { id: 19, name: "Suryakant", imgSrc: "/assets/images/team/Suryakant.jpg" },
    { id: 20, name: "Darga karthik", imgSrc: "/assets/images/team/Darga karthik.jpg" },
    { id: 21, name: "Vishal Thakur", imgSrc: "/assets/images/team/Vishal Thakur.jpg" },
    // Add other team members here if they were commented out and you want to include them
    // Example: { id: 17, name: "Deepak Kumar", imgSrc: "/assets/images/team/M16.png" },
];

export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Team">
                {/*Team Page Start*/}
                <section className="team-page">
                    <div className="container">
                        <div className="row">
                            {teamMembersData.map((member) => (
                                <div key={member.id} className="col-xl-3 col-lg-6 col-md-6 mb-4"> {/* Bootstrap columns: 4 on XL, 2 on LG, 2 on MD, 1 on SM and XS. mb-4 for spacing. */}
                                    <div className="team-one__single">
                                        <div className="team-one__img-box">
                                            <div className="team-one__img">
                                                <img src={member.imgSrc} alt={member.name} />
                                            </div>
                                        </div>
                                        <div className="team-one__content">
                                            <h3 className="team-one__title">
                                                <Link href="#">{member.name}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/*Team Page End*/}
            </Layout>

            {/* 
              IMPORTANT: The CSS rules below are provided to ensure consistency.
              Ideally, these styles should be part of your global CSS file (e.g., styles/globals.css)
              or your theme's stylesheet, rather than a <style jsx global> block in each component.
              Adjust values like heights, font sizes, and paddings to match your desired design.
              
              A NOTE ON IMAGES: For best results with `object-fit: cover`, try to use source images
              that have a similar aspect ratio or where the main subject is relatively centered.
              This will minimize undesired cropping.
            */}
            <style jsx global>{`
                .team-one__single {
                    background-color: #001659; /* Dark background for the card */
                    border-radius: 8px; 
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); 
                    overflow: hidden; 
                    display: flex;
                    flex-direction: column;
                    height: 100%; 
                }

                .team-one__img-box {
                    /* This box might not need specific styles if .team-one__img handles dimensions */
                }

                .team-one__img {
                    width: 100%;
                    height: 280px; /* Default fixed height for image container */
                    overflow: hidden; 
                    background-color:rgba(224, 224, 224, 0.17); /* Placeholder color */
                }

                .team-one__img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Ensures image covers the area, maintains aspect ratio, crops if needed. */
                    object-position: center center; /* Tries to keep the center of the image visible. Changed from 'center top'. */
                    display: block; 
                }

                .team-one__content {
                    padding: 20px 15px; 
                    text-align: center; 
                    flex-grow: 1; 
                    display: flex;
                    flex-direction: column;
                    justify-content: center; 
                    min-height: 60px; /* Minimum height for the content area. Increased slightly. */
                }

                .team-one__title {
                    font-size: 1.15rem; 
                    line-height: 1.3;   
                    font-weight: 600; 
                    margin: 0; 
                }

                .team-one__title a {
                    color: black; /* CHANGED: White color for text on dark background */
                    text-decoration: none;
                }

                .team-one__title a:hover {
                    color: #e0e0e0; /* CHANGED: Light gray hover color for text on dark background */
                }

                /* Ensure columns themselves allow for flex behavior for height: 100% to work well on .team-one__single */
                .col-xl-3, .col-lg-6, .col-md-6 {
                    display: flex; 
                    flex-direction: column; 
                }
                 /* Bootstrap's mb-4 class on the column div itself is handling bottom margin. 
                    If you remove mb-4, you might need:
                    .row > .col-xl-3, .row > .col-lg-6, .row > .col-md-6 {
                        margin-bottom: 24px; 
                    }
                 */


                /* Responsive adjustments */
                @media (max-width: 991px) { /* Tablets (Bootstrap's lg breakpoint) */
                    .team-one__img {
                        height: 260px; 
                    }
                    .team-one__title {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 767px) { /* Small tablets/large phones (Bootstrap's md breakpoint) */
                    /* Cards will be 2 per row here due to col-md-6 */
                    .team-one__img {
                        height: 240px;
                    }
                     .team-one__content {
                        min-height: 70px; 
                    }
                }

                @media (max-width: 575px) { /* Mobile phones (Bootstrap's sm breakpoint) */
                                      /* Cards will be 1 per row (full width) */
                    .team-one__img {
                        height: 230px; /* Slightly adjusted from 220px. Experiment with this value. */
                    }
                    .team-one__title {
                        font-size: 1rem;
                    }
                    .team-one__content {
                        min-height: 75px; /* Ensure enough space for potentially wrapped names */
                        padding: 15px 10px;
                    }
                }
            `}</style>
        </>
    )
}
