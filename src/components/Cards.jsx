import { useTheme } from "../context/ThemeContext";

function Cards({ image, title }) {
    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-[#171717]' : 'text-white'
    const gradient = theme === 'light' ? "fade-right-light" : "fade-right-dark"



    return (
        <div className="relative w-[380px] h-[300px] black-btn-bgc ">
            <img src={image} alt={title} className="w-full h-full object-cover" />

            <div className={`absolute bottom-0 left-0 w-full ${gradient} ${textColor} py-2 px-5 z-10`}>
                <h4 className="font-montserrat font-light text-[18px] leading-[50px] tracking-[0.63px] text-justify"
                >{title}</h4>
            </div>
        </div>
    );
}

export default Cards;
