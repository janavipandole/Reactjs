import Copyright from "./CopyRight";
import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";
import FooterPart3 from "./FooterPart3";
import FooterPart4 from "./FooterPart4";

const FooterContainer = (props) => {

    return <>
        <div className="h-[45vh] flex flex-col justify-between w-full pt-5 pl-12 pr-12 pb-5 bg-[#0b1a36] text-gray-200">
            <div className="flex p-5 items-center justify-around w-full">
                <FooterPart1 />
                {props.FooterLinks.map((data, idx) => {
                    return <div key={idx}>
                        <FooterPart2 heading={data.heading} li1={data.li1} li2={data.li2} li3={data.li3} li4={data.li4} li5={data.li5} />
                    </div>
                })}
                <FooterPart3 />
                <FooterPart4 />
            </div>
            <Copyright />
        </div>

    </>
}

export default FooterContainer;