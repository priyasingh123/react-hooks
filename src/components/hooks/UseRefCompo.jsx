const [name, setName] = useState('')
  const renderCountRef = useRef(0)
  //here renderCountRef is an object with only one property called current 
  // renderCountRef = {current: 0}

  const focusRef = useRef()
  const prevNameRef = useRef('')

  //if this code is uncommented, then it will run in infinite loop, hence useRef
  useEffect (() => {
    renderCountRef.current += 1
  })

  const handleFocus = () => {
    focusRef.current.focus()
  }

  useEffect (() => {
    prevNameRef.current = name
  }, [name])

  return (
    <div className="App">
      <input ref={focusRef} value={name} onChange={e => setName(e.target.value)} />
      my name is {name}
      count is {renderCountRef.current}
      previous name is {prevNameRef.current}
      <button onClick={handleFocus}>Focus</button>
    </div>
  );