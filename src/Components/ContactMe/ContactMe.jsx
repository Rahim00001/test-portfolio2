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
                    {/* <ContactInfoCard
                        iconUrl="../../../public/Assets/images/html.png"
                        text="rahimlpt2022@gmail.com"
                    ></ContactInfoCard>
                    <ContactInfoCard
                        iconUrl="../../../public/Assets/images/react.png"
                        text="https://github.com/Rahim00001"
                    ></ContactInfoCard> */}
                    <Lottie animationData={emailAnimation} className=""></Lottie>
                </div>
                <div className="w-[70%] -mt-10 md:mt-1 md:w-[50%]" data-aos="fade-up-left" data-aos-duration="1000">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;