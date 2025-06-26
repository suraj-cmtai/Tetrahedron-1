export async function GET(request) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.tetrahedron.in/</loc><priority>1.0</priority></url>
  <url><loc>https://www.tetrahedron.in/about-us</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/about-us/privacy-policy</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/about-us/terms-of-services</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/automated-guided-vehicle-manufacturers</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/blog-details</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/blogs</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/career</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/case-studies</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/consulting</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/contact</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/faq</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/gallery</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/pricing</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/privacy-policy</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/project-details</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/projects</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/service-details</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/services</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/skill-training</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/team</loc><priority>0.8</priority></url>
  <url><loc>https://www.tetrahedron.in/terms-of-services</loc><priority>0.6</priority></url>
  <url><loc>https://www.tetrahedron.in/testimonials</loc><priority>0.8</priority></url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
