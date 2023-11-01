import { useTranslation } from "react-i18next";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import i18next from 'i18next'

const GarageCommunityContainer = () => {

  const { i18n, t } = useTranslation();


  const slides = [
    {
      id: 0,
      value: "/assets/images/Moltazim.png",
      content: i18next.t('MoltazimContent'),
      email: "mailto: info@moltazim.com",
      website: "http://www.moltazim.com/",
    },
    {
      id: 1,
      value: "/assets/images/MKhzon.png",
      content: i18next.t('MakhzonContent'),
      email: "mailto: thamer@mkhzon.sa",
      website: "https://mkhzon.sa/",


    },
    {
      id: 2,
      value: "/assets/images/Mezwalah.png",
      content: i18next.t('MezwalahContent'),
      email: "mailto: info@mezwalah.com",
      website: "http://www.mezwalah.com/",
    },
    {
      id: 3,
      value: "/assets/images/Qvalon.png",
      content: i18next.t('QvalonContent'),
      email: "mailto: andrew@qvalon.com",
      website: "http://www.qvalon.com/",
    },
    {
      id: 4,
      value: "/assets/images/Shttle.png",
      content: i18next.t('ShttleContent'),
      email: "mailto: Malhassan@shuttle-sa.com",
      website: "http://www.shttle.com/",
    },
    {
      id: 5,
      value: "/assets/images/MoneyLoop.png",
      content: i18next.t('MoneyLoopContent'),
      email: "mailto: Saleh@moneyloop.sa",
      website: "http://www.moneyloop.sa/",
    },
  ];

  const [sliderData, setSliderData] = useState(slides[0]);
  const [active, setActive] = useState(0);


  const handleClick = (index: number) => {
    const slider = slides[index];
    setSliderData(slider);
  }

  const handleArrow = (dir: number) => {
    const arrow = sliderData.id + dir;
    return arrow;
  }

  return (
    <>
      <div className="pt-28 bg-white items-center justify-center pb-44 mobile:pt-24 mobile:pb-32">
        <div className="flex items-center justify-center pb-12">
          <p className={` ${i18n.language === 'ar' ? 'font-title text-5xl pb-3 mobile:text-5xl text-center justify-center leading-[87.52px]' : 'font-en text-[26px] mobile:leading-10 mobile:text-[28px] text-center justify-center leading-[87.52px]'}`}>
            {t("TheGarageCommunity")}
          </p>
        </div>
        <div className="flex px-24 tablet:px-6 items-center justify-center">
          <div className="container flex flex-col w-[1216px] items-center mobile:h-auto">
            <div className="flex bg-purpleColor h-[406px] mobile:p-2 rounded-t-3xl items-center tablet:px-4 mobile:h-auto mobile:w-[311px] mobile:px-0 px-32 container border-t-4 border-[#50C5B1] ">

              {/* purpule box */}
              <div className="flex flex-row mobile:flex-col items-center justify-between w-full mobile:py-4">
                <div className="flex bg-yellow cursor-pointer h-[42px] w-[42px] items-center justify-center rounded-xl mobile:hidden">
                  <button onClick={() => handleArrow(-1)}>
                    <AiOutlineArrowRight size={16} />
                  </button>
                </div>
                <div className="container flex flex-col items-center justify-center w-[210px] ">
                  <div className="w-[210px] h-[174px] p-[40px] mobile:w-[210] mobile:h-[155px] rounded-xl bg-white object-contain">
                    <img src={sliderData.value} />
                  </div>
                  <div className="flex flex-row-reverse pt-4 mobile:hidden gap-4">
                    <Link to={sliderData.email}>
                      <div className="flex items-center justify-center w-10 h-10 bg-secondaryGreen400 rounded-lg">
                        <AiOutlineMail size={27} />
                      </div>
                    </Link>
                    <Link to={sliderData.website}>
                      <div className="flex items-center justify-center justify-items-center w-10 h-10 bg-secondaryGreen400 rounded-lg">
                        <TfiWorld size={27} />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex w-[350px] text-white mobile:h-auto p-3 mobile:w-[300px] mobile:px-4">
                  <div className="hide-selection-highlight">
                    <h1 className="font-ar text-2xl text-start py-3 h-60 overflow-y-scroll">
                      {sliderData.content}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-4 p-4">
                  <div className="flex bg-yellow cursor-pointer h-[42px] w-[42px] items-center justify-center rounded-xl mobile:hidden">
                    <button onClick={() => handleArrow(1)}>
                      <AiOutlineArrowLeft size={16} />
                    </button>
                  </div>
                </div>
                {/* mobile */}
                <div className="flex flex-row items-center justify-center gap-4 p-4">
                  <div className="flex bg-yellow cursor-pointer h-[42px] w-[42px] items-center justify-center rounded-xl desktop:hidden largeLaptop:hidden laptop:hidden tablet:hidden">
                    <button onClick={() => handleArrow(-1)}>
                      <AiOutlineArrowRight size={16} />
                    </button>
                  </div>
                  <div className="flex bg-yellow cursor-pointer h-[42px] w-[42px] items-center justify-center rounded-xl desktop:hidden largeLaptop:hidden laptop:hidden tablet:hidden">
                    <button onClick={() => handleArrow(1)}>
                      <AiOutlineArrowLeft size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* logo of startups down */}
            <div className="container flex items-center border justify-around mobile:hidden tablet:grid-cols-3 tablet:px-0 tablet:gap-x-0 rounded-b-3xl">
              <div>
                <div className="flex flex-row justify-center">
                  {
                    slides.map((data, i) =>
                      <div className="rounded-xl bg-white object-contain">
                        <img key={data.id} src={data.value} onClick={() => handleClick(i)} className={sliderData.id == i ? " border-green300 border-2 flex flex-col items-center justify-center bg-white rounded-br-3xl shadow-[0px_3px_8px_-1px_rgba(0,0,71,0.05)] w-[210px] h-[155px] tablet:h-[120px] cursor-pointer" : " flex flex-col items-center justify-center bg-white shadow-[0px_3px_8px_-1px_rgba(0,0,71,0.05)] w-[210px] h-[155px] tablet:h-[120px] cursor-pointer"} />
                      </div>

                    )
                  }
                </div>
              </div>
            </div>

            {/* mobile */}

            <div className="container flex flex-row items-center w-[311px] rounded-b-3xl desktop:hidden largeLaptop:hidden laptop:hidden tablet:hidden">
                <div className="flex flex-row items-center justify-center w-[156px] h-[80px] border rounded-br-3xl">
                  <img src="/assets/images/Moltazim.png" className={slides[0].id == 0 ? " object-scale-down w-[48px] h-[48px] border-green300 border-2 cursor-pointer" : " object-scale-down w-[48px] h-[48px] cursor-pointer"} />

                </div>
                <div className="flex flex-row items-center justify-center w-[156px] h-[80px] border rounded-bl-3xl">
                <img src="/assets/images/MKhzon.png" className={slides[0].id == 1 ? " object-scale-down w-[48px] h-[48px] border-green300 border-2 cursor-pointer " : " object-scale-down w-[48px] h-[48px] cursor-pointer"} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default GarageCommunityContainer;
