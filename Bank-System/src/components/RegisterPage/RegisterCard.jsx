const RegisterCard = (data) => {
    const { icon, heading } = data;

    return <>
        <div className="flex flex-col gap-3 items-center justify-center">
            <div className="h-[70px] w-[70px] rounded-md bg-white p-3 flex items-center justify-center">{icon}</div>
            <h1 className="text-center text-[14px] w-[65%] font-semibold">{heading}</h1>
        </div>
    </>
}

export default RegisterCard;
