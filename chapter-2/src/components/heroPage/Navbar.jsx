import { CornerDownRight } from "lucide-react";

const Navbar = () => {
    return <>
        <div className="flex iteams-center justify-between px-18 py-8">
            <button className="px-8 py-2 bg-black rounded-full text-white text-xs">TARGET AUDIENCE</button>
            <button className="px-8 py-1 text-gray-800 flex iteams-center uppercase justify-between text-sm tracking-widest"><CornerDownRight size={14} /> Digital Banking platform</button>
        </div>
    </>
}

export default Navbar;