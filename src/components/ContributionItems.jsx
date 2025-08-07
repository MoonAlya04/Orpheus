/* eslint-disable jsx-a11y/alt-text */
import { useTheme } from "../context/ThemeContext";
import Buttons from "./Buttons";
import { HiOutlineDownload } from "react-icons/hi";

function ContributionItems() {
    const { theme } = useTheme();
    const btnColor = theme === "light" ? "text-white" : "text-black";
    const bgColor = theme === 'light' ? 'bg-[#E0E0E0]' : "bg-[#07090C]";
    const textColor = theme === 'light' ? 'text-[#171717]' : 'text-white';
    const image = theme === 'light'
        ? "/statewoman.png"
        : '/blackstate.png';

    return (
        <div className={` max-w-[1280px] w-full  ${bgColor}  h-[420px] overflow-hidden flex justify-center items-center`}>
            <div className=" w-full h-full">
                <img src={image} className="w-full h-full object-cover object-right" />
            </div>
            <div className="w-full max-w-[700px]  justify-center items-center flex flex-col gap-4">
                <h3 className="font-montserrat font-bold text-[38px] leading-[50px] tracking-[0.035em] text-center align-middle uppercase text-gold">
                    3D Greek Statue Pack
                </h3>
                <p className={`font-montserrat ${textColor} font-normal text-[28px] leading-[50px] tracking-[0.285em] text-center uppercase`}>
                    Over 200 Greek style sculpture  
                </p>
                <Buttons
                    text="Download"
                    className={`flex px-[36px] py-[16px] items-center gap-2 gold-btn w-max ${btnColor}`}
                    icons={<HiOutlineDownload />}
                />
            </div>
        </div>
    );
}

export default ContributionItems;


//  <img src={image} className={` w-full h-full object-cover`} />
//  md:flex-row ${reverse ? 'md:flex-row-reverse' : ''