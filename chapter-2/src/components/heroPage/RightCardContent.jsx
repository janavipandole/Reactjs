import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
    const { info, btn, id, col } = props;
    console.log(col)
    return <>
        <div className="absolute flex flex-col justify-between text-white top-0 left-0 h-full w-full p-8">
            <h2 className="flex justify-center items-center bg-white text-black h-12 w-12 rounded-full">{id + 1}</h2>
            <div className="mb-5">
                <p className="leading-relaxed text-lg font-medium mb-15">{info}</p>
                <div className="flex justify-between items-center">
                    <button style={{ backgroundColor: col }} className='text-black px-8 py-2 rounded-full'>{btn}</button>
                    <button style={{ backgroundColor: col }} className="px-2 py-2 text-black rounded-full"> <ArrowRight /></button>
                </div>
            </div>
        </div >

    </>
}

export default RightCardContent;