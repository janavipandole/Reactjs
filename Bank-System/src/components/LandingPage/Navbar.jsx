import { Landmark } from "lucide-react";
import { Link } from 'react-router-dom'


const Navbar = () => {
    return <>
        <div>
            <div className="py-5 sticky top-0 px-[40px] flex items-center justify-between">
                <div className="flex items-center text-[25px] gap-1 font-bold"><Landmark strokeWidth={2.8} size={40} color="#4646ea" /><span>LedgerBank</span> </div>

                <ul className="flex items-center gap-5">
                    <li className="px-4 hover:border-b-2 hover:text-[#4646ea] cursor-pointer font-semibold">Home</li>
                    <li className="px-4 hover:border-b-2 hover:text-[#4646ea] cursor-pointer font-semibold">Features</li>
                    <li className="px-4 hover:border-b-2 hover:text-[#4646ea] cursor-pointer font-semibold">About</li>
                    <li className="px-4 hover:border-b-2 hover:text-[#4646ea] cursor-pointer font-semibold">How It Works</li>
                    <li className="px-4 hover:border-b-2 hover:text-[#4646ea] cursor-pointer font-semibold">Contact</li>
                </ul>

                <div className="flex items-center gap-4">
                    <Link to='/login' className="cursor-pointer hover:bg-[#4646ea] hover:border-transparent hover:text-white border-[2px] border-gray-400 rounded-md px-8 py-2 font-semibold">Login</Link>
                    <Link to='/register' className="cursor-pointer rounded-md px-8 py-2 font-semibold text-white bg-[#4646ea]">Register</Link>
                </div>
            </div>
        </div>

    </>;
}

export default Navbar;