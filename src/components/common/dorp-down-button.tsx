import { Link,} from "react-router-dom";
import { RiArrowDownSLine } from 'react-icons/ri';
import { IMapRoutes } from "src/core/types/user.type";
import { useTranslation } from "react-i18next";

export default function DropDownButton(props: IMapRoutes) {
    const { i18n } = useTranslation();

    return (
        <div className="flex justify-center cursor-pointer">
            <div className="relative" data-te-dropdown-ref>
                <div
                    className=
                    {`flex cursor-pointer items-center ${i18n.language === 'ar' ? 'font-ar mobile:font-arabic_normal text-[20px]' : 'font-en desktop:text-[16px] largeLaptop:text-[16px] laptop:text-[14px] tablet:text-[13px]'}`}
                    id="dropdownMenuButton2"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    {props.title}
                    <RiArrowDownSLine />
                </div>
                <ul
                    className=
                    {`hidden w-[211px] whitespace-nowrap overflow-hidden rounded-b-lg border-none cursor-pointer ${i18n.language === 'ar'?"text-right ":"text-left "}  bg-white [&[data-te-dropdown-show]]:block relative left-5 ${i18n.language === 'ar' ? ' font-arabic_normal mobile:font-ar' : 'font-en'} ${i18n.language === 'ar' ? 'text-[20px]' : 'desktop:text-[16px] largeLaptop:text-[16px] laptop:text-[16px] tablet:text-[14px]'} `}
                    aria-labelledby="dropdownMenuButton2"
                    data-te-dropdown-menu-ref>
                    {
                        props.routes.map((item, index) => <li key={index}>
                            <Link to={item.routePath}>
                                <div
                                    className="w-full px-4 py-2 text-gray-700" data-te-dropdown-item-ref>
                                    {item.routeTitle}
                                </div>
                            </Link>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
