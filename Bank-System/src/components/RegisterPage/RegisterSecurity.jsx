import { ShieldUser } from "lucide-react";

const RegisterSecurity = () => {
    return <>
        <div className="w-full flex flex-col text-center  justify-center items-center gap-5 h-[30vh]">
            <div className="flex items-center font-bold justify-between gap-2">
                <ShieldUser color="#4646ea" /><h2>Your security is our priority.</h2>
            </div>
            <div>
                <p className="text-[18] text-gray-400 font-medium">LedgerBank uses advanced encryption and a secure ledger system<br/> to protect your data and transactions.</p>
            </div>
        </div>
    </>
}

export default RegisterSecurity;
