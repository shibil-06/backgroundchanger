import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
    
    <div className='div2'>
      <div className='div3'style={{backgroundColor:color}} >

      </div>
      <button onClick={()=>setColor("red")} className='red'>red</button>
      <button  onClick={()=>setColor("blue")} className='blue'>blue</button>
      <button  onClick={()=>setColor("green")} className='green'>green</button>
      <button onClick={()=>setColor("yellow")} className='yellow'>yellow</button>
      <button onClick={()=>setColor("orange")} className='orange'>orange</button>
    </div>
    </>
  )
}

export default App