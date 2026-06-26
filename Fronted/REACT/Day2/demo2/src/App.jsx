import React from 'react'
import './App.css'
import Parent from './components/Parent'
import Mycomponent from './components/Mycomponent'

const App = () => {
  let numbers=[100,102,103,104,105]
  let students=[{ name: "Vishal", Email: "vishal@example.com", Address: "Dhanbad",Phone: "8210933398" },
           { name: "Rishav", Email: "rishav@example.com", Address: "Dhanbad",Phone: "82109335698" }
 ]
  return (
    <div>
      { <Parent/> }
      <Mycomponent data={numbers} child={students} />
      
    </div>
  )
}

export default App
