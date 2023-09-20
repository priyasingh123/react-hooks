import React, {useState, useEffect} from 'react'

const UseEffectUnmount = () => {
    const [resourceType, setResourceType] = useState('Posts')
    useEffect (()=> {
        console.log (`changed to ${resourceType}`)

        //first this return is executed
        //this cleans up 
        //likewise we can use for eventListener
        return () => {
            console.log ('return from useEffect')
        }
    
    },[resourceType])
  return (
      <div>
      <button onClick={()=> setResourceType('Posts')} className='btn'>Posts</button>
      <button onClick={()=> setResourceType('Users')} className='btn'>Users</button>
      <button onClick={()=> setResourceType('Comments')} className='btn'>Comments</button>

      <h3>{resourceType}</h3>
      
    </div>
  )
}

export default UseEffectUnmount
