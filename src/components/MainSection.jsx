/* eslint-disable react/style-prop-object */
import Buttons from "./Buttons";
import Container from "./Container"
import { FaChevronDown } from "react-icons/fa6";

function MainSection({ img }) {
    return (
        <section>
            <Container style="flex items-center justify-center py-[166px]">
                <div className="max-w-[552px]">
                    <h1 className="text-[64px]  font-medium text-gold tracking-[-1px] font-cinzel block">Yet the story of
                        <span className="text-[74px] tracking-[32px] font-extrabold  "> Orpheus</span> </h1>
                    <p className="text-[22px] text-white leading-[50px]  font-montserrat my-[36px]">Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
                    <div className='flex'>
                        <Buttons text="Works" icon={<FaChevronDown className="text-yellow-500 text" />} className='black-btn flex items-center gap-[8px]' />
                        <Buttons text="FREE STAFF" className="gold-btn" />
                    </div>
                </div>
                <div ><img className="w-full h-[700px] object-cover"   src={img} alt="art" /></div>
            </Container>
        </section>
    )
}

export default MainSection


// className="h-[700px] w-[856px] object-cover"