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
    { id: 13, name: "Gadepu Abhi Patil", imgSrc: "/assets/images/team/Gudepu Abhi Patil.jpg" },
    { id: 14, name: "Bedadeepa Sahoo", imgSrc: "/assets/images/team/Bedadeepa Sahoo.jpg" },
    { id: 15, name: "Shreya Semwal", imgSrc: "/assets/images/team/Shreya Semwal.jpg" },
    { id: 16, name: "Shruti Singh", imgSrc: "/assets/images/team/M20.jpg" },
    { id: 17, name: "Piyush Singh", imgSrc: "/assets/images/team/Piyush Singh.jpg" },
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
                                <div key={member.id} className="col-xl-3 col-lg-6 col-md-6 mb-4"> {/* Added mb-4 for spacing between rows */}
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
            */}
            <style jsx global>{`
                .team-one__single {
                    background-color: #001659; /* Optional: give a background to the card */
                    border-radius: 8px; /* Optional: rounded corners */
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Optional: subtle shadow */
                    overflow: hidden; /* Ensures content respects border-radius */
                    display: flex;
                    flex-direction: column;
                    height: 100%; /* Helps align cards if the parent row uses flexbox and aligns items */
                }

                .team-one__img-box {
                    /* This box might not need specific styles if .team-one__img handles dimensions */
                }

                .team-one__img {
                    width: 100%;
                    height: 280px; /* KEY: Fixed height for image container. Adjust as needed. */
                    overflow: hidden; /* Important to clip the image properly */
                    background-color:rgba(224, 224, 224, 0.17); /* Placeholder color if image is missing or transparent */
                }

                .team-one__img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* KEY: Ensures image covers the area, maintains aspect ratio, crops if needed. */
                    object-position: center top; /* Tries to keep top of the image visible, good for portraits. Use 'center center' if preferred. */
                    display: block; /* Removes any extra space below the image */
                }

                .team-one__content {
                    padding: 20px 15px; /* Consistent padding */
                    text-align: center; /* Centers the name text */
                    flex-grow: 1; /* Allows this content area to expand, helping equalize card height */
                    display: flex;
                    flex-direction: column;
                    justify-content: center; /* Vertically centers the name within this section */
                    min-height: 50px; /* KEY: Minimum height for the content area. Adjust to fit 1-2 lines of typical name length. */
                }

                .team-one__title {
                    font-size: 1.15rem; /* KEY: Consistent font size for all names. Adjust as needed. */
                    line-height: 1.3;   /* Spacing for text if it wraps to two lines */
                    font-weight: 600; /* Or your theme's preferred weight, e.g., 700 for bolder */
                    margin: 0; /* Reset default h3 margin */
                }

                .team-one__title a {
                    color: #222; /* Choose your desired link color */
                    text-decoration: none;
                }

                .team-one__title a:hover {
                    color: #007bff; /* Example hover color */
                }

                /* Ensure columns themselves allow for flex behavior for height: 100% to work well on .team-one__single */
                .col-xl-3, .col-lg-6, .col-md-6 {
                    display: flex; /* Makes the column a flex container if not already */
                    flex-direction: column; /* Stacks items vertically within the column */
                }
                 /* Add some margin-bottom to columns for spacing, if not handled by .row's gutter */
                .row > .col-xl-3, .row > .col-lg-6, .row > .col-md-6 {
                    margin-bottom: 24px; /* Or use Bootstrap's 'mb-4' etc. on the column div itself */
                }


                /* Responsive adjustments - example */
                @media (max-width: 991px) { /* Corresponds to Bootstrap's lg breakpoint */
                    .team-one__img {
                        height: 260px; /* Adjust height for tablets */
                    }
                    .team-one__title {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 767px) { /* Corresponds to Bootstrap's md breakpoint */
                    .team-one__img {
                        height: 240px; /* Adjust height for smaller tablets/large phones */
                    }
                }

                @media (max-width: 575px) { /* Corresponds to Bootstrap's sm breakpoint */
                    .team-one__img {
                        height: 220px; /* Adjust height for mobile phones */
                    }
                    .team-one__title {
                        font-size: 1rem;
                    }
                    .team-one__content {
                        min-height: 75px;
                        padding: 15px 10px;
                    }
                }
            `}</style>
        </>
    )
}
