import React from "react";

export default function Joke(props) {
    const { setup, punchline } = props;
    
    return(
        <article>
            <p><strong>{setup}</strong></p>
            <p>{punchline}</p>            
        </article>
    );
}