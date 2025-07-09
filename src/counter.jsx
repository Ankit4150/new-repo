import { useState } from "react";

 
 export default function Counter(){
    let [count,setcount]=useState(0);
    let incCount=()=>{
        setcount(count+1)
    };
    return(
        <div>
            <h3>count={count}</h3>
            <button onClick={incCount}> increase count </button>
        </div>
    );
 }