import Container from "@/components/Container";
import Banner from "./Banner";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div className="bg-[#02011B] h-[848px]">
      <Container className="text-white">
        <Banner />
      </Container>
      <Container className="text-white">
        <ServicesSection />
      </Container>
    </div>
  );
};

export default Home;
