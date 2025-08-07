import { useTheme } from "../context/ThemeContext";
import Buttons from "./Buttons";
import { HiOutlineDownload } from "react-icons/hi";

// Եթե նկարը src/assets-ի մեջ է
// import statemanImage from '../assets/statemans.png';

function ContuributionNumTwo() {
    const { theme } = useTheme();
    const btnColor = theme === "light" ? "text-white" : "text-black";
    const bgColor =
        theme === "light"
            ? "bg-[linear-gradient(274.7deg,_#DFF1F4_-0.81%,_#E9EAEC_98.64%)]"
            : "bg-[linear-gradient(274.7deg,_#0D1626_-0.81%,_#07090C_98.64%)]";
    const textColor = theme === "light" ? "text-[#171717]" : "text-white";

    return (
        <div
            className={`max-w-[1280px] w-full ${bgColor} h-[420px] overflow-hidden flex justify-between items-center gap-6`}
        >
            <div className="w-full max-w-[700px]  justify-center items-center flex flex-col gap-4">
                <h3 className="font-montserrat font-bold text-[38px] leading-[50px] tracking-[0.035em] text-center align-middle uppercase text-gold">
                    Greek Statue Avatars
                </h3>
                <p
                    className={`font-montserrat ${textColor} font-normal text-[28px] leading-[50px] tracking-[0.285em] text-center uppercase`}
                >
                    500 Greek style User Avatars
                </p>
                <Buttons
                    text="Download"
                    className={`flex px-[36px] py-[16px] items-center gap-2 gold-btn w-max ${btnColor}`}
                    icons={<HiOutlineDownload />}
                />
            </div>
            <div className=" w-full h-full flex">
                <img src="/statemans.png" className="w-full h-full object-cover object-left" alt=""/>
            </div>
        </div>
    );
}

export default ContuributionNumTwo;




