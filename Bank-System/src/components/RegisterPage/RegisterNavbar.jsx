import { Landmark } from "lucide-react";
import { Link } from 'react-router-dom'

const RegisterNavbar = () => {
    return <>
        <div>
            <div className="py-5 border-b-1 border-[#e4e5fc] w-full sticky top-0 px-[40px] flex items-center justify-between">
                <div className="flex items-center text-[25px] gap-1 font-bold"><Landmark strokeWidth={2.8} size={40} color="#4646ea" /><span>LedgerBank</span> </div>

                <div className="flex items-center font-semibold">
                    <p>Already have an account? <Link to="/login" className="text-blue-800 ml-2">Login</Link></p>
                </div>
            </div>
        </div>

    </>
}

export default RegisterNavbar;
