import { useState } from "react"
 function Joker(){
    let [joke,setjoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";
    
    const getjoke=async()=>{
     let respose= await fetch(URL);
     let result= await respose.json()
     console.log(result)
     setjoke({setup:result.setup,punchline:result.punchline})
    }
    return(
        <div>
            <h2>joker !</h2>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button  style={{backgroundColor:"pink"}}onClick={getjoke}>Get joke</button>
        </div>
    )
 }

 export{Joker}