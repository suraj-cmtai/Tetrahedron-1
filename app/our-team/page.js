'use client'
import Layout from "@/components/layout/Layout"

// Data array for team members
const teamMembersData = [
    { id: 1, name: "Nitin Kumar", imgSrc: "/assets/images/team/M1.png" },
    { id: 2, name: "Alok Sahu", imgSrc: "/assets/images/team/M2.png" },
    // { id: 3, name: "Jyoti Prakash Dhupal", imgSrc: "/assets/images/team/M3.png" },
    // { id: 4, name: "Shubham Katoch", imgSrc: "/assets/images/team/Subham Koch.jpg" },
    // { id: 5, name: "Penushya", imgSrc: "/assets/images/team/Penushya.jpg" },
    // { id: 6, name: "Shubham Verma", imgSrc: "/assets/images/team/M6.png" },
    // { id: 7, name: "Suraj Singh", imgSrc: "/assets/images/team/M7.png" },
    // { id: 8, name: "Priya Dwivedi", imgSrc: "/assets/images/team/M17.jpg" },
    // { id: 9, name: "Rajat Yadav", imgSrc: "/assets/images/team/Rajat Yadav.jpg" },
    // { id: 10, name: "Saurabh Verma", imgSrc: "/assets/images/team/Saurabh Verma.jpg" },
    // { id: 11, name: "Tausif Ahamed", imgSrc: "/assets/images/team/Tausif Ahamed.jpg" },
    // { id: 12, name: "Ashad", imgSrc: "/assets/images/team/Ashad.jpg" },
    // { id: 13, name: "Gudepu Abhilash", imgSrc: "/assets/images/team/Gudepu Abhi Patil.jpg" },
    // { id: 14, name: "Bedadeepa Sahoo", imgSrc: "/assets/images/team/Bedadeepa Sahoo.jpg" },
    // { id: 15, name: "Shreya Semwal", imgSrc: "/assets/images/team/Shreya Semwal.jpg" },
    // { id: 16, name: "Shruti Singh", imgSrc: "/assets/images/team/M20.jpg" },
    // { id: 17, name: "Piyush Singh", imgSrc: "/assets/images/team/Piyush Singh.jpg" },
    // { id: 18, name: "Vikram", imgSrc: "/assets/images/team/Vikram.jpg" },
    // { id: 19, name: "Suryakant", imgSrc: "/assets/images/team/Suryakant.jpg" },
    // { id: 20, name: "Darga karthik", imgSrc: "/assets/images/team/Darga karthik.jpg" },
    // { id: 21, name: "Vishal Thakur", imgSrc: "/assets/images/team/Vishal Thakur.jpg" },
];

// 'use client'
// import Layout from "@/components/layout/Layout"

// // Data array for team members
// const teamMembersData = [
//     { id: 1, name: "Nitin Kumar", imgSrc: "/assets/images/team/M1.png" },
//     { id: 2, name: "Alok Sahu", imgSrc: "/assets/images/team/M2.png" },
//     // Add more members...
// ]

export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Our Executives">
                <section className="team-page">
                    <div className="container">
                        <div className="team-grid">
                            {teamMembersData.map((member) => (
                                <div key={member.id} className="mycard-team-one__single">
                                    {/* Image Area */}
                                    <div className="mycard-team-one__img">
                                        {member.imgSrc && (
                                            <img
                                                src={member.imgSrc}
                                                alt={member.name || "Team member photo"}
                                            />
                                        )}
                                    </div>
                                    {/* Name Banner */}
                                    <div className="mycard-team-one__content">
                                        <h3 className="mycard-team-one__title">
                                            {member.name || "Name Here"}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>

            <style jsx global>{`
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* Always 2 columns */
                    gap: 40px; /* More spacing between cards */
                    max-width: 900px; /* Keep grid narrower for bigger cards */
                    margin: 0 auto; /* Center the grid */
                }

                @media (max-width: 767px) {
                    .team-grid {
                        grid-template-columns: 1fr; /* 1 column on mobile */
                        max-width: 500px;
                    }
                }

                .mycard-team-one__single {
                    position: relative;
                    overflow: visible;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
                    background-color: transparent;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 100%;
                    padding-bottom: 25px;
                }

                .mycard-team-one__img {
                    position: relative;
                    width: 100%;
                    padding-bottom: 120%; /* Taller to make photo look bigger */
                    background: linear-gradient(135deg, #3023AE, #8549B2);
                    display: block;
                    border-radius: 20px;
                    overflow: hidden;
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

                .mycard-team-one__content {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -1px;
                    width: auto;
                    min-width: 120px;
                    max-width: calc(100% - 50px);
                    background-color: #ffffff;
                    border-radius: 10px;
                    padding: 8px 15px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    z-index: 30;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid var(--elitecons-base);
                }

                .mycard-team-one__title {
                    font-size: 1rem;
                    line-height: 1.25;
                    font-weight: 600;
                    color: #111111;
                    margin: 0;
                    padding: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                }

                @media (min-width: 1200px) {
                    .mycard-team-one__title { font-size: 1.05rem; }
                    .mycard-team-one__content { padding: 10px 18px; }
                    .mycard-team-one__single { padding-bottom: 30px; }
                }
                @media (max-width: 991.98px) {
                    .mycard-team-one__title { font-size: 0.95rem; }
                    .mycard-team-one__content { padding: 7px 12px; bottom: -16px; }
                    .mycard-team-one__single { padding-bottom: 20px; }
                }
                @media (max-width: 767.98px) {
                    .mycard-team-one__title { font-size: 0.9rem; }
                    .mycard-team-one__content { padding: 6px 10px; bottom: 0px; min-width: 100px; border-radius: 8px; }
                }
            `}</style>
        </>
    )
}
