import React from "react";
import { useSelector } from "react-redux";

const Header = ( )=>{
 const {tasksList}= useSelector((state)=>state.task)
 console.log(tasksList);
    return(
      <div>
        <h1 className="text-sucess text-center my-4" >Do-to-List</h1>
        {/* <p className="text-center my-4">currently ${tasksList.length} Task pending</p> */}
      </div>
    ) 
}
export default Header