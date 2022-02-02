import React from "react";
import Header from "./components/Header";
import jokesData from "./jokesData";
import Joke from "./components/Joke";
import Footer from "./components/Footer";

export default function App() {
    const jokeElements = jokesData.map(joke => {
       return <Joke setup={joke.setup} punchline={joke.punchline} />
    });
    
    return(
        <div className="container">
        <Header title="JOKERS'S LAND" subTitle="your home for all things funny." />
        <div className="jokes-container">
            {jokeElements}
        </div>
            <Footer footerText="2021 - DiestroCorp | All rights reserved (legit)" />  
        </div>          
    );
}