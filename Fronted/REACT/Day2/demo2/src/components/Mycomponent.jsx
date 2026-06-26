import React from 'react'

const Mycomponent = (props) => {
    console.log("Data from app component",props.data)
     console.log(" Students Data from app component",props.child)
  return (
    <div>Mycomponent</div>
  )
}

export default Mycomponent