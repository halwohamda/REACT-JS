import React from 'react'
import {useState,useEffect} from 'react'
import './App.css'

const App = () => {
  const[items,setItems]= useState([]);
  const[loading,setLoading]=useState(false);
  const [error,setError]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      fetch("http://localhost:3000/items")
      .then(Response=>{
        if(!Response.ok){
          throw new Error("404 | Not Found 🤦‍♀️")
        }
        return Response.json();
      })
      .then (data=>{
        setItems(data)
        setLoading(true)
        setError(true)
      })
      .catch(error=>{
        setError(error.message);
        setLoading(true)
      })
    },1000)
  },[])
  return (
    <>
      {
        items.map((item)=>(
          <div className="items" key={item.id}>
            <h1>itemName:{item.itemName}</h1>
            <p>Description:{item.Description}</p>
            <span>Teacher:{item.Teacher}</span>
            <pre>price:{item.price}</pre>
          </div>
          ))}
          {!loading && <p className='spnLoading'>Please wait....</p>}
          {error && <p className='err'>{error}</p>}
    </>
  )
}

export default App
