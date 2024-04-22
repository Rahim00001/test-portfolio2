import "./ContactForm.css"
import { FaRegPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fcuynvh', 'template_b1dn80k', form.current, {
                publicKey: '2nqU8uKs59WuxwG1d',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="contact-form-content">
            <h2 className="text-[40px] text-[#d9dae7] font-semibold">Contact Me</h2>
            <p className="text-neutral-300 mb-5">I will read all emails. Send me any message you want and I will get back to you.</p>
            <form action="" ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text" name="from_first_name" placeholder="First Name" />
                    <input type="text" name="from_lastname" placeholder="Last Name" />
                </div>

                <input type="text" name="from_email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3}></textarea>

                <button className="flex justify-center items-center gap-2"><FaRegPaperPlane />SEND </button>
            </form>
        </div>
    );
};

export default ContactForm;