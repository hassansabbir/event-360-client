import Container from "@/components/Container";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";
import EventItems from "./EventItems";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="bg-[#02011B] h-[848px]">
      <Container className="text-white">
        <Banner />
        <ServicesSection />
        <EventItems />
        <Gallery />
      </Container>
      <div className="bg-[#02011B] h-[800px]">
        <Container className="text-white">
          <Pricing />
        </Container>
      </div>
      <Container className="text-white">
        <Reviews />
      </Container>
    </div>
  );
};

export default Home;
