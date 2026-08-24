import RegisterLeft from "./RegisterLeft";
import RegisterRight from "./RegisterRight";

const RegisterMain = (props) => {
    return <>
        <div className="h-[100vh] w-full flex items-center justify-between gap-5 px-20 ">
            <RegisterLeft featuresCardsData={props.featuresCardsData} />
            <RegisterRight />
        </div>
    </>
}

export default RegisterMain;
