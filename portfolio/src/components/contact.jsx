import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className="contact" ref={ref}>
            <h1>
                Contact Info
            </h1>
            <div className="contact-info">
                <a href="mailto:MostafaWael1987@gmail.com">E-mail</a>
                <a href="https://github.com/MostafaSaad1987">GitHub</a>
            </div>
        </div>
    );
});

export default Contact;
