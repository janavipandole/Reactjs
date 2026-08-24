import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
    const { img, info, btn, id, col } = props;
    return <>
        <div className="w-80 shrink-0 overflow-hidden relative rounded-4xl">
            <img className="h-full w-full object-cover" src={img} />

            <RightCardContent info={info} btn={btn} id={id} col={col} />
        </div>
    </>
}

export default RightCard;