import { t } from "i18next";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import i18n from "src/core/configs/i18n";

const NewsAndEvents = () => {
  return (
    <>

      <div className="pt-40 mobile:pt-[120px] mobile:pb-[59px] flex flex-col items-center">
        <div className="flex justify-center">
          <div className="bg-white w-[440px] h-[80px] mobile:w-[360px] mobile:h-[80px] rounded-[10px] mobile:rounded-lg flex justify-between">
            <div className="flex flex-col justify-between p-3 items-center">
              <div className="bg-darkColor rounded-full w-2 h-2  mobile:w-[7px] mobile:h-[7px]">
              </div>
              <div className="bg-darkColor rounded-full h-2 w-2 mobile:w-[7px] mobile:h-[7px]">
              </div>
            </div>
            <div className={` ${i18n.language === 'ar' ? 'flex justify-center items-center pb-4 font-title text-5xl mobile:text-5xl' : 'flex justify-center items-center pb-4 font-en text-[40px] pt-2 mt-3 mobile:text-[28px]'}`}>
              {t("Neews")}
            </div>
            <div className="flex flex-col justify-between p-3 items-center">
              <div className="bg-darkColor rounded-full w-2 h-2 mobile:w-[7px] mobile:h-[7px]">
              </div>
              <div className="bg-darkColor rounded-full w-2 h-2  mobile:w-[7px] mobile:h-[7px]">
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[5px] mobile:pt-[20px] tablet:mb-20">
          <div>
            <div className="container w-auto flex items-center justify-end  pt-12 tablet:flex-col mobile:flex-col mobile:px-5 mobile:h-auto">
              <img alt="" src="https://firebasestorage.googleapis.com/v0/b/the-garage-75c8c.appspot.com/o/media%2Fnewsletter%2FGH185699-Enhanced-NR.jpg?alt=media&amp;token=2a08ce78-18bf-417a-8b2b-62c73f82ce08" className="w-[568px] mobile:w-[331px] rounded-xl" />
              <div className="px-8 flex flex-col container items-start tablet:pt-4 tablet:px-0 mobile:px-0 mobile:pt-4 mobile:">
                <div className="rounded bg-yellow w-[41px] h-1 mobile:pl-8">
                </div>
                <h1 className={` ${i18n.language === 'ar' ? 'font-ar tablet:pl-20 text-[30px] text-gray-900 pt-4 text-start' : 'font-en tablet:pr-20 text-2xl text-gray-900 pt-4 text-left'}`}>
                  {t("GarageOpeningTitle")}

                </h1>
                <p className={` ${i18n.language === 'ar' ? 'font-arabic_normal text-2xl text-gray-800 text-opacity-80 pt-4 mobile:px-1 leading-normal' : 'font-en text-base text-left text-gray-800 text-opacity-80 pt-4 mobile:px-1 leading-normal'}`}>
                  {t("GarageOpeningSubtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={` ${i18n.language === 'ar' ? 'mr-[1100px] laptop:mr-[800px] tablet:mr-[150px] mobile:mr-[180px] mobile:pt-6 mb-20' : 'ml-[1000px] laptop:ml-[800px] tablet:mr-[150px] mobile:ml-[100px] mobile:pt-6 mb-20'}`}>
        <Link to="/">
          <div className="flex justify-center items-center bg-[#FCCC10] rounded-xl w-[203px] mobile:w-[140px] h-14">
            <h3 className={` ${i18n.language === 'ar' ? 'font-ar text-xl font-bold px-2 text-black' : 'font-en text-xs font-bold px-2 text-black'}`}>
              {t("ReadTheFullNews")}
            </h3>
            {
              i18n.language === 'en'
                ? <div> <AiOutlineArrowRight size={25} /> </div>
                :
                <div> <AiOutlineArrowLeft size={25} /> </div>
            }
          </div>
        </Link>
      </div>
      <div className="mb-20 mt-10 mobile:mt-2 mobile:mb-[55px] ">
        <p className={` ${i18n.language === 'ar' ? 'font-title text-5xl pb-3 mobile:text-5xl text-center justify-center leading-[87.52px]' : 'font-en text-[26px] mobile:leading-10 mobile:text-[28px] text-center justify-center leading-[87.52px]'}`}>
          {t("LatestEvents")}

        </p>
      </div>
      <div className={` ${i18n.language === 'ar' ? 'container flex justify-center mt-12 mr-20 items-center h-[322px] w-screen mobile:h-auto mobile:w-auto mobile:mr-10 tablet:h-full tablet:w-auto tablet:mr-28 laptop:h-full tablet:flex-col' : 'container flex justify-center mt-12 ml-20 items-center h-[322px] w-screen mobile:h-auto mobile:w-auto mobile:mr-20 tablet:h-full tablet:w-auto tablet:mr-0 laptop:h-full tablet:flex-col'}`}>
        <div className="flex flex-row gap-8 mobile:flex-col tablet:flex-col laptop:flex-col laptop:h-auto">
          <div className="flex flex-col w-[380px] items-start container mobile:h-auto">
            <div className="flex h-[198px] w-[390px] items-center justify-center">
              <video controls className="rounded-3xl bg-black inset-0 w-[390px] h-[198px] mobile:w-[331px] mobile:h-auto" src="https://assets.thegarage.sa/news/d44654bd-67ae-4d5f-85fa-971c5032fbbd.mp4">
              </video>
            </div>
            <h1 className={` ${i18n.language === 'ar' ? 'font-ar tablet:pl-20 text-[28px] text-right text-gray-900 pt-4 font-normal' : 'font-en tablet:pl-20 text-xl text-left text-gray-900 pt-4 font-normal'}`}>
              {t("garagePlus3")}
            </h1>
            <h1 className={` ${i18n.language === 'ar' ? 'arabic_normal text-[18px] text-right text-gray-800 text-opacity-80 pt-4 font-normal' : 'font-en text-base text-left text-gray-800 text-opacity-80 pt-4 font-normal'}`}>
              {t("garagePlusSubtitle")}
            </h1>
          </div>
          <div className="flex flex-col w-[380px] items-start container mobile:h-auto">
            <div className="flex h-[198px] w-[390px] items-center justify-center mobile:w-full">
              <video controls className="rounded-3xl bg-black inset-0 w-[390px] h-[198px] mobile:w-[331px] mobile:h-auto" src="https://assets.thegarage.sa/news/3f574de5-adac-4349-8efc-b95e314fd63f.mp4">
              </video>
            </div>
            <h1 className={` ${i18n.language === 'ar' ? 'font-ar tablet:pl-20 text-[28px] text-right text-gray-900 pt-4 font-normal' : 'font-en tablet:pl-20 text-xl text-left text-gray-900 pt-4 font-normal'}`}>
              {t("garage9Disrupt")}
            </h1>
            <h1 className={` ${i18n.language === 'ar' ? 'arabic_normal text-[18px] text-right text-gray-800 text-opacity-80 pt-4 font-normal' : 'font-en text-base text-left text-gray-800 text-opacity-80 pt-4 font-normal'}`}>
              {t("garage9DisruptSubtitle")}
            </h1>
          </div>
          <div className="flex flex-col w-[380px] items-start container mobile:h-auto">
            <div className="flex h-[198px] w-[390px] items-center justify-center mobile:w-full">
              <video controls className="rounded-3xl bg-black inset-0 w-[390px] h-[198px] mobile:w-[331px] mobile:h-auto" src="https://assets.thegarage.sa/news/6da8c22b-5d8b-4430-97e1-9eb5119f030a.mp4">
              </video>
            </div>
            <h1 className={` ${i18n.language === 'ar' ? 'font-ar tablet:pl-20 text-[28px] text-right text-gray-900 pt-4 font-normal' : 'font-en tablet:pl-20 text-xl text-left text-gray-900 pt-4 font-normal'}`}>
              {t("garageStartupsBiban23")}
            </h1>
            <h1 className={` ${i18n.language === 'ar' ? 'arabic_normal text-[18px] text-right text-gray-800 text-opacity-80 pt-4 font-normal' : 'font-en text-base text-left text-gray-800 text-opacity-80 pt-4 font-normal'}`}>
              {t("garageStartupsBiban23Subtitle")}
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-28 mobile:pt-[40px] mobile:mb-16">
      </div>

    </>
  );
};

export default NewsAndEvents;
