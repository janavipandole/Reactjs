


const FeatureCard = (data) => {
    const { color, icon, heading, description } = data;

    return <>
        <div className="card flex flex-col gap-4 items-center justify-center h-[300px] w-[240px] border-none  rounded-2xl p-5 shadow-[0_25px_25px_rgba(0.1,0.1,0.1,0.1)] ">
            <div className="h-[100px] w-[100px] rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
                {icon}
            </div>
            <div>
                <h1 className="text-center text-[18px] font-bold">{heading}</h1>
            </div>
            <div>
                <p className="text-center text-1xl text-gray-700 font-medium">{description}</p>
            </div>
        </div>
    </>
}

export default FeatureCard;