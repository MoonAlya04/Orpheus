/* eslint-disable react/style-prop-object */
import { useTheme } from '../context/ThemeContext'
import Buttons from "./Buttons";
import Container from "./Container"
import { FaChevronDown } from "react-icons/fa6";

function MainSection({ img }) {

    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-[#171717]' : 'text-white'
    const btnColor = theme === 'light' ? 'text-white' : 'text-black'



    return (
        <section>
            <Container className="flex items-center justify-center pt-[166px] pb-[80px] ">
                <div className="max-w-[552px]">
                    <h1 className="text-[64px]  font-medium text-gold tracking-[-1px] font-cinzel block">Yet the story of
                        <span className="text-[74px] tracking-[32px] font-extrabold  "> Orpheus</span> </h1>
                    <p className={`text-[22px] leading-[50px] font-montserrat my-[36px] ${textColor}`}>Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
                    <div className='flex gap-[56px]'>
                        <Buttons text="Works" icon={<FaChevronDown className="text-yellow-500 text" />} className='black-btn px-[36px] py-[16px] flex items-center gap-[8px]' />
                        <Buttons text="FREE STAFF" className={`gold-btn px-[36px] py-[16px] ${btnColor}`} />
                    </div>
                </div>
                <div ><img className="w-[700px] h-[700px] object-cover" src={img} alt="art" /></div>
            </Container>
        </section>
    )
}

export default MainSection

