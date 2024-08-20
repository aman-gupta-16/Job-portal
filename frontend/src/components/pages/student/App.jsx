import Navbar from "../../shared/Navbar";
import HeroSection from "../../components/HeroSection";
import CategoryCarousel from "../../components/CategoryCarousel";
import LatestJobs from "../../components/LatestJobs";
import Footer from "../../shared/Footer";
import useGetAllJobs from "../../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CategoryCarousel></CategoryCarousel>
      <LatestJobs></LatestJobs>
      <Footer></Footer>
    </>
  );
};

export default App;
