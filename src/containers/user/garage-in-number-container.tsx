import { useTranslation } from "react-i18next";
import GrayCircleContainer from "src/components/user/gray-circle-container";

const GarageInNumberContainer = () => {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-center h-auto items-center w-full bg-white mt-[200px] mobile:h-auto pt-12 mobile:mt-0 pb-[80px] tablet:pb-28">
        <div className="flex py-[54px] mobile:pb-24 tablet:pb-36">
        <p className={` ${i18n.language === 'ar' ? 'font-title text-5xl pb-3 mobile:text-5xl text-center justify-center leading-[87.52px]' : 'font-en text-[26px] mobile:leading-10 mobile:text-[28px] text-center justify-center leading-[87.52px]'}`}>
            {t("GarageInNumber")}
          </p>
        </div>
        <div className="container flex flex-wrap items-center justify-center mt-0 mb-24 gap-16 pt-12 w-[1281.2px] h-[289.792px] laptop:w-[1200px] laptop:h-[250px] tablet:w-[1000px] tablet:h-auto mobile:w-[279px] mobile:h-[1067px] mobile:gap-1 mobile:py-12 tablet:px-32 tablet:py-40 laptop:pt-6">
          <div className="absolute flex gap-4 tablet:hidden mobile:hidden">
            {Array(65)
              .fill(true)
              .map((item, index) => (
                <GrayCircleContainer key={index} />
              ))}
          </div>
          <div className="absolute flex gap-4 desktop:hidden laptop:hidden largeLaptop:hidden mobile:hidden">
            {Array(34)
              .fill(true)
              .map((item, index) => (
                <GrayCircleContainer key={index} />
              ))}
          </div>
          <div className="absolute flex gap-16 mobile:flex-col tablet:grid tablet:grid-cols-2">
            <GrayBox number="+9" title= {t("DispuptNumber")}/>
            <GrayBox number="+130" title={t("BeneficiaryCompanies")}/>
            <GrayBox number="+2M" title={t("StartupValue")} />
            <GrayBox number="+300" title={t("JobsNumber")}/>

          </div>
        </div>
      </div>
    </>
  );
};

export default GarageInNumberContainer;

interface IProps {
  number: string,
  title: string
}

function GrayBox(props: IProps) {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* Gray Box */}
      <div className="container flex justify-between bg-greyColorA z-10 w-[185.83px] h-[183.24px] rounded-[10px] mobile:rounded-lg">
        <div className="flex flex-col justify-between p-3 items-center">
          <div className="bg-black rounded-full w-[8px] h-[8px] mobile:w-[7px] mobile:h-[7px]"></div>
          <div className="bg-black rounded-full w-[8px] h-[8px] mobile:w-[7px] mobile:h-[7px]"></div>
        </div>
        <div className={` ${i18n.language === 'ar' ? 'flex flex-col justify-center items-center w-[165px] font-title text-[28px] mobile:text-[20px] whitespace-nowrap' : ' flex flex-col justify-center items-center w-[165px] font-en text-[20px] mobile:text-[16px]'}`}>
          <h1 className="text-green300 font-en text-[40px]"> {props.number}</h1>
          <h1 className={` ${i18n.language === 'ar' ? 'text-2xl text-center font-ar' : ' text-base text-center font-en font-bold'}`}> {props.title}</h1>
        </div>
        <div className="flex flex-col justify-between p-3 items-center">
          <div className="bg-black rounded-full w-[8px] h-[8px] mobile:w-[7px] mobile:h-[7px]"></div>
          <div className="bg-black rounded-full w-[8px] h-[8px] mobile:w-[7px] mobile:h-[7px]"></div>
        </div>
      </div>
    </>
  );
}