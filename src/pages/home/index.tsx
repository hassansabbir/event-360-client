import Container from "@/components/Container";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";
import EventItems from "./EventItems";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import RecentEvent from "./RecentEvent";
import Footer from "@/components/layouts/Footer";
import ContactUs from "./ContactUs";
import Donation from "./Donation";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="bg-[#02011B] md:h-[848px]">
      <Container className="text-white">
        <motion.div
          className="h-2 mt-16 w-full max-w-[1280px] mx-auto fixed top-0 bg-gradient-to-r from-gradientFrom to-gradientTo z-50"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <Banner />
        <ServicesSection />
        <EventItems />
        <Gallery />
      </Container>
      <div className="bg-[#02011B] md:h-[800px]">
        <Container className="text-white">
          <Pricing />
        </Container>
      </div>
      <Container className="text-white">
        <Reviews />
        <RecentEvent />
        <Donation />
        <ContactUs />
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Home;
