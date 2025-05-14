"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import Layout from "@/components/layout/Layout"
import Banner from "@/components/home/Banner"
import Services from "@/components/home/Services"
import About from "@/components/home/About"
import Business from "@/components/home/Business"
import Awards from "@/components/home/Awards"
import Testimonial from "@/components/home/Testimonial"

export default function Home() {
    const [showForm, setShowForm] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const checkFormVisibility = () => {
            const lastClosed = localStorage.getItem("leadFormClosed")
            if (!lastClosed || Date.now() - Number(lastClosed) > 120000) {
                setShowForm(true)
            } else {
                setShowForm(false)
            }
        }

        checkFormVisibility()
        const interval = setInterval(checkFormVisibility, 10000)

        return () => clearInterval(interval)
    }, [pathname])

    const handleCloseForm = () => {
        setShowForm(false)
        localStorage.setItem("leadFormClosed", Date.now().toString())
    }

    const handleSubmitForm = () => {
        alert("Form submitted!")
        handleCloseForm()
    }

    return (
        <Layout>
            <div style={{ zoom: '80%' }}>
                <Banner />
                <About />
                <Business />
                <Services />
                <Awards />
                <Testimonial />
            </div>

            {showForm && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, width: "100%", height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: 9999
                }}>
                    <div style={{
                        background: "linear-gradient(135deg, #ffffff, #f5f5f5)",
                        padding: "30px",
                        borderRadius: "16px",
                        width: "90%",
                        maxWidth: "450px",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        position: "relative",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }} className="hide-scroll">
                        <div onClick={handleCloseForm} style={{
                            position: "absolute",
                            top: "12px",
                            right: "16px",
                            cursor: "pointer",
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#555"
                        }}>✖</div>

                        <h2 style={{
                            textAlign: "center",
                            marginBottom: "20px",
                            fontSize: "22px",
                            color: "#333"
                        }}>Get in Touch</h2>

                        <input type="text" placeholder="Full Name*" required style={inputStyle} />
                        <input type="text" placeholder="Company Name*" required style={inputStyle} />
                        <input type="text" placeholder="Location*" required style={inputStyle} />
                        <input type="email" placeholder="Email*" required style={inputStyle} />
                        <input type="tel" placeholder="Mobile No.*" required style={inputStyle} />
                        <input type="text" placeholder="Enter your industry" style={inputStyle} />
                        <textarea placeholder="Your Requirements*" rows={3} required style={{ ...inputStyle, resize: "none" }}></textarea>

                        <div style={{ textAlign: "center", marginTop: "15px" }}>
                            <button onClick={handleSubmitForm} style={submitButtonStyle}>Submit</button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </Layout>
    )
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    fontSize: "14px",
    outline: "none"
}

const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "var(--elitecons-base)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s ease"
}
