import FeatureCard from "./FeatureCard";
import FeatureHeading from "./FeatureHeading";
import { FileText, ShieldCheck, WalletCards, FileClock } from "lucide-react";

const Features = () => {
    const featuresCardsData = [
        {
            icon: <ShieldCheck size={76} color="#4746ea" />,
            color: "#e4e5fc",
            heading: "Secure Transactions",
            description: "Your transactions are protected with advanced encryption and multi-layer security."
        },
        {
            icon: <FileClock size={76} color="#279471" />,
            color: "#daf4ec",
            heading: "Real-time Balance",
            description: "Get real-time updates on your account balance and never miss what matters."
        },
        {
            icon: <FileText size={76} color="#2a63d6" />,
            color: "#e3ebfc",
            heading: "Transaction Tracking",
            description: "Track all your transactions with detailed history and instant notifications."
        }, {
            icon: <WalletCards size={76} color="#9152e7" />,
            color: "#ede0fd",
            heading: "Ledger-based Banking",
            description: "Powered by a robust ledger system for accuracy, transparency, and reliability."
        }
    ];
    return <>
        <div className="h-[90vh] w-full flex items-center justify-around flex-col">
            <FeatureHeading />
            <div className="flex flex-wrap gap-10">
                {featuresCardsData.map((data) => {
                    return <FeatureCard color={data.color} icon={data.icon} heading={data.heading} description={data.description} />
                })}
            </div>


        </div>

    </>
}

export default Features;