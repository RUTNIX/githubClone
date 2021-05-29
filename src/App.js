import React, { useState } from 'react'
import Search from './components/Search'
import Output from './components/Output'
import {API} from './Config/index'
import './App.css'

export default function App() {
  const [name, setName]=useState('')
  const [info, setInfo]=useState()

  const getUser = async (event)=>{
      event.preventDefault()
      let req = await fetch(API + name)
      let resp = await req.json()
      console.log(resp)
      setInfo(resp)
  } 

  return (
    <div>
      <Search
          name={name}
          changeName = {setName}
          send= {getUser}
      />
      <div className='main'>
        <Output
          data = {info}
        />
      </div>
      
    </div>
  )
}
