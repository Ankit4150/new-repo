import { useState } from "react"

 
 function Form(){
   let [formdata,setformdata]=useState({
    fullname:"",
    username:"",
    password:""
   })

     let handleinputchange=(event)=>{
         let field=event.target.name;
          let value=event.target.value;
          setformdata((currdata)=>{
              
                return{  ...currdata,  [field]:value}      
          })  
     }
      let  handlesubmit=(event)=>{
          event.preventDefault()
         setformdata({
    fullname:"",
    username:"",
    password:""
   })

      }




    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label htmlFor="fullname">fullname</label>
                <input placeholder="enter fullname" type="text" name="fullname"
                onChange={ handleinputchange} id="fullname" value={formdata.fullname}/>
               
                <br></br>
                <br></br>
                  <label htmlFor="username">username</label>
                <input placeholder="enter usrename" type="text"  name="username"
                onChange={ handleinputchange} id="username" value={formdata.username}/>
               

                  <br></br>
                <br></br>
                  <label htmlFor="password">password</label>
                <input placeholder="enter password" type="text"  name="password"
                onChange={ handleinputchange} id="password" value={formdata.password}/>
                <br></br>
                <br></br>
                <button>submit</button>
            </form>
        </div>
    )
 }

 export{Form}