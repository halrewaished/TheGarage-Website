import { useState, useEffect } from "react";
import * as aos from "aos";
import "aos/dist/aos.css";
import Footer from "src/components/user/footer-component";
import NaveBar from "src/components/user/nav-bar-component"
import { useTranslation } from "react-i18next";
import KnowMoreContainer from "src/containers/user/know-more-container"
import LandingBackGroundLeft from "src/components/user/landing-background-component-left";
import LandingBackGroundRight from "src/components/user/landing-background-component-right";
import TourContainer from "src/containers/user/tour-container";
import GarageInNumberContainer from "src/containers/user/garage-in-number-container";
import ProgramsContainer from "src/containers/user/programs-container";
import NewsAndEvents from "src/containers/user/news-and-events";
import GarageCommunityContainer from "src/containers/user/garage-community-container";

export default function LandingPage() {
  const [isGarageOpen, setIsGarageOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    aos.init(); // for animation
    setTimeout(() => {
      setIsGarageOpen(true);
    }, 1000);
  }, []);
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language") || "ar");
  }, [i18n]);
  return (

    <>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className="min-h-screen relative page">
          <div className={`h-full w-screen absolute transition-all duration-3000 z-40 ${isGarageOpen ? "-top-full" : "top-0"}`}>
            <img src={'/assets/images/splash.png'} alt="garage" className="w-screen h-screen" />
          </div>
          <div
            className={`${isGarageOpen ? "opacity-0 invisible" : "opacity-100"} h-screen w-screen bg-secondary transition-all duration-700 delay-500 absolute z-30`}></div>
          
          <NaveBar />
          <LandingBackGroundLeft />
          {/* Middle Containers*/}
          <div className="mobile:pt-[24px]">
            <LandingBackGroundRight />
            <KnowMoreContainer></KnowMoreContainer>
          </div>
          <div className="mobile:pt-[48px]">
            <TourContainer></TourContainer>
          </div>
          <GarageInNumberContainer></GarageInNumberContainer>
          <ProgramsContainer></ProgramsContainer>
          <GarageCommunityContainer></GarageCommunityContainer>
          <NewsAndEvents></NewsAndEvents>
          
          {/* End */}
          <Footer />
        </div>
    </>
  );
}
