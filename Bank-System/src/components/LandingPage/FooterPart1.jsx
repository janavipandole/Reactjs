import { Landmark } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const FooterPart1 = () => {
    return <>
        <div>
            <div className="flex h-[200px] flex-col justify-between gap-5">
                <div className="flex items-center text-[25px] gap-1 font-bold">
                    <Landmark strokeWidth={2.8} size={40} color="#8776f6" /><span>LedgerBank</span>
                </div>
                <div>
                    <h1 className="text-gray-400 text-[12px]">Simple. Secure. Smart Banking.</h1>
                </div>
                <div>
                    <p className="text-[12px] text-gray-400">LedgerBank is built to make<br /> banking easy, secure, and<br /> accessible for everyone.</p>
                </div>
                <div>
                    <ul className="flex gap-4 text-center">
                        <li className="border border-gray-500 rounded-md p-2"><FaYoutube size={14} /></li>
                        <li className="border border-gray-500 rounded-md p-2"><FaTwitter size={14} /></li>
                        <li className="border border-gray-500 rounded-md p-2"><FaLinkedinIn size={14} /></li>
                        <li className="border border-gray-500 rounded-md p-2"><FaGithub size={14} /></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default FooterPart1;