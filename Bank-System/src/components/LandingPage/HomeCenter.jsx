import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const HomeCenter = () => {
    return <>
        <div className="h-[90vh] w-full flex items-center justify-between gap-5 px-20 bg-[#e4e5fc]">
            <HomeLeft />
            <HomeRight />
        </div>

    </>
}

export default HomeCenter;