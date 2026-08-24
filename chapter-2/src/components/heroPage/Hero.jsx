import Content from "./Content";
import Navbar from "./Navbar";

const Hero = (props) => {

    return <>
        <div className="h-screen w-full">
            <Navbar />
            <Content user={props.user} />
        </div>
    </>
}

export default Hero;