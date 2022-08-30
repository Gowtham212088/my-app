import React from "react";
import { useState } from "react";

 const  Form = ()=>{

const [name,setName]=useState("")

const [id,setId]=useState("")

const [place, setPlace] = useState("")

const [designation,setDesignation]=useState("")

const [detail,setDetail]=useState({})


   const handleSubmit=(event)=>{
       event.preventDefault()

       const details = {
        Name:name,
        ID:id,
        Place:place,
    Designation:designation
       }

       setDetail(details)
     

       console.log(details);

   }

     return(
        <div>
      <form onSubmit={handleSubmit}>
      <input
       placeholder="Name"
       onChange={(e)=>setName(e.target.value)}
      /> <br/>
      <input
       placeholder="ID"
       onChange={(e)=>setId(e.target.value)}
      /> <br/>
      <input
       onChange={(e)=>setPlace(e.target.value)}
       placeholder="place"
      /> <br/>
      <input
       onChange={(e)=>setDesignation(e.target.value)}
       placeholder="designation"
      /><br/>
      <button type="submit"> Submit </button>
      </form>

      <div>
        <h1>{detail.Name} </h1> 
        <h1> {detail.ID} </h1> 
        <h1> {detail.Place} </h1> 
        <h1> {detail.Designation} </h1> 
      </div>
        </div>
     )
}

export default Form;
