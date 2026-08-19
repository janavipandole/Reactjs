import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = (props) => {
    return <>
        <div className="h-[90vh] flex iteams-center gap-10 px-18 py-10">
            <LeftContent />
            <RightContent user={props.user} />
        </div>
    </>
}

export default Content;