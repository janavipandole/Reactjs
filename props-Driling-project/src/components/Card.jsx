import { Building2, User } from "lucide-react";


const Card = (info) => {
    const { name, role, company, price, available, skills, description } = info;

    return <>
        <div>
            <div className="card h-[380px] border w-[280px]">
                <div className="p-4">
                    <div className="top flex  justify-between mb-5">
                        {available && (
                            <span className="text-white rounded-full px-4 py-1 bg-[#32CD32]">
                                available
                            </span>
                        )}{
                            <span></span>
                        }
                        <h4>{price}</h4>
                    </div>
                    <div className="center flex flex-col gap-1 items-center justify-center">
                        <img className="h-[100px] w-[100px] rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                        <h1 className="text-[18px] font-semibold">{name}</h1>
                        <h2 className="text-[14px] text-gray-400">{role}</h2>
                        <h3 className="flex  gap-2 items-center justify-center text-[#20A7DB]">
                            {company === "Freelancer" && (
                                <User color="#20A7DB" />
                            )}
                            {company !== "Freelancer" && (
                                <Building2 color="#20A7DB" />
                            )}


                            <span className="text-[14px]">{company}</span></h3>
                        <div className="skills text-[10px] flex gap-2 items-center justify-center">
                            {skills.map(function (skill) {
                                return <span className="border rounded-full px-3 py-1">{skill}</span>
                            })}
                        </div>
                        <p className="text-[10px] text-center text-gray-400 mt-2">{description}</p>
                    </div>
                </div>
                <div className="bottom text-center hover:bg-sky-500 hover:text-white h-[48px]">
                    <button className=" font-semibold text-[12px]">VIEW PROFILE</button>
                </div>
            </div>
        </div>
    </>
}

export default Card;