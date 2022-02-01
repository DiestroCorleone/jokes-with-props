import React from "react";

export default function Header(props) {
    const { title, subTitle } = props;
    
    return(
        <header>
            <h1 className="header-title">{title}</h1>
            <h2 className="header-subtitle">{subTitle}</h2>
        </header>    
    );
}