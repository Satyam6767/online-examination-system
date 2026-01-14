import { Container,  Nav, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUsHome from "../components/AboutUsHome";
import WhychhoseusHome from "../components/WhychhoseusHome";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
     <Navbar />
    <Banner />
    <AboutUsHome />
    <WhychhoseusHome />
    <Reviews />
    <Footer />


      

     
    </>
  );
};

export default HomePage;
