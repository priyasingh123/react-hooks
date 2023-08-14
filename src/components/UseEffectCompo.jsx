import React,{useState, useEffect} from 'react'

const UseEffectCompo = () => {
    const [resourceType, setResourceType] = useState('Posts')
    const [item,setItem] = useState([])
    
    useEffect (() => {
      //why we have to use two .then()
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then (response => response.json())
      .then (json=>setItem (json))
    },[resourceType])
  return (
    <div>
      <button onClick={()=> setResourceType('Posts')} className='btn'>Posts</button>
      <button onClick={()=> setResourceType('Users')} className='btn'>Users</button>
      <button onClick={()=> setResourceType('Comments')} className='btn'>Comments</button>

      <h3>{resourceType}</h3>
      {item.map ((ele, index) => (
        <pre key={index}>{JSON.stringify(ele)}</pre>
      ))}
    </div>
  )
}

export default UseEffectCompo
