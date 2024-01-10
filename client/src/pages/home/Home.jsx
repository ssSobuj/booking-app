import HeroSection from "../../component/heroSection/HeroSection";
import Offer from "../../component/offers/Offer";
import Search from "../../component/search/Search";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <Search />
      <Offer />
    </div>
  );
}
