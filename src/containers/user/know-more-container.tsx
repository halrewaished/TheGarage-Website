import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function KnowMoreContainer() {

  const { t, i18n } = useTranslation();


  const images = [
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/2.jpg',
    // 'hhttps://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/3.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/1.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/4.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/6.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/7.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/8.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/9.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/10.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/11.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/12.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/13.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/14.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/15.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/16.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/17.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/18.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/19.jpg',
    'https://raw.githubusercontent.com/The-Garage-Tech-Team/garage-media/main/media%202/20.jpg'
  ];

  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000)
    return () => clearInterval(interval);

  }, [])

  return (
    <>
      <div className="flex justify-center items-start mx-auto pr-32 pt-[215px] px-6 overflow-hidden pb-48 largeLaptop:pr-48 laptop:pr-96 tablet:pb-28 mobile:pb-[280px] mobile:pr-12 mobile:pt-28 ">
        <div className="relative mobile:pt-3 left-40 mobile:left-4">
          <div className="flex mobile:mx-auto ml-[320px] tablet:mr-96">
            <div className="rounded-r-[64px] mt-20 pl-6 mobile:pl-5 w-[648px] tablet:w-[510px] mobile:w-[348px] mobile:h-[249.857px] h-[648px] bg-[#FCCC10]">
              <img src={currentImage} alt="" className="rounded-r-[64px] mobile:rounded-r-[24px] object-cover w-[648px] tablet:w-[510px] mobile:w-[338px] mobile:h-[249.857px] h-[648px]" />
              <div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col absolute z-10 left-[350px] top-[215px] justify-center w-[658px] h-[542.83px] bg-white bg-opacity-80 mt-[131px] backdrop-blur 
      rounded-xl px-[74.5px] mobile:right-8 ltr:mobile:left-3 mobile:rounded-[24px] largeLaptop:left-[120px] tablet:top-[540px] tablet:left-12 mobile:top-[260px]  
      mobile:w-[327px] mobile:h-[336px] laptop:left-2  mobile:px-7">
          <img className="h-[180px] pb-2 mobile:pb-3 mobile:object-contain" alt="garage-logo" src="/assets/images/garage-logo-transparent.png" />
          <div className=" pr-5">
            <div className="rounded bg-[#FCCC10] w-[41px] h-1">
            </div>
            <p className={` ${i18n.language === 'ar' ? 'text-2xl mobile:text-xl font-ar text-gray800 font-bold pt-4' : 'font-en text-[16px] mobile:text-[16px] mobile:pl-5 font-bold pt-4 text-gray800'}`}>
              {t("PlaceForStartups")}</p>
            <p className="text-2xl mobile:text-xl font-ar text-gray800 font-bold pb-12"></p>
          </div>
          <a href="/">
            <div className="">
              <div className="flex justify-end gap-2 mobile:pt-5 mobile:pb-8">
                <div className="flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-12 mobile:w-[118px] mobile:h-10 ">
                  <h3 className={` ${i18n.language === 'ar' ? ' text-xl mobile:text-base font-ar font-bold text-black' : 'font-en text-[12px] font-bold text-black'}`}>
                    {t("knowMore")}</h3>
                    {
                    i18n.language === 'en'
                      ? <div> <AiOutlineArrowRight size={25} /> </div>
                      :
                      <div> <AiOutlineArrowLeft size={25} /> </div>
                  }
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default KnowMoreContainer;
