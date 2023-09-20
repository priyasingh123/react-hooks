import React, {useState, useMemo, useCallback} from 'react'
import List from './List'

const UseCallBackCompo = () => {
    const [num, setNum] = useState(1)
    // const getItems = useMemo (() => {
    //     return [num+1, num+2, num+3]
    // },[num])
    const [dark, setDark] = useState(false)
    const themeStyle = {
        display: 'flex', flexDirection: 'column', 
        width: 200,
        height: 250,
        backgroundColor: dark === true? 'black':'white',
        color: dark === true? 'white':'black'
    }
  return (
    <div style={themeStyle}>
      <input value={num} type='number' onChange={e => setNum(parseInt (e.target.value))}/>
      <button onClick={()=>setDark(!dark)}>Toggle</button>
      {/* here also it will work */}
      {/* <List getItems={useMemo(()=>{return getItems}, [num])}/> */}
      {/* <List getItems={getItems}/> */}
      {/* here also it will work */}
      {/* while using callback, we can send parameters also, 
      as entire function is passed */}
      <List getItems={useCallback(()=>{return getItems(10)}, [num])}/>
    </div>
  )

  function getItems (inc) {
    return [num+inc, num+inc+1, num+inc+2]
  }
}

export default UseCallBackCompo
