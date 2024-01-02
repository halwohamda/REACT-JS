import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Logo from './components/Logo'

const App = () => {
  return (
    <>
   <div className="container flex gap-8 bg-orange-700 text-white font-bold text-4xl m-auto">
   
    <div className=' gap-4 justify-between'>
    <nav className=" flex gap-8 ">

      <ul className='flex justify-center gap-32 '>
        <li>
          <Link to = '/Logo'> Logo</Link>
        </li>
      <li>
        <Link to = '/Home'>Home</Link>
      </li>
      <li>
      <Link to = '/About'>About</Link>
      </li>
      </ul>
    </nav>
  </div>
   </div>
   <Routes>
    <Route path= '/Home' element ={<Home/>}/>
    <Route path = '/About' element ={<About/>}/>
    <Route path = '/Logo' element ={<Logo/>}/>
   </Routes>
    </>
  )
}

export default App
