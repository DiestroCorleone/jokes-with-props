import React from "react";

export default function Footer(props) {
    const { footerText } = props;
    
    return(
        <footer>
            <small>{footerText}</small>
        </footer>
    );
}