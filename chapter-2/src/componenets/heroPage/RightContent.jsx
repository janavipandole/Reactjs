import RightCard from "./RightCard";

const RightContent = (props) => {

    return <>
        <div className="Right flex overflow-x-auto gap-5 w-2/3">
            {props.user.map((elem, i) => {
                return <RightCard key={i} id={i} img={elem.img} info={elem.info} col={elem.col} btn={elem.btn} />
            })}
        </div>
    </>
}

export default RightContent;