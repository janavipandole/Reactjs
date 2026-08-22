
const HomeLeft = () => {
    return <>
        <div className="w-[30%] flex flex-col gap-9 ml-10">
            <div className="font-bold text-6xl">
                <h1>Simple.</h1>
                <h1>Secure.</h1>
                <h1 className="text-[#4646ea]">Smart Banking.</h1>
            </div>
            <div className="mt-5">
                <p className="text-[24px] text-gray-400 font-medium">LedgerBank is a modern banking platform built on a secure ledger system to help you manage your accounts, transfer money, and track transactions — all in one place.</p>
            </div>
            <div>
                <button className="cursor-pointer rounded-md px-8 py-4 font-semibold text-white bg-[#4646ea]">Get Started</button>
            </div>
        </div>

    </>
}

export default HomeLeft;