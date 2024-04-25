import Container from "@/components/Container";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";
import EventItems from "./EventItems";

const Home = () => {
  return (
    <div className="bg-[#02011B] h-[848px]">
      <Container className="text-white">
        <Banner />
        <ServicesSection />
        <EventItems />
      </Container>
    </div>
  );
};

export default Home;
