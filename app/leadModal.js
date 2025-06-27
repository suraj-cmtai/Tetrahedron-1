import ContactForm from "@/components/ContactForm";
import "../public/assets/css/modal.css";

export default function Modal({ isOpen, onClose }) {
    return (
        <dialog open={isOpen} className="custom-modal">
            <div className="custom-modal-content" style={{display:'flex !important'}}>
                <button className="custom-modal-close" onClick={onClose}>&times;</button>
                
                <ContactForm />
            </div>
        </dialog>
    );
}
