
function Buttons({ icon,text, className }) {
    return (
    <button className={`px-[36px] py-[16px] rounded uppercase font-montserrat ${className}`}>
        {text}{icon}
    </button>
    )
}

export default Buttons



