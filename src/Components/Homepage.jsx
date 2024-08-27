import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADDFunc } from '../Redux/Action';
import './Hompage.css'

function Homepage() {
  const [inputvalue, SetinputValue] = useState("");

  const Dispatch = useDispatch();
  const id = Math.floor(Math.random() * 1000)
  return (<div>
    <div className='inputDiv'>

      <input type="text" className='Input' placeholder='  Add Your Todo' onChange={(e) => { SetinputValue(e.target.value); }} value={inputvalue} />
      <button
        onClick={() => {
          if (inputvalue === "") {
            window.alert("please enter something")
          } else {
            Dispatch(ADDFunc(
              {
                id: id,
                input: inputvalue,
              }
            ))
            SetinputValue("")
          }
        }} className="ADD">ADD</button>

    </div>

  </div>
  )
}

export default Homepage