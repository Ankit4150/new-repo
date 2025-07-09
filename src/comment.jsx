import { useState } from "react"

 function Comments(){
   let [formdata,setformdata]=useState({
    username:"",
    remark:"",
    rating:5
   })

   let handleinput=(event)=>{
      setformdata((currdata)=>{
        return{...currdata ,[event.target.name]:event.target.value}
      })
   }
  let preventdefault=(event)=>{
   event.preventdefault();
   setformdata(
    {
    username:"",
    remark:"",
    rating:5
   }
   )
  }

  return(
    <div>
        <form onSubmit={preventdefault}>
        <label htmlFor="usernanme" > username</label>
        &nbsp; &nbsp;
        <input placeholder="username" type="text"  value={formdata.username} onChange={handleinput} name="username" id="username"/>
        <br></br>
         <br></br> 
          <br></br>
          <label htmlFor="remark">remark</label>
           &nbsp; &nbsp;
        <textarea placeholder="remark" value={formdata.remark} onChange={handleinput} name="remark" id="remark"></textarea >
         <br></br>
          <br></br>
          <label htmlFor="rating">rating</label>
           &nbsp; &nbsp;
        <input placeholder="rating" type="number" min={1} max={5}  value={formdata.rating} onChange={handleinput} id="rating"name="rating"/>
         <br></br>
          <br></br>
         <button>Add Comment</button>
         </form>
    </div>

  )
 }

 export {Comments}