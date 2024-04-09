import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css"
const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>
            <div className="cotact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="../../../public/Assets/images/html.png"
                        text="rahimlpt2022@gmail.com"
                    ></ContactInfoCard>
                    <ContactInfoCard
                        iconUrl="../../../public/Assets/images/react.png"
                        text="https://github.com/Rahim00001"
                    ></ContactInfoCard>
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;