import React, {useState, useEffect} from 'react'

const UseEffectWindow = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect (() => {
        console.log ('called')
        //it is called only once but event listener is attached in starting
        window.addEventListener('resize', handleResize)


        //this is how we unmount or remove eventListener
        // return () => {
        //     window.removeEventListener('resize', handleResize)
        // }
        return (
            window.removeEventListener('resize', handleResize)
        )
    },[])

  return (
    <div>
      {windowWidth}
    </div>
  )
}

export default UseEffectWindow
