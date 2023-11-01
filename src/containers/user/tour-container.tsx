import { useTranslation } from "react-i18next";
import { GrLocation } from "react-icons/gr";

function TourContainer() {

  const { t, i18n } = useTranslation();


  return (
    <>
      <div className="bg-purpleColor h-[278px] mobile:h-full mobile:pb-36 tablet:mt-[340px] mobile:mt-[60px] mobile:px-0">
        <div className="flex flex-row justify-center items-center mobile:flex-col gap-[6px] desktop:gap-[90px]">
          <div className="flex flex-col  mobile:pt-24  mobile:justify-center mobile:items-center tablet:items-center">
            <div className={` ${i18n.language === 'ar' ? 'py-5 text-white laptop:text-3xl mobile:text-4xl mobile:text-center tablet:text-3xl text-5xl font-title' : 'font-en py-5 text-white laptop:text-3xl mobile:text-4xl mobile:text-center tablet:text-3xl text-5xl'}`}>
              {t("BookATour")}
            </div>
            <div className="w-[41px] h-[4px] bg-yellow rounded-xl ">
            </div>
            <div className={` ${i18n.language === 'ar' ? 'py-2 laptop:w-[350px] laptop:text-lg w-[440px] h-[10px] text-white mobile:text-xl mobile:w-[343px] tablet:w-[240px] mobile:h-[69px] mobile:text-center font-arabic_normal font-bold text-2xl tablet:text-xl' : 'font-en py-2 laptop:w-[350px] laptop:text-lg w-[440px] h-[10px] text-white mobile:text-xl mobile:w-[343px] tablet:w-[240px] mobile:h-[69px] mobile:text-center text-2xl tablet:text-xl'}`}>
              {t("bookSubTitle")}
            </div>
            <a href="/">
              <div className="pt-[70px] pb-[70px] mobile:pb-0 ">
                <button className={` ${i18n.language === 'ar' ? 'bg-yellow rounded-xl w-[235px] h-[60px] tablet:mt-4 items-center flex justify-center text-2xl font-arabic_normal font-bold' : 'font-en bg-yellow rounded-xl w-[235px] h-[60px] tablet:mt-4 items-center flex justify-center text-xl'}`}
                >
                  {t("BookATour")}
                </button>
              </div>
            </a>
          </div>
          <div className="flex flex-row mobile:flex-col mobile:items-center mobile:pt-[140px]">
            <video controls className="w-[550px] h-[338px] tablet:w-[350px] laptop:w-[450px] mobile:rounded-b-[0px] mobile:rounded-t-[27px] mobile:h-[502px] mobile:w-[338.66px] object-cover bg-black inset-0 mt-[-30px] rounded-r-[27px]" src="https://github.com/The-Garage-Tech-Team/garage-media/assets/53178276/43721ceb-7379-4ee9-8475-5083c341d666">
            </video>
            <div className="mt-[-30px] mobile:mt-[-160px]">
              <img className="w-[16.22px] h-[338px] mobile:rotate-90" src="/assets/images/pattern-yellow.png" alt="" />
            </div>
            <div className="h-[338px] w-[136px] bg-yellow mt-[-30px] mr-[-1px] mobile:mt-[-162px] mobile:w-[338px] mobile:h-[136px] mobile:rounded-bl-[27px] mobile:rounded-br-[27px] rounded-l-[27px] mobile:rounded-l-[0px] ">
              <div className="flex flex-col items-center justify-center py-5 mobile:flex-row ">
                <div className="flex items-center justify-center w-[104px] h-[104px] border border-black">
                  <img className="w-[100px] h-[100px] bg-white" src="/assets/images/QR (1).png" alt="" />
                </div>
                <div className="rotate-90 mobile:rotate-0">
                  <div className={` ${i18n.language === 'ar' ? 'flex flex-row items-center justify-center gap-1 pl-9 mobile:pl-0 mobile:pr-[90px]' : 'flex flex-row items-center justify-center gap-1 pl-9 mobile:pl-0 mobile:mr-[65px] tablet:mr-4'}`}>
                    <div className="text-2xl font-bold font-arabic_normal">
                      {t("Riyadh")}
                    </div>
                    <div className="">
                    <GrLocation size={20} />
                    </div>
                  </div>
                  <div className={` ${i18n.language === 'ar' ? 'w-[159px] h-[46px] font-arabic_normal text-xl mobile:ml-0 ml-[130px] text-end' : 'w-[159px] h-[46px] font-arabic_normal text-xl mobile:ml-3 tablet:ml-[95px] ml-[120px]'}`}>
                    {t("Street")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default TourContainer;
