
const FooterPart4 = () => {
    return <>
        <div>
            <div className="flex h-[200px] flex-col justify-between border-l-2 border-[#17243f] pl-5 gap-5">
                <h1 className="font-bold text-[20px]">Newsletter</h1>
                <div className="flex flex-col gap-5 ">
                    <p className="text-gray-400 items-center">Stay updated with our latest<br /> features and offers.</p>
                    <input placeholder="Enter your email" className="outline-none bg-[#07132d] px-4 py-2 rounded-md w-[240px]" />
                    <div>
                        <button className="px-4 py-2 rounded-md w-[240px] bg-[#4646ea] cursor-pointer">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FooterPart4;