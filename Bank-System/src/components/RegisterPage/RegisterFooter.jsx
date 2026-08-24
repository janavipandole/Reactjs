import RegisterCopyright from "./RegisterCopyright";
import RegisterSecurity from "./RegisterSecurity";

const RegisterFooter = () => {
    return <>
        <div className="w-full h-[40vh] flex flex-col items-center justify-between">
            <RegisterSecurity />
            <RegisterCopyright />
        </div>
    </>
}

export default RegisterFooter;
