const FooterPart2 = (data) => {
    const { heading, li1, li2, li3, li4, li5 } = data
    return <>
        <div className="flex h-[200px] flex-col justify-between border-l-2 border-[#17243f] pl-5 gap-5">
            <h1 className="font-bold text-[20px]">{heading}</h1>
            <ul className="flex flex-col gap-2">
                <li className="text-gray-400">{li1}</li>
                <li className="text-gray-400">{li2}</li>
                <li className="text-gray-400">{li3}</li>
                <li className="text-gray-400">{li4}</li>
                <li className="text-gray-400">{li5}</li>
            </ul>
        </div>
    </>
}

export default FooterPart2;