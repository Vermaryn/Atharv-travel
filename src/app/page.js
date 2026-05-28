import  Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PopularDestinations from "./components/PopularDestinations";
import FeaturedPackages from "./components/FeaturedPackages";
import Experiences from "./components/Experiences";
import WhyChooseUs from "./components/WhyChooseUs";
import Statistics from "./components/Statistics";
import  Testimonials  from "./components/Testimonial";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <FeaturedPackages />
      <Experiences />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Gallery />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  )
}