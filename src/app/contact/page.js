import Navbar from "../components/Navbar";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

export const metadata = {
  title: "Contact Us | Wanderly",
  description:
    "Get in touch with Wanderly travel experts for bookings and support.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactMap />
    </>
  );
}