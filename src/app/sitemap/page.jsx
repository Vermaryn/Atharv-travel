import Link from "next/link";

const sitemapLinks = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "Destinations", href: "/#destinations" },
      { name: "Taxi & Packages", href: "/#packages" },
      { name: "Experiences", href: "/#experiences" },
      { name: "About Us", href: "/#about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "/faq" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookies Policy", href: "/cookies" },
    ],
  },
  {
    title: "Travel Services",
    links: [
      { name: "Char Dham Yatra" },
      { name: "Kedarnath Tours" },
      { name: "Badrinath Tours" },
      { name: "Rishikesh Tours" },
      { name: "Mussoorie Tours" },
      { name: "Dehradun Tours" },
      { name: "Haridwar Tours" },
      { name: "Custom Travel Plans" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Sitemap
      </h1>

      <p className="text-gray-600 mb-12">
        Browse all important pages and services available on
        Atharv Travel.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {sitemapLinks.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border p-6"
          >
            <h2 className="text-xl font-semibold mb-4">
              {section.title}
            </h2>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:underline"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span>{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}