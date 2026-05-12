import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/layout/Navbar";
import HeroSearch from "../../components/home/HeroSearch";
import Offers from "../../components/home/Offers";
import Testimonials from "../../components/home/Testimonials";
import Footer from "../../components/layout/Footer";
import BrandPartners from "../../components/home/TyreBrandPartners";
import TyreTypes from "../../components/home/TyreTypes";
import FeaturedCollection from "../../components/home/FeaturedCollection";
import WhatsAppChatbot from "../../components/layout/WhatsAppChatbot";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <section data-aos="fade-down" data-aos-delay="100">
        <HeroSearch />
      </section>

      <section data-aos="fade-up" data-aos-delay="150">
        <Offers />
      </section>

      <section data-aos="fade-right" data-aos-delay="200">
        <BrandPartners />
      </section>

      <section data-aos="fade-left" data-aos-delay="250">
        <TyreTypes />
      </section>
     
      <section data-aos="fade-left" data-aos-delay="250">
        <FeaturedCollection />
      </section>


      <section data-aos="zoom-in" data-aos-delay="300">
        <Testimonials />
      </section>

      <Footer />
      <WhatsAppChatbot/>
    </>
  );
};

export default Home;