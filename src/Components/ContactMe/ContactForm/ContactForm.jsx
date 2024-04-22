import "./ContactForm.css"
import { FaRegPaperPlane } from "react-icons/fa";
const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <h2 className="text-[40px] text-[#d9dae7] font-semibold">Contact Me</h2>
            <p className="text-neutral-300 mb-5">I will read all emails. Send me any message you want and I will get back to you.</p>
            <form action="">
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>

                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3}></textarea>

                <button className="flex justify-center items-center gap-2"><FaRegPaperPlane />SEND </button>
            </form>
        </div>
    );
};

export default ContactForm;