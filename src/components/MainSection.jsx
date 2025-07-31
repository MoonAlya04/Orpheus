/* eslint-disable react/style-prop-object */
import Buttons from "./Buttons";
import Container from "./Container"
import { FaChevronDown } from "react-icons/fa6";

function MainSection({ img }) {
    const ellipseStyle = {
        width: '898px',
        height: '1129px',
        position: 'absolute',
        top: '20px',
        left: '-96px',
        opacity: 0.35,
        transform: 'rotate(90deg)',
        borderRadius: '50%',
        background: 'radial-gradient(closest-side, rgba(143, 191, 253, 0.5) 0%, rgba(38, 72, 122, 0.6) 60%, rgba(15, 18, 24, 0) 100%)',
        backdropFilter: 'blur(128px)',
        zIndex: -1,

    };
    const ellipseSecStyle = {
        width: '956px',
        height: '1012px',
        position: 'absolute',
        top: '-238px',
        right: '0px',
        opacity: 0.5,
        borderRadius: '50%',
        background: 'radial-gradient(closest-side, rgba(143, 191, 253, 0.5) 0%, rgba(38, 72, 122, 0.6) 60%, rgba(15, 18, 24, 0) 100%)',
        backdropFilter: 'blur(128px)',
        zIndex: -1,

    };


    return (
        <section>
            <Container className="flex items-center justify-center py-[166px] ">
                <div style={ellipseStyle}></div>
                <div style={ellipseSecStyle}></div>
                <div className="max-w-[552px]">
                    <h1 className="text-[64px]  font-medium text-gold tracking-[-1px] font-cinzel block">Yet the story of
                        <span className="text-[74px] tracking-[32px] font-extrabold  "> Orpheus</span> </h1>
                    <p className="text-[22px] text-white leading-[50px]  font-montserrat my-[36px]">Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
                    <div className='flex'>
                        <Buttons text="Works" icon={<FaChevronDown className="text-yellow-500 text" />} className='black-btn flex items-center gap-[8px]' />
                        <Buttons text="FREE STAFF" className="gold-btn" />
                    </div>
                </div>
                <div ><img className="w-full h-[700px] object-cover" src={img} alt="art" /></div>
            </Container>
        </section>
    )
}

export default MainSection

