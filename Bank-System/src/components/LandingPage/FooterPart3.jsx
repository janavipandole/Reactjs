import { CiMail, CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";



const FooterPart3 = () => {
    return <>
        <div>
            <div className="flex h-[200px] flex-col justify-between border-l-2 border-[#17243f] pl-5 gap-5">
                <h1 className="font-bold text-[20px]">Contact Us</h1>
                <ul className="flex flex-col gap-5 ">
                    <li className="text-gray-400 flex gap-3 items-center"><CiMail /><span>support@ledgerbank.com</span></li>
                    <li className="text-gray-400 flex gap-3 items-center"><IoCallOutline /><span>+91 12345 67890</span></li>
                    <li className="text-gray-400 flex gap-3 items-center"><CiLocationOn /><span>123, Banking Street,<br /> Fintech City, India</span></li>
                </ul>
            </div>
        </div>
    </>
}

export default FooterPart3;