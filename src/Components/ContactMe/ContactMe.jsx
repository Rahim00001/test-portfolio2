import Lottie from "lottie-react";
import ContactForm from "./ContactForm/ContactForm";
import emailAnimation from "../../../public/Assets/emailSent.json"
// import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css"
const ContactMe = () => {
    return (
        <section className="contact-container" id="contact">
            <div className="cotact-content flex justify-center items-center">
                <div className="w-[80%] md:w-[60%] lg:max-w-[40%] border" data-aos="fade-up-right" data-aos-duration="1000">
                    <Lottie animationData={emailAnimation} className=""></Lottie>
                </div>
                <div className="w-[90%] -mt-10 md:mt-1 lg:w-[50%] border" data-aos="fade-up-left" data-aos-duration="1000">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;