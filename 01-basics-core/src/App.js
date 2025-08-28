import { useState } from "react";
import Youtube from "./Youtube";

function App() {
    const [text, setText] = useState("Button");

    const handleClick = () => {
        setText(prev => (prev === "Button" ? "toggle" : "Button"));
    };

    return (
        <>
            <h1>Core React App 1</h1>
            <h1>Core React App 2</h1>
            <Youtube />
            <button onClick={handleClick}>{text}</button>
        </>
    );
}

export default App;


