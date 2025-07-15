import React, { useRef, useState } from "react";
import ContactFormModal from "./ContactFormModal";
import Link from "next/link";

export default function BlogDetails({ blog, recentBlogs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  if (!blog) return null;

  // Helper to render section headings with ref
  const renderHeading = (text, level = 2) => {
    const Tag = `h${level}`;
    const ref = useRef(null);
    return (
      <Tag
        ref={node => {
          if (node) node.style.setProperty("font-family", "var(--font-poppins)", "important");
        }}
        style={{ fontWeight: 700, margin: "24px 0 12px 0" }}
      >
        {text}
      </Tag>
    );
  };

  // Helper to render paragraphs with ref
  const renderParagraph = (text) => (
    <p
      ref={node => {
        if (node) node.style.setProperty("font-family", "var(--font-poppins)", "important");
      }}
      style={{ fontSize: "18px", marginBottom: "16px" }}
    >
      {text}
    </p>
  );

  // Helper to render section images
  // Alternate float direction for section images (left/right)
  let imageFloatDirection = 0; // 0: left, 1: right
  const renderImage = (src, alt = "Blog Image", isMain = false, floatDir = "left") => (
    <img
      src={src}
      alt={alt}
      style={{
        width: isMain ? "100%" : 240,
        maxWidth: isMain ? 600 : 320,
        borderRadius: 8,
        margin: isMain
          ? "16px 0"
          : floatDir === "left"
            ? "0 24px 16px 0"
            : "0 0 16px 24px",
        float: isMain ? undefined : floatDir,
        display: isMain ? "block" : "inline-block"
      }}
    />
  );

  // Count headings to insert CTA after every 2
  let headingCount = 0;

  return (
    <div className="blog-details-page" style={{ background: "#fff" }}>
      {/* Banner */}
      <div
        style={{
          background: "#0a2c5e",
          color: "#fff",
          minHeight: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 0,
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {blog.title && (
            <h1
              ref={titleRef}
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 40, margin: 0, color: "#fff" }}
            >
              {blog.title}
            </h1>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="container" style={{ display: "flex", flexDirection: "row", gap: 32, maxWidth: 1200, margin: "32px auto" }}>
        {/* Blog Content */}
        <div style={{ flex: 3, minWidth: 0 }}>
          {blog.image && renderImage(blog.image, blog.title, true)}
          {blog.sections && blog.sections.map((section, idx) => {
            let ctaToRender = null;
            let content = [];
            // Render heading if present
            if (section.heading) {
              headingCount++;
              content.push(renderHeading(section.heading, 2));
            }
            // Always render image if present (alternate left/right)
            if (section.image) {
              const floatDir = imageFloatDirection % 2 === 0 ? "left" : "right";
              imageFloatDirection++;
              // Render image and content side by side
              content.push(
                <div key={`img-content-${idx}`} style={{ overflow: "auto", minHeight: 120 }}>
                  {renderImage(section.image, undefined, false, floatDir)}
                  <div style={{ overflow: "hidden" }}>
                    {/* Content paragraphs will be rendered below */}
                  </div>
                </div>
              );
            }
            // Render content paragraphs (if image present, render after image; else, just render)
            if (section.content) {
              if (section.image) {
                // If image, render paragraphs inside the floated image container
                content[content.length - 1] = (
                  <div key={`img-content-${idx}`} style={{ overflow: "auto", minHeight: 120 }}>
                    {renderImage(section.image, undefined, false, imageFloatDirection % 2 === 1 ? "left" : "right")}
                    <div style={{ overflow: "hidden" }}>
                      {section.content.map((para, i) => renderParagraph(para))}
                    </div>
                  </div>
                );
              } else {
                section.content.forEach((para, i) => content.push(renderParagraph(para)));
              }
            }
            // Insert CTA after every 2 headings
            if (blog.cta && headingCount > 0 && headingCount % 2 === 0) {
              ctaToRender = (
                <div key={`cta-${idx}`} style={{ margin: "40px 0", background: "#f5f7fa", padding: 24, borderRadius: 12, textAlign: "center" }}>
                  {blog.cta.text && (
                    <h3
                      ref={ctaRef}
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: 24, marginBottom: 16 }}
                    >
                      {blog.cta.text}
                    </h3>
                  )}
                  <button
                    type="button"
                    className="thm-btn"
                    style={{ fontSize: 18, padding: "12px 32px", borderRadius: 8, background: "#ff5722", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer" }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    {blog.cta.buttonText || "Contact Us"}
                  </button>
                </div>
              );
            }
            return (
              <React.Fragment key={idx}>
                {content}
                {ctaToRender}
              </React.Fragment>
            );
          })}
          {/* Always render CTA at the end */}
          {blog.cta && (
            <div style={{ margin: "40px 0", background: "#f5f7fa", padding: 24, borderRadius: 12, textAlign: "center" }}>
              {blog.cta.text && (
                <h3
                  ref={ctaRef}
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: 24, marginBottom: 16 }}
                >
                  {blog.cta.text}
                </h3>
              )}
              <button
                type="button"
                className="thm-btn"
                style={{ fontSize: 18, padding: "12px 32px", borderRadius: 8, background: "#ff5722", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer" }}
                onClick={() => setIsModalOpen(true)}
              >
                {blog.cta.buttonText || "Contact Us"}
              </button>
            </div>
          )}
        </div>
        {/* Sidebar */}
        <aside style={{ flex: 1, minWidth: 260, maxWidth: 320 }}>
          <div style={{ background: "#f5f7fa", borderRadius: 12, padding: 24, marginBottom: 32 }}>
            <h3
              ref={node => {
                if (node) node.style.setProperty("font-family", "var(--font-poppins)", "important");
              }}
              style={{ fontWeight: 700, fontSize: 22, marginBottom: 20 }}
            >
              Recent Blogs
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recentBlogs && recentBlogs.slice(0, 4).map((b, i) => (
                <li key={b.slug} style={{ marginBottom: 18, display: "flex", alignItems: "center" }}>
                  {b.image && (
                    <img src={b.image} alt={b.title} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8, marginRight: 12 }} />
                  )}
                  <div>
                    <Link href={`/${b.slug}`} style={{ color: "#0a2c5e", fontWeight: 600, textDecoration: "none", fontSize: 16 }}>
                      {b.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      {/* Contact Modal */}
      <ContactFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        buttonText={blog.cta?.buttonText || "Contact Us"}
      />
    </div>
  );
} 