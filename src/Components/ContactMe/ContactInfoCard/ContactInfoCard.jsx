/* eslint-disable react/prop-types */
import "./ContactInfoCard.css"
const ContactInfoCard = ({ iconUrl, text }) => {
    return (
        <div className="contact-detiles-card">
            <div className="icon">
                <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default ContactInfoCard;