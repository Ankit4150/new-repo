import { useState } from "react"

 function Likebutton(){
   let [isliked,setisliked]=useState(false);
   let [clicks,setclick]=useState(0);

   let toggle=()=>{
     setisliked(!isliked);
     setclick(clicks+1)
   }
   let likestyle={color:"red"}

    return(
        <div > 
            <p>click={clicks}</p>
            <p onClick={toggle}>
               
               {isliked ? (<i className="fa-solid fa-heart" style={likestyle}></i>):  (<i className="fa-regular fa-heart"></i>)}
               </p>
        </div>
    )
 }

 export {Likebutton}