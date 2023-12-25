import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import MyVerticallyCenteredModal from "./updateTask";
import { store } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { setselectedTask,removeTaskFromList, check } from "./Taskslice";


const TaskList=()=>{
 const {tasksList}=useSelector((state)=>state.task)
 const dsipatch=useDispatch()

   const updateTask=(task)=>{
    console.log("uodate");
    setModalShow(true)
   dsipatch(setselectedTask(task))
   console.log(task);
 
   }

   //deletetask
   const deleteTask =(task)=>{
     console.log("delete"+task);
     console.log(task);

    //  let x=tasksList.filter((e)=>{
    //   return e.tittle!==task
    //  })
     
     dsipatch(removeTaskFromList(task))
   }

   const [modalShow, setModalShow] = useState(false);
   const [tittle,settittle]=useState("")
   const [description,setdescription]=useState("")

  const handlecheckbox=(i)=>{
    let a=tasksList && tasksList.map((task,index)=>{
    return task.id===i ? task.check ? {...task,check:false}:{...task,check:true} :task
  })
  dsipatch(check(a))
  }
    return(
        <div>
    
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Clicky</th>
         <th>Product</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
         tasksList ?.map((task,index)=>{
          return(
            <tr key={task.id}>
            <td>{index+1}</td>
             
              {
                 !task.check ?(<>
                <td>
                  <input type="checkbox"  onClick={()=>handlecheckbox (task.id)} />  
                </td> 
                 <td>    {task.description} </td>
             
                </>):(<>
                 <td>
                  <input type="checkbox" onClick={()=>handlecheckbox (task.id)}  />
                 </td> 
                <td><del>{task.description}</del></td>
           
                </>)
              }
            
            
           
            <td>
            <Button variant="primary" className="mx-3"
            onClick={()=>updateTask(task)}
            >
              <i class="bi bi-pencil-square"></i>
              </Button>
  
            <Button variant="primary"
           onClick={()=>deleteTask(task)}

            
            >
              <i class="bi bi-trash3"></i>
              </Button>
  
             </td>
          </tr>
          )
          
        })
      }
       
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
      </tbody>
    </Table>
        </div>
    )
}
export default TaskList