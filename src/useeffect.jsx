import { useState,useEffect } from "react"



function Counter2(){
    let [Counterx,SetCounterx]=useState(0);
    let [Countery,SetCountery]=useState(0);

  let increasex=()=>{
   let  counterx=Counterx+1
   SetCounterx(counterx)
  }
  let increasey=()=>{
   let  countery=Countery+1
   SetCountery(countery)
  }

  useEffect(function printsomithing(){
    console.log("this is side effect")
  },
  [Counterx])

    return(
        <div>
          <h2>counter={Counterx}</h2>
          <button onClick={increasex}>+1</button>
          <br></br>
           <br></br>
            <br></br>
           <h2>counter={Countery}</h2>
          <button onClick={increasey}>+1</button>
        </div>
    )
 }

 export{Counter2}