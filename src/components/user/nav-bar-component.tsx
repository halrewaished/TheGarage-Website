import { useState } from "react";
// import { IoMdArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { appRoutesObj } from "src/app.paths";
import { IRoutesTitle } from "src/core/types/user.type";
import  DropDownButton  from "../common/dorp-down-button";
import { Link, NavLink } from "react-router-dom";
import "tw-elements";
import { useTranslation } from "react-i18next";

export default function NaveBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    }
  };
  const aboutUs: IRoutesTitle[] = [
    {
      routeTitle: t("About The Garage"),
      routePath: appRoutesObj.getAboutUsPagePath(),
    },
    {
      routeTitle: t("The Garage Partners"),
      routePath: appRoutesObj.getGaragePartnerPageUrl(),
    },
    {
      routeTitle: t("theGarageManagement"),
      routePath: appRoutesObj.getGarageTeamPagePath(),
    },
    {
      routeTitle: t("FAQ"),
      routePath: appRoutesObj.getGarageTeamPagePath(),
    },
  ];
  const Programs: IRoutesTitle[] = [
    {
      routeTitle: t("The Garage plus"),
      routePath: appRoutesObj.getPlusPagePath(),
    },
    {
      routeTitle: t("The Garage Disrupt"),
      routePath: appRoutesObj.getDisruptPagePath(),
    },
    {
      routeTitle: t("Garage Incubator"),
      routePath: appRoutesObj.getIncubatorPagePath(),
    },
  ];
  const News: IRoutesTitle[] = [
    {
      routeTitle: t("News"),
      routePath: appRoutesObj.getMediaPagePath(),
    },
    {
      routeTitle: t("media"),
      routePath: appRoutesObj.getNewsLetterPagePath(),
    },
  ];
  const communityPage: string = appRoutesObj.getCommonQuestionsPagePath();
  const homepage: string = appRoutesObj.getLandingPagePath();
  const [toggleMenu, setToggleMenu] = useState(false);
 
  return (
    <>
      <div className="flex justify-center mobile:hidden">
        <div className="fixed top-14 z-[30]">
          <div className="flex items-center justify-between pr-12 shadow-[0px_3px_8px_-1px_rgba(50,50,71,0.05)] border-whiteColor border-[3px] border-t-yellow desktop:w-[1280px] laptop:w-[1000px] largeLaptop:w-[1140px] tablet:w-[800px] bg-white text-gray-700 text-[20px] largeLaptop:text-[17px] tablet:text-[12px] laptop:text-[15px] ">
            <div className="flex items-center gap-12 py-3 pl-3 tablet:gap-4 laptop:gap-6">
              <Link to={appRoutesObj.getLandingPagePath()}>
                <img
                  className="max-w-[175px] max-h-[67px] tablet:w-[140px] cursor-pointer"
                  src="assets/images/logo 2.png"
                  alt="logo"
                />
              </Link>
              <NavLink className={({ isActive }) => (isActive ? "text-green300" : "text-gray-700")} to={homepage}>
                <div
                  className={`cursor-pointer ${i18n.language === 'ar' ? 'font-ar text-[20px] pr-12 mobile:text-[10px]' : 'font-en pl-12 desktop:text-[16px] largeLaptop:text-[16px] laptop:text-[16px] tablet:text-[14px]'}`}
                >
                  {t("home")}
                </div>
              </NavLink>
              <DropDownButton title={t("About us")} routes={aboutUs} />
              <DropDownButton title={t("services")} routes={Programs} />
              <NavLink className={({ isActive }) => (isActive ? "text-green300" : "text-gray-700")} to={communityPage}>
                <div
                  className={`cursor-pointer ${i18n.language === 'ar' ? 'font-ar text-[20px] mobile:text-[10px]' : 'font-en desktop:text-[16px] largeLaptop:text-[16px] laptop:text-[16px] tablet:text-[14px]'}`}
                >
                  {t("community")}
                </div>
              </NavLink>
              <DropDownButton title={t("Media")} routes={News} />
            </div>
            <div className="flex items-center justify-center gap-3 pl-3">
              {
                i18n.language === 'en'
                  ? <h1 className=" text-green300 cursor-pointer font-en text-[16px] pr-0" onClick={() => changeLanguage()}>AR</h1>
                  :
                  <h1 className=" text-green300 cursor-pointer font-en text-[16px] pl-8" onClick={() => changeLanguage()}>EN</h1>
              }
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="tablet:hidden laptop:hidden largeLaptop:hidden desktop:hidden ">
        <div className="fixed top-0 z-[20]">
          <div className="flex items-center justify-between w-screen px-8 py-4 bg-white border-[3px] border-t-yellow border-white text-black shadow-[0px_3px_8px_-1px_rgba(50,50,71,0.05)]">
            <div onClick={() => setToggleMenu(!toggleMenu)}>
              {" "}
              {toggleMenu ? (
                <VscClose className="text-[30px]" />
              ) : (
                <RxHamburgerMenu className="text-[30px]" />
              )}
            </div>
            <Link to={appRoutesObj.getLandingPagePath()}>
              <img className="w-[117px] h-[42px] "
                src="assets/images/garageLogo.png"
                alt="logo"
              />
            </Link>
          </div>
          {
            <div
              className={`${toggleMenu ? "flex" : "hidden"
                } flex-col gap-3 py-4 px-3 bg-white text-gray-700 h-auto justify-center items-center`}
            >
              <NavLink className={({ isActive }) => (isActive ? "text-green300" : "text-gray-700")} to={homepage}>
                <div
                  className={` ${i18n.language === 'ar' ? ' font-arabic_normal text-[18px] pl-3' : 'font-en text-[14px]'}`}
                >
                  {t("home")}
                </div>
              </NavLink>
              <DropDownButton title={t("About us")} routes={aboutUs} />
              <DropDownButton title={t("services")} routes={Programs} />
              <NavLink className={({ isActive }) => (isActive ? "text-green300" : "text-gray-700")} to={communityPage}>
                <div
                  className={` ${i18n.language === 'ar' ? 'font-arabic_normal text-[18px] pl-3' : 'font-en text-[14px]'}`}>
                  {t("community")}
                </div>
              </NavLink>
              <DropDownButton title={t("Media")} routes={News} />
              {
                i18n.language === 'en'
                  ? <h1 className=" text-green300 px-8 cursor-pointer font-ar text-2xl" onClick={() => changeLanguage()}>AR</h1>
                  :
                  <h1 className=" text-green300 px-8 cursor-pointer font-ar text-2xl" onClick={() => changeLanguage()}>EN</h1>
              }
            </div>
          }
        </div>
      </div>
    </>
  );
}
