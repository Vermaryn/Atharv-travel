export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api",
      ],
    },
    sitemap: "https://atvtravels.com/sitemap.xml",
  };
}