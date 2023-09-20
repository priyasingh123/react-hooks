import React, {useState, useMemo, useEffect} from 'react'

const UseMemoCompo = () => {
    const[num, setNum] = useState(0)
    const [dark, setDark] = useState(true)
    const handleChange = (e) => {
        setNum(parseInt(e.target.value))
    }
    
    const doubleNumber = useMemo(()=> {return slowFunction(num)}, [num])
    const themeStyle = useMemo (() => { return {
        display: 'inline-block', 
        backgroundColor: dark===true ? 'black':'white', 
        color: dark===true ? 'white':'black'
        }
    },[dark])


    useEffect(() => {
        //it will be called when button is clicked to change theme
        //ISSUE is it will called even if num value is changed, as this component is rendered again 
        //and everytime new object of themeStyle is created
        //and since useEffect compares reference for object, it will call this useEffect function
        console.log ('theme changed')
    },[themeStyle])


  return (
    <div>
      <input style={{display: 'block', margin: 'auto'}} type='number' id="num" onChange={handleChange} value={num}/>
      <button style={{display: 'block', margin: 'auto'}} onClick= {()=>setDark(!dark)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )

  function slowFunction (num) {
    for (let i=0; i<100000000;i++) {}
    return 2*num
   }
}

export default UseMemoCompo
