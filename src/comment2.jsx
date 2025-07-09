import { useState } from "react";

 
 function Comment2(){
 let [formdata,setformdata]=useState({
    username:"",
    remark:"",
    rating:5,
 })
   
     let inputchange=(event)=>{
        setformdata((currdata)=>{
            return{...currdata,[event.target.name]:event.target.value}
        })
    }

  let defaulthendle=(event)=>{
 event.preventdefault();
  }

     return(
        <div>
            <form  onSubmit={defaulthendle}>

                <input placeholder="username"type="text" value={formdata.username} onChange={inputchange} name="username" />
                <br></br>
                 <br></br>
                 <textarea placeholder="remark"  value={formdata.remark} onChange={inputchange} name="remark"></textarea>
                  <br></br>
                 <br></br>
                 <input placeholder="rating"type="number"min={1} max={5}  value={formdata.rating} onChange={inputchange} name="rating" />
                 <br></br>
                  <br></br>
                 <button> Add Remark</button>
            </form>
        </div>
     )
 }
 
 export{Comment2};



  