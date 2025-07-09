import { useState } from "react"
 function Age(){
  let [age,setage]=useState(42);

   let increment=()=>{
        setage(age=age+1);
    }
    let decrement=()=>{
        setage(age=age-1);
    }

    let style={
         height:"30px",
         width:"30px",
         backgroundColor:"black",
         color:"white"
    }
    return (
        <div>
             <h2>your age {age} {   age <50?(<i className="fa-solid fa-heart"></i>):(<i className="fa-solid fa-heart-crack"></i>)}</h2>
            <button onClick={()=>{
                increment();
                increment();
                increment();
            }}>+3</button>
            <button onClick={()=>{
                increment();
            }}>+1</button>
          
            <button onClick={()=>{
                decrement();
                 decrement();
                  decrement();
            }}>-3</button>
            <button onClick={()=>{
                decrement();
            }}>-1</button>
       
        </div>
       
    )
 }

 export{Age}