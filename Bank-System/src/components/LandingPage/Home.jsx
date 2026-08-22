import Features from "./Features";
import Footer from "./Footer";
import HomeCenter from "./HomeCenter";
import Navbar from "./Navbar";

const Home = (props) => {

    return <>
        <Navbar />
        <HomeCenter />
        <Features featuresCardsData={props.featuresCardsData} />
        <Footer FooterLinks={props.FooterLinks} />
    </>
}

export default Home;