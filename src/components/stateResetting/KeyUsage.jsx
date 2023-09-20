//state management using key property

import React, {useState} from 'react'

export default function App() {
  const[reverse, setReverse] = useState(false)
  let revArray = contacts.slice().reverse()
  console.log (revArray)
  return (
    <div >
      <label><input checked={reverse} onChange={() => setReverse(!reverse)} type="checkbox"/>
      Show in reverse Order</label>
      {reverse ? (contacts.map((contact) => {
        return (
          <Details key={contact.id} contact={contact}/>
        )
      })) : (revArray.map((contact) => {
        return (
          <Details key={contact.id} contact={contact}/>
        )
      }))}
      
    </div>
  );
}

const Details = ({contact}) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <h3>{contact.name}</h3>
      {show && <p>{contact.email}</p>}
      <button onClick={()=>setShow(!show)}>{show ? "Hide Email" : "Show Email"}</button>
    </>
  )
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];