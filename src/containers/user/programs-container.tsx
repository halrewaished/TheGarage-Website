import { useTranslation } from "react-i18next";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import LandingBackGroundLeft from "src/components/user/landing-background-component-left";
import i18n from "src/core/configs/i18n";

const ProgramsContainer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col justify-center pt-[90px] pb-36 mobile:pb-24 items-center mobile:h-auto mobile:pt-[50px]">
        <div className="flex pt-[65px] pb-[100px] mobile:pb-[56px]">
          <div className="flex justify-center">
            <div className="bg-white w-[440px] h-[80px] mobile:w-[360px] mobile:h-[80px]  rounded-[10px] mobile:rounded-lg flex justify-between ">
              <div className="flex flex-col justify-between p-3 items-center">
                <div className="bg-darkColor rounded-full w-2 h-2 mobile:w-[7px] mobile:h-[7px]">
                </div>
                <div className="bg-darkColor rounded-full h-2 w-2 mobile:w-[7px] mobile:h-[7px]">
                </div>
              </div>
              <div className={` ${i18n.language === 'ar' ? 'flex justify-center items-center w-[440px] pb-4 font-title text-5xl mobile:text-5xl' : 'flex justify-center items-center w-[440px] pb-4 font-en text-[40px] pt-2 mt-3 mobile:text-[28px]'}`}>
                {t("Programs")}
              </div>
              <div className="flex flex-col justify-between p-3 items-center">
                <div className="bg-darkColor rounded-full w-2 h-2 mobile:w-[7px] mobile:h-[7px]">
                </div>
                <div className="bg-darkColor rounded-full w-2 h-2 mobile:w-[7px] mobile:h-[7px]"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="container flex items-center justify-center pr-10 mobile:flex-col tablet:flex-col mobile:px-0">
          <div className="absolute mobile:hidden tablet:hidden pb-[2200px] pr-[85px] -left-2">
            <LandingBackGroundLeft />
          </div>

          {/* plus */}
          <div className="w-[579px] pb-5 mx-6 tablet:pb-14 tablet:w-[300px] laptop:w-[450px] mobile:w-[311px] mobile:pt-5 mobile:px-0">
            <img alt="" src="/assets/images/programs-plus-img.png" className="rounded-[24px]" />
            <img alt="" src="/assets/images/Plus.png" className="pt-4 w-[117.41px] h-[82px]" />
            <p className={` ${i18n.language === 'ar' ? 'font-arabic_normal text-2xl text-gray-800 text-opacity-80 pt-3' : 'font-en text-lg text-gray-800 text-opacity-80 pt-3'}`}>
              {t("Plus")}
            </p>
            <div className="pt-8 pb-12">
              <Link to="/">
              <div className={` ${i18n.language === 'ar' ? 'float-left flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-14 mobile:w-[118px] mobile:h-10' : 'float-right flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-14 mobile:w-[118px] mobile:h-10'}`}>
                  <h3 className={` ${i18n.language === 'ar' ? ' text-xl mobile:text-base font-ar font-bold text-black' : 'font-en text-[12px] font-bold text-black'}`}>
                    {t("knowMore")}</h3>
                  {
                    i18n.language === 'en'
                      ? <div> <AiOutlineArrowRight size={25} /> </div>
                      :
                      <div> <AiOutlineArrowLeft size={25} /> </div>
                  }
                </div>
              </Link>
            </div>
          </div>

          {/* distrupt */}
          <div>
            <div className="w-[579px] pb-5 mx-6 tablet:pb-14 tablet:w-[300px] laptop:w-[450px] mobile:w-[311px] mobile:pt-5 mobile:px-0">
              <img alt="" src="/assets/images/programs-disrupt-img.png" className="rounded-[24px]" />
              <img alt="" src="/assets/images/programs-disrupt-logo.png" className="pt-4 w-[178px] h-[70px]" />
              <p className={` ${i18n.language === 'ar' ? 'font-arabic_normal text-2xl text-gray-800 text-opacity-80 pt-3' : 'font-en text-lg text-gray-800 text-opacity-80 pt-3'}`}>
                {t("Disrupt")}
              </p>
              <div className="pt-8 pb-12">
                <Link to="/">
                <div className={` ${i18n.language === 'ar' ? 'float-left flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-14 mobile:w-[118px] mobile:h-10' : 'float-right flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-14 mobile:w-[118px] mobile:h-10'}`}>
                    <h3 className={` ${i18n.language === 'ar' ? ' text-xl mobile:text-base font-ar font-bold text-black' : 'font-en text-[12px] font-bold text-black'}`}>
                      {t("knowMore")}</h3>
                    {
                      i18n.language === 'en'
                        ? <div> <AiOutlineArrowRight size={25} /> </div>
                        :
                        <div> <AiOutlineArrowLeft size={25} /> </div>
                    }
                  </div>
                </Link>
              </div>
            </div>


            {/* 3 */}
            <div className="w-[579px] pb-5 mx-6 tablet:pb-14 tablet:w-[300px] laptop:w-[450px] mobile:w-[311px] mobile:pt-5 mobile:px-0">
              <img alt="" src="/assets/images/programs-incubator-img.png" className="rounded-[24px]" />
              <img alt="" src="/assets/images/programs-incubator-logo.png" className="pt-4 w-[178px] h-[70px]" />
              <p className={` ${i18n.language === 'ar' ? 'font-arabic_normal text-2xl text-gray-800 text-opacity-80 pt-3' : 'font-en text-lg text-gray-800 text-opacity-80 pt-3'}`}>
                {t("Incubator")}
              </p>
              <div className="pt-8 pb-12">
                <Link to="/">
                  <div className={` ${i18n.language === 'ar' ? 'float-left flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-14 mobile:w-[118px] mobile:h-10' : 'float-right flex justify-center items-center gap-2 bg-[#FCCC10] rounded-xl w-[118px] h-14 mobile:w-[118px] mobile:h-10'}`}>
                    <h3 className={` ${i18n.language === 'ar' ? ' text-xl mobile:text-base font-ar font-bold text-black' : 'font-en text-[12px] font-bold text-black'}`}>
                      {t("knowMore")}</h3>
                    {
                      i18n.language === 'en'
                        ? <div> <AiOutlineArrowRight size={25} /> </div>
                        :
                        <div> <AiOutlineArrowLeft size={25} /> </div>
                    }
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProgramsContainer;