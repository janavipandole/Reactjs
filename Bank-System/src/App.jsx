import Home from "./components/LandingPage/Home";
import { FileText, ShieldCheck, WalletCards, FileClock } from "lucide-react";


const App = () => {
  // card Data
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

  // Footer data
   const FooterLinks = [
        {
            heading: "Quick Links",
            li1: "Home",
            li2: "Features",
            li3: "About Us",
            li4: "How It Works",
            li5: "Contact",
        },
        {
            heading: "Support",
            li1: "Help Center",
            li2: "FAQs",
            li3: "Privacy Policy",
            li4: "Terms & Conditions",
            li5: "Security",
        }
    ];
  return <>
    <Home featuresCardsData={featuresCardsData} FooterLinks={FooterLinks} />
  </>
}

export default App;