'use client'
import Layout from "@/components/layout/Layout"

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
];

export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Team">
                <section className="team-page">
                    <div className="container">
                        <div className="row">
                            {teamMembersData.map((member) => (
                                <div key={member.id} className="col-xl-3 col-lg-6 col-md-6 mb-4">
                                    <div className="mycard-team-one__single">
                                        {/* Image Area: Gradient, Rounded Corners for image */}
                                        <div className="mycard-team-one__img">
                                            {member.imgSrc && (
                                                <img
                                                    src={member.imgSrc}
                                                    alt={member.name || "Team member photo"}
                                                />
                                            )}
                                        </div>
                                        {/* Name Banner: Half in, Half out from bottom */}
                                        <div className="mycard-team-one__content">
                                            <h3 className="mycard-team-one__title">
                                                {member.name || "Name Here"}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>

            <style jsx global>{`
                .col-xl-3, .col-lg-6, .col-md-6 {
                    display: flex;
                    flex-direction: column;
                }

                .mycard-team-one__single {
                    position: relative; /* For absolute positioning of banner */
                    /* NO border-radius here, as banner needs to overflow */
                    /* NO overflow: hidden here, to allow banner to go outside */
                    overflow: visible; /* Explicitly set to allow banner to hang off */
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12); /* Shadow for the card */
                    background-color: transparent; /* Card itself can be transparent or a very light color */
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                    padding-bottom: 25px; /* Add padding at the bottom of the card if banner is large, to prevent overlap with next row items due to box-shadow visibility */
                                          /* This might need adjustment based on banner height */
                }

                .mycard-team-one__img { /* Image Area */
                    position: relative;
                    width: 100%;
                    padding-bottom: 100%; /* 1:1 aspect ratio */
                    background: linear-gradient(135deg, #3023AE, #8549B2); /* Gradient */
                    display: block;
                    border-radius: 20px; /* Rounded corners for the image/gradient area */
                    overflow: hidden; /* Clip image to these rounded corners */
                }

                .mycard-team-one__img img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    display: block;
                }

                .mycard-team-one__content { /* Name Banner */
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    
                    /* Positioning: Half banner height outside */
                    /* Assuming banner height approx 36px (padding 8+8 + line-height ~20) */
                    bottom: -1px; /* Adjust this value based on actual banner height */
                                    /* (negative half of its total height) */
                    
                    width: auto;
                    min-width: 120px;
                    max-width: calc(100% - 50px); /* Leave 25px space from card edges */
                    
                    background-color: #ffffff;
                    border-radius: 10px; /* Slightly less rounded for banner */
                    padding: 8px 15px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Stronger shadow for banner */
                    z-index: 30; /* High z-index */
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    /* TEMPORARY DEBUG BORDER - check banner position and content */
                    border: 2px solid  var(--elitecons-base); 
                    
                }

                .mycard-team-one__title {
                    font-size: 0.95rem; /* Adjust as needed */
                    line-height: 1.25;
                    font-weight: 600; /* Slightly less bold if 700 is too much */
                    color: #111111; /* Dark grey, almost black */
                    margin: 0;
                    padding: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                }

                /* Responsive adjustments */
                @media (min-width: 1200px) { /* XL */
                    .mycard-team-one__title { font-size: 1rem; }
                    .mycard-team-one__content { 
                        padding: 10px 18px; 
                        /* If banner height changes with padding, adjust 'bottom' too */
                        /* Example: if height is 40px, bottom: -20px; */
                    }
                    .mycard-team-one__single { padding-bottom: 30px; }
                }
                @media (max-width: 991.98px) { /* md-lg */
                    .mycard-team-one__title { font-size: 0.9rem; }
                    .mycard-team-one__content { 
                        padding: 7px 12px; 
                        bottom: -16px; /* Adjust if banner height changes */
                    }
                     .mycard-team-one__single { padding-bottom: 20px; }
                }
                @media (max-width: 767.98px) { /* sm */
                    .mycard-team-one__title { font-size: 0.85rem; }
                    .mycard-team-one__content { 
                        padding: 6px 10px; 
                        bottom: 0px; /* Adjust if banner height changes */
                        min-width: 100px;
                        border-radius: 8px;
                    }
                }

            `}</style>
        </>
    )
}
