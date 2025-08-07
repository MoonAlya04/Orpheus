
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="py-[100px]">
            <h3 className="font-montserrat text-center  text-gold font-bold text-[28px] leading-[50px] tracking-[0.84px] uppercase">Let’s Connect</h3>
            <div className="flex items-center justify-center gap-10 py-6">
                <Link className="black-btn h-[50px] w-[50px] flex items-center justify-center" ><img src="/icon1.png" alt="" />  </Link>
                <Link className="black-btn h-[50px] w-[50px] flex items-center justify-center" ><img src="/icon2.png" alt="" />  </Link>
                <Link className="black-btn h-[50px] w-[50px] flex items-center justify-center" ><img src="/icon3.png" alt="" />  </Link>
                <Link className="black-btn h-[50px] w-[50px] flex items-center justify-center" ><img src="/icon4.png" alt="" />  </Link>
                <Link className="black-btn h-[50px] w-[50px] flex items-center justify-center" ><img src="/icon5.png" alt="" />  </Link>
            </div>
        </div>
    )
}

export default Footer