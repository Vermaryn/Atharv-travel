import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://atvtravels.com"),

  title: {
    default: "Atharv Travels | Uttarakhand Tours & Taxi Services",
    template: "%s | Atharv Travels",
  },

  description:
    "Book Char Dham Yatra, Kedarnath, Badrinath, Haridwar, Rishikesh, Mussoorie and Uttarakhand taxi services with Atharv Travels.",

  keywords: [
    "Atharv Travels",
    "Char Dham Yatra",
    "Kedarnath Tour",
    "Badrinath Tour",
    "Haridwar Tour",
    "Rishikesh Tour",
    "Mussoorie Tour",
    "Uttarakhand Taxi Service",
    "Tour Packages",
  ],

  openGraph: {
    title: "Atharv Travels | Uttarakhand Tours & Taxi Services",
    description:
      "Explore Uttarakhand with Atharv Travels. Book tour packages, taxi services and pilgrimage tours.",
    url: "https://atvtravels.com",
    siteName: "Atharv Travels",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
