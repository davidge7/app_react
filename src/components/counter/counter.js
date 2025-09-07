import React, { useEffect, useState } from "react";
import "./counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    //const [state, setState] = useState("initialValue");


    useEffect(() => { 
        console.log(count, 'count changed'); 
    }, [count]);


    return (
        <div className="counter-container">
            <h2 className="counter-title">React Counter</h2>
            <p className="counter-value">Current Count: {count}</p>
            <div className="button-group">
                <button className="btn increment" onClick={() => setCount(count + 1)}>+</button>
                <button className="btn decrement" onClick={() => setCount(count - 1)}>-</button>
                <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
