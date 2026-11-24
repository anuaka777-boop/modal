import React, { useState } from 'react'
import closeIcon from "./assets/delete.png"

function App() {
  let [counter, setCounter] = useState(0)
  let [openModal, setOpenModal] = useState(false)
  let [btnModal, setBtnModal] = useState(true)

  function plusCounter() {
    setCounter(counter + 1)
  }

  function modalOchish() {
    setOpenModal(true)
    setBtnModal(false)
  }

  function modalYopish() {
    setOpenModal(false)
    setBtnModal(true) 
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={plusCounter}>+</button>
      <br />
      {btnModal && (
        <button onClick={modalOchish}>Modal ochish</button>
      )}
      {
        openModal && (
          <div className='modal'>
            <img src={closeIcon} alt="closeIcon" className='xIcon' onClick={modalYopish} />
            <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti consequatur rem velit.</p>
          </div>
        )
      }
    </div>
  )
}

export default App