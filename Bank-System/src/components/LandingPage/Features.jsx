import FeatureCard from "./FeatureCard";
import FeatureHeading from "./FeatureHeading";

const Features = (props) => {

    return <>
        <div className="h-[90vh] w-full flex items-center justify-around flex-col">
            <FeatureHeading />

            <div className="flex flex-wrap gap-10">
                {props.featuresCardsData.map((data) => {
                    return <FeatureCard color={data.color} icon={data.icon} heading={data.heading} description={data.description} />
                })}
            </div>
        </div>

    </>
}

export default Features;