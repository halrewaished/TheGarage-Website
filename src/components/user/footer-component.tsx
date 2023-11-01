import { BsSnapchat, BsArrowRightShort, BsArrowLeftShort, BsYoutube, BsFacebook, } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { appRoutesObj } from 'src/app.paths';
import { useTranslation } from 'react-i18next';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa'


function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="sticky top-[100vh]">
                <div className="w-full h-[248px] bg-white border-4 border-b-yellow border-whiteColor flex px-28 justify-between mobile:hidden tablet:px-[125px] laptop:px-[160px]">
                    <div className="flex justify-start items-center">
                        <div className='flex flex-col justify-center items-center mx-auto gap-8'>
                            <Link to={appRoutesObj.getLandingPagePath()}>
                                <img className="max-w-[300px] max-h-[80px] cursor-pointer" src="assets/images/logo 2.png" alt="logo" />
                            </Link>
                            <div className="flex mx-2 gap-3 text-base tablet:text-[10px]">
                                <Link to={'https://youtube.com/@TheGarageKSA?si=Nx0O429CJ2yZmHjB'}>
                                    <BsYoutube />
                                </Link>

                                <Link to={'https://www.instagram.com/thegarageksa'}>
                                    <AiFillInstagram />
                                </Link>

                                <Link to={'https://www.linkedin.com/company/thegarageksa/'}>
                                    <RiLinkedinFill />
                                </Link>

                                <Link to={'https://twitter.com/TheGarageKSA'}>
                                    <img className="cursor-pointe w-[20px] h-[20px]" src="/assets/images/x.png" alt="twitter" />
                                </Link>

                                <Link to={'https://www.facebook.com/TheGarageKSA'}>
                                    <BsFacebook className='cursor-pointe w-[14px] h-[20px]' />
                                </Link>

                                <Link to={'https://www.snapchat.com/add/thegarageksa?share_id=MkM1NkMz&locale=en_SA@calendar=gregorian'}>
                                    <BsSnapchat className='cursor-pointe w-[15px] h-[20px]' />
                                </Link>
                                <Link to={'https://www.tiktok.com/@thegarageksa?_t=8fn6Fh38iKf&amp;_r=1'}>
                                    <FaTiktok className='cursor-pointe w-[10px] h-[20px]' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col justify-center items-end mx-auto gap-8'>
                            <div className='flex justify-center items-center mx-auto gap-8 tablet:gap-4 '>
                                <FooterLink linkName='The Garage plus' link={appRoutesObj.getPlusPagePath()} />
                                <FooterLink linkName='The Garage Disrupt' link={appRoutesObj.getDisruptPagePath()} />
                                <FooterLink linkName='Garage Incubator' link={appRoutesObj.getIncubatorPagePath()} />
                                <FooterLink linkName='FAQ' link={appRoutesObj.getCommonQuestionsPagePath()} />
                                <FooterLink linkName='contactUS' link={appRoutesObj.getContactUsPagePath()} />
                            </div>
                            <hr className="w-full h-[1px] border-1"></hr>
                            <div className='flex gap-9 tablet:gap-3 text-[25px] tablet:text-[20px]'>
                                <div className='items-center justify-end'>
                                    <img className=' cursor-pointer max-w-[116px] max-h-[30px]' src='/assets/images/KACST.png' alt='logo' />
                                </div>

                                <div className='items-center justify-end px-16'>
                                    <img className=' cursor-pointer max-w-[116px] max-h-[35px]' src='/assets/images/MICT.png' alt='logo' />
                                </div>

                                <div className='items-center justify-end'>
                                    <img className=' cursor-pointer max-w-[116px] max-h-[40px]' src='/assets/images/SFCPD.png' alt='logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className='sticky top-[100vh]'>
                    <div className='flex-col w-screen h-[222px] bg-white gap-12 justify-center items-center border-4 border-b-yellow border-white flex desktop:hidden largeLaptop:hidden laptop:hidden tablet:hidden'>
                        <div className='flex justify-end items-center gap-14'>
                            <div className='flex justify-start items-center'>
                                <div className="flex flex-col justify-center items-center max-auto gap-5">
                                    <div className='items-center flex justify-center'>
                                        <Link to={appRoutesObj.getLandingPagePath()}><img className="w-[81px] -h-[30px] cursor-pointer" src="assets/images/logo 2.png" alt="logo" /></Link>
                                    </div>
                                    <div className="flex mx-2 gap-2 text-base tablet:gap-1 tablet:text-[10px]">
                                        <Link to={'https://youtube.com/@TheGarageKSA?si=Nx0O429CJ2yZmHjB'}>
                                            <BsYoutube />
                                        </Link>

                                        <Link to={'https://www.instagram.com/thegarageksa'}>
                                            <AiFillInstagram />
                                        </Link>

                                        <Link to={'https://www.linkedin.com/company/thegarageksa/'}>
                                            <RiLinkedinFill />
                                        </Link>

                                        <Link to={'https://www.snapchat.com/add/thegarageksa?share_id=MkM1NkMz&locale=en_SA@calendar=gregorian'}>
                                            <BsSnapchat className='cursor-pointe w-[15px] h-[20px]' />
                                        </Link>

                                        <Link to={'https://www.facebook.com/TheGarageKSA'}>
                                            <BsFacebook className='cursor-pointe w-[14px] h-[20px]' />
                                        </Link>

                                        <Link to={'https://www.tiktok.com/@thegarageksa?_t=8fn6Fh38iKf&amp;_r=1'}>
                                            <FaTiktok className='cursor-pointe w-[10px] h-[20px]' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-col justify-start items-end">
                                <FooterLink linkName='The Garage plus' link={appRoutesObj.getPlusPagePath()} />
                                <FooterLink linkName='The Garage Disrupt' link={appRoutesObj.getDisruptPagePath()} />
                                <FooterLink linkName='Garage Incubator' link={appRoutesObj.getIncubatorPagePath()} />
                            </div>
                            <div className='flex-col justify-start items-start'>
                                <FooterLink linkName='FAQ' link={appRoutesObj.getCommonQuestionsPagePath()} />
                                <FooterLink linkName='contactUS' link={appRoutesObj.getContactUsPagePath()} />
                            </div>
                        </div>
                        <div className='flex tablet:gap-3 mobile:pb-4 mobile:pl-2 items-center'>
                            <div className='items-center'>
                                <img className=' cursor-pointer max-w-[116px] max-h-[30px]' src='/assets/images/KACST.png' alt='logo' />
                            </div>

                            <div className='items-center px-4 mobile:px-2 mobile:pl-2 tablet:px-6'>
                                <img className=' cursor-pointer max-w-[116px] max-h-[30px]' src='/assets/images/MICT.png' alt='logo' />
                            </div>

                            <div className='items-center'>
                            <img className=' cursor-pointer max-w-[116px] max-h-[30px]' src='/assets/images/SFCPD.png' alt='logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

interface IProps {
    link: string,
    linkName: string
}
function FooterLink(props: IProps) {
    const { t, i18n } = useTranslation();
    return (
        <Link to={props.link}>
            <div className={`text-gray-700  ${i18n.language === 'ar' ? 'font-ar text-[20px] mobile:text-base tablet:text-[12px]' : 'font-en text-[16px] laptop:text-[12px] tablet:text-[6.5px] mobile:text-[8px]'}`}>
                {t(props.linkName)}
            </div>
        </Link>
    );
}

