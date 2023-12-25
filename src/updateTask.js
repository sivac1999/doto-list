import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTaskFromList, updateTaskInList } from "./Taskslice";
import { useEffect } from "react";
const MyVerticallyCenteredModal=(props)=>{
  const {selectedTask}=useSelector((state)=>state.task)

    const [tittle,settittle]=useState("")
    const [description,setdescription]=useState("")
    const[id,setid]=useState(0)
    const dsipatch=useDispatch()

   const updateTask=()=>{
       props.onHide()
       dsipatch(updateTaskInList({id,tittle,description}))
   }
   useEffect(()=>{
      //display the update clike the value
     if(Object.keys(selectedTask).length !==0){
      settittle(selectedTask.tittle)
      setdescription(selectedTask.description)
      setid(selectedTask.id)
     }
   },[selectedTask])
 
    return(
        <div>
             <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         updateTask
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form className="border-1">
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product detailsā</Form.Label>
        <Form.Control type="text" placeholder="Enter your Product details"
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
         />
      </Form.Group>
      
    
    </Form>
        
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit" onClick={(e)=>updateTask(e)}>
        updateTask
      </Button>
      </Modal.Footer>
    </Modal>
    
        </div>
    )
}
export default MyVerticallyCenteredModal