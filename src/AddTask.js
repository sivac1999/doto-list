import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

import { addTaskToList } from "./Taskslice";
import { useDispatch } from "react-redux";

 function AddTask(){
  const [tittle,settittle]=useState("")
  const [description,setdescription]=useState("")

 const dsipatch=useDispatch()

  const addTask=(e)=>{
     e.preventDefault();
     console.log(tittle,description);

     dsipatch(addTaskToList({tittle,description}))
     settittle("")
     setdescription("")
  }
    return(
        <div className="border border-3">
          
              <Form className="border p-2" >
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Datils</Form.Label>
        <Form.Control type="text" placeholder="Product details"
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>addTask(e)} className="m-auto text-center">
        Submit
      </Button>
    </Form>
        </div>
    )
 }
 export default AddTask