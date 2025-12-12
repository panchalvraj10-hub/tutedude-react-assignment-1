import React, {useState} from "react";

function Functioncomponent(){
const [count, setCount] = useState(0);
return(
    <div className="box">
      <h2>Function Component</h2>
      <div className="count">
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
);
}

export default Functioncomponent;