import RegisterCard from "./RegisterCard";

const RegisterLeft = (props) => {
    return <>
        <div className="h-[100%] w-[45%] p-5 flex flex-col items-center justify-around  bg-[#e4e5fc]">
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="font-bold  text-5xl">Welcom to</h1>
                    <h1 className="text-7xl font-bold">Ledger
                        <span className="text-[#4646ea]">Bank</span>
                    </h1>
                </div>

                <p className="text-[20px] text-gray-400 font-lighter">
                    Create your account and experience<br />
                    simple, secure, and smart banking <br />
                    built on a trusted ledger system.
                </p>
            </div>

            <div className="">
                <img className="bg-cover h-[320px]" src="/Register.png" />
            </div>

            <div className="flex">
                {props.featuresCardsData.map((data, idx) => {
                    return <div key={idx}>
                        <RegisterCard icon={data.icon} heading={data.heading} />
                    </div>
                })}
            </div>
        </div>
    </>
}

export default RegisterLeft;
