
 import { useSelector } from 'react-redux'
 import { useDispatch } from 'react-redux'
 import { useState } from 'react'
import dele from '../Images/delete.png'
import React from 'react'
import '../Components/Todo.css'
import star from '../Images/star.png'
import {CompFunc, DELFunc} from '../Redux/Action'
function Todo() {

    const value = useSelector((store) => store.todo)
    console.log(value);
    const Dispatch = useDispatch();
    const complete = useSelector((store) => store.complete)
    console.log(complete)
  return (
    <div>
  
 <div>  
 <h1 className='Todo-title'>Pending</h1>
 {
 value.length == 0 ? <div className='empty-todo'>
  <h1 className='todo-nothing'>Nothing left  </h1> <img src={star} className="star" /></div> :
 (
  value.map((e) =>(
    <div className='todo-list'>
   <input type="checkbox"   className='checkboxs'   onChange={()=>{
           Dispatch(CompFunc(e.input));
         setTimeout(()=>{
          Dispatch(DELFunc(value.indexOf(e)))
         },400)
   }}/> 
   <h1 className='h1'>{e.input}</h1> 
   <button onClick={()=>{
      Dispatch(DELFunc(value.indexOf(e)))
   }}  className= "delete-button"><img src={dele} className="delete-image" /></button>
    </div>
))
 )
}

 </div>

 <div>
 <h1 className='completed-title'>Completed</h1>
 {
complete.length === 0 ? <h2 className='noth-com'></h2> :
complete.map((e) =>(
  <p className='complete-todos'>{e}</p>
 ))

 }
 </div>
    
    </div>
  )
}

export default Todo