import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className="contact" ref={ref}>
            <h1>
                Contact Info
            </h1>
            <div className="contact-content">
                <div className="contact-item">
                    <p className="contact-title">E-mail</p>
                    <p className="contact-info">MostafaWael1987@gmail.com</p>
                </div>

                <div className="contact-item">
                    <p className="contact-title">GitHub</p>
                    <p className="contact-info">https://github.com/MostafaSaad1987</p>
                </div>
            </div>
        </div>
    );
});

export default Contact;
