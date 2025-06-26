"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function CareerPage() {
    const [selectedOption, setSelectedOption] = useState("job");

    const images = [
        { img: "1.jpeg" }, { img: "2.jpg" }, { img: "3.jpeg" },
        { img: "4.webp" }, { img: "5.webp" }, { img: "6.webp" },
        { img: "7.jpeg" }, { img: "8.jpeg" }, { img: "9.jpeg" },
    ];

    const jobData = [
        { title: "Business Development Executive | Interns", description: "Business Development Intern" }
    ];
    const internshipData = [
        { title: "Business Development Executive", description: "General Roles and Responsibilities of Business Development Trainee / Executive" },
        { title: "ROS Engineer (Robotics)", description: "Responsible for engineering solutions to automation problems" }
    ];

    return (
      <Layout headerStyle={6} footerStyle={6}>
        {/* Banner Image */}
        <div className="career-banner">
          <img
            src="/assets/images/career/career img.webp"
            alt="Career Banner"
            style={{
              width: "100%",
              height: "300px",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Heading */}
        <div
          className="section-title text-center"
          style={{
            display: "flex !important",
            justifyContent: "center !important",
            alignItems: "center !important",
            marginTop: "30px !important",
            marginBottom: "30px !important",
          }}
        >
          <h4
            className="section-title__title"
            style={{ fontSize: "30px", margin: "0 auto" }}
          >
            Welcome to Careers at Tetrahedron
          </h4>
        </div>

        {/* Career Images Grid */}
        <div className="container">
          <div className="row">
            {images.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={`${100 * (index + 1)}ms`}
                style={{borderRadius: "20px !important", ":hover": {borderRadius: "20px !important"}}}
              >
                <div className="services-four__single" style={{":hover": {borderRadius: "20px !important"}}}>
                  <div className="services-four__img" style={{":hover": {borderRadius: "20px !important"}}}>
                    <img
                      src={`/assets/images/career/${item.img}`}
                      alt={`Career ${index + 1}`}
                      style={{borderRadius: "20px !important", ":hover": {borderRadius: "20px !important"}}}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="container text-center">
          <h3 style={{ marginTop: "40px", fontSize: "30px" }}>
            Open Positions
          </h3>

          {/* Toggle Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              margin: "20px 0",
            }}
          >
            <button
              onClick={() => setSelectedOption("job")}
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                cursor: "pointer",
                backgroundColor:
                  selectedOption === "job" ? "#ff6600" : "#f0f0f0",
                color: selectedOption === "job" ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Job
            </button>

            <button
              onClick={() => setSelectedOption("internship")}
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                cursor: "pointer",
                backgroundColor:
                  selectedOption === "internship" ? "#ff6600" : "#f0f0f0",
                color: selectedOption === "internship" ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Internship
            </button>
          </div>

          {/* Job & Internship Details */}
          <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100% !important' }}>
            {(selectedOption === "job" ? jobData : internshipData).map(
              (item, index) => (
                <div
                  key={index}
                  className="col-md-6 col-sm-12"
                  style={{ marginBottom: "20px", display: 'flex', justifyContent: 'center', width: '100%' }}
                >
                  <div
                    className="services-four__single"
                    style={{
                      padding: "20px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      minWidth: '320px',
                      maxWidth: '480px',
                      width: '100%',
                      margin: '0 auto',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <h5 style={{ textAlign: 'center', width: '100%' }}>{item.title}</h5>
                    <p style={{ textAlign: 'center', width: '100%' }}>{item.description}</p>
                    <button
                      style={{
                        padding: "8px 15px",
                        backgroundColor: "#ff6600",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        margin: '0 auto',
                        display: 'block',
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* TMS Work Culture Section */}
        <div
          className="container text-center"
          style={{ textAlign: "center" }}
        >
          <h4
            className="section-title__title"
            style={{ fontSize: "30px", marginBottom: "20px" }}
          >
            TMS Work Culture
          </h4>

          <div className="row align-items-center">
            <div className="col-md-6" style={{ display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
              <img
                src="/assets/images/career/tms culture.png"
                alt="TMS Work Culture"
                style={{
                  width: "70% !important",
                  borderRadius: "10px !important",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2) !important",
                  display: 'block !important',
                  margin: '0 auto !important',
                }}
              />
            </div>
            <div className="col-md-6" style={{ display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
              <div style={{ textAlign: 'left !important', width: '100% !important' }}>
              <p>
                Having a positive work culture is a must nowadays. It helps
                employees focus and maximize productivity.
              </p>
              <p>
                We ensure job satisfaction and encourage long-term career
                growth.
              </p>
              <p>
                We balance formal and informal routines to provide great
                flexibility and support.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* TMS Values Section */}
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <h4
            className="section-title__title"
            style={{ fontSize: "30px", marginBottom: "20px" }}
          >
            TMS Values
          </h4>

          <div className="row align-items-center">
            <div className="col-md-6" style={{ display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
              <div style={{ textAlign: 'left !important', width: '100% !important' }}>
              <p>Our work speaks of our efforts.</p>
              <p>We believe in integrity – doing what is right.</p>
              <p>
                We encourage teamwork and a shared business goal to build a
                strong personality.
              </p>
            </div>
            </div>
            <div className="col-md-6" style={{ display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
              <img
                src="/assets/images/career/tms values.png"
                alt="TMS Values"
                style={{
                  width: "70% !important",
                  borderRadius: "10px !important",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2) !important",
                  display: 'block !important',
                  margin: '0 auto !important',
                }}
              />
            </div>
          </div>
        </div>
        {/* TMS Work Culture Section */}
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <h4
            className="section-title__title"
            style={{ fontSize: "30px", marginBottom: "20px" }}
          >
            Boost Your Career
          </h4>

          <div className="row align-items-center">
            <div className="col-md-6" style={{ display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
              <img
                src="/assets/images/career/tms culture.png"
                alt="TMS Work Culture"
                style={{
                  width: "70% !important",
                  borderRadius: "10px !important",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2) !important",
                  display: 'block !important',
                  margin: '0 auto !important',
                }}
              />
            </div>
            <div className="col-md-6" style={{ display: 'flex !important', flexDirection: 'column !important', alignItems: 'center !important', justifyContent: 'center !important' }}>
              <div style={{ textAlign: 'left !important', width: '100% !important' }}>
              <p>
                  We provide opportunities to grow and learn and help you to enhance your skills. You can also take guidance from our mentors whenever you feel like.Gain exposure and boost your learning skills and experience for your better career.
              </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}
