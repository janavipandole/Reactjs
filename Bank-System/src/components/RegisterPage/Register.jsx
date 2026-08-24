import RegisterFooter from "./RegisterFooter";
import RegisterMain from "./RegisterMain";
import RegisterNavbar from "./RegisterNavbar";

const Register = (props) => {
    return <>
        <RegisterNavbar />
        <RegisterMain  featuresCardsData={props.featuresCardsData} />
        <RegisterFooter />
    </>
}

export default Register;
