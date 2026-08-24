import HeroArrow from "./HeroArrow";
import HeroText from "./HeroText"

const LeftContent = () => {
    return <>
        <div className="flex flex-col justify-between w-1/3">
            <HeroText />
            <HeroArrow />
        </div>
    </>
}

export default LeftContent;