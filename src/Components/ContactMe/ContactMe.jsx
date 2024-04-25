import Lottie from "lottie-react";
import ContactForm from "./ContactForm/ContactForm";
import emailAnimation from "../../../public/Assets/emailSent.json"
// import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css"
const ContactMe = () => {
    return (
        <section className="contact-container" id="contact">
            <div className="cotact-content flex justify-center items-center">
                <div className="w-[70%] md:max-w-[40%]" data-aos="fade-up-right" data-aos-duration="1000">
                    <Lottie animationData={emailAnimation} className=""></Lottie>
                </div>
                <div className="w-[80%] -mt-10 md:mt-1 lg:w-[50%]" data-aos="fade-up-left" data-aos-duration="1000">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;