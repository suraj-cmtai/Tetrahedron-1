import "../public/assets/css/modal.css";

export default function Modal({ isOpen, onClose }) {
    return (
        <dialog open={isOpen} className="custom-modal">
            <div className="custom-modal-content">
                <button className="custom-modal-close" onClick={onClose}>&times;</button>
                
                <h3 className="custom-modal-title">Quick Connect</h3>

                <form className="custom-modal-form">
                    <div className="custom-modal-row">
                        <input type="text" placeholder="Your Name" name="name" required />
                        <input type="text" placeholder="Company Name" name="companyName" required />
                    </div>
                    <div className="custom-modal-row">
                        <input type="text" placeholder="Location" name="location" required />
                        <input type="email" placeholder="Your Email" name="email" required />
                    </div>
                    <div className="custom-modal-row">
                        <input type="text" placeholder="Phone Number" name="phone" required />
                        <input type="text" placeholder="Your Industry" name="industry" />
                    </div>
                    <div className="custom-modal-textarea">
                        <textarea rows="6" name="message" placeholder="Your requirements" required></textarea>
                    </div>
                    <div className="custom-modal-button">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}
