
function Buttons({ icons, icon, text, className }) {
    return (
        <button className={` rounded uppercase font-montserrat ${className}`}>
            {icons}{text}{icon}
        </button>
    )
}

export default Buttons



