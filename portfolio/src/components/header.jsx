import React from "react";

const Header = React.forwardRef((props, ref) => {
    return (
        <header ref={ref}>
            <h1>Hello. I'm Mostafa Hassabelnaby.</h1>
            <h2>CS Graduate</h2>
        </header>
    );
});

export default Header;
