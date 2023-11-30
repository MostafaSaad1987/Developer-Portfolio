import React from "react";

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className="contact" ref={ref}>
            Test
        </div>
    );
});

export default Contact;
