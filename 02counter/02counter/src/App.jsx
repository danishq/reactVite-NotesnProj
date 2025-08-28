import { useState } from "react";

import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);


    // UseState always returns an array,
    // here the first index is the variable and the second index i.e. setCounter is the function

    const addValue = () => setCounter(counter + 1);
    const removeValue = () => setCounter(Math.max(0, counter - 1));
    const resetValue = () => setCounter(0);

    return (
        <>
            <h1>React course with Hitesh</h1>
            <h1>{counter}</h1>
            <h2>Counter Value : {counter}</h2>
            <button onClick={addValue}>Add Value</button>{" "}
            <button onClick={removeValue}>Remove Value</button>{" "}
            <button onClick={resetValue}>Reset Value</button>
            <p>footer : {counter}</p>
        </>
    );
}

export default App;
