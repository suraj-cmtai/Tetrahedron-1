'use client'
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import {blogPosts} from "@/lib/blogData";

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
