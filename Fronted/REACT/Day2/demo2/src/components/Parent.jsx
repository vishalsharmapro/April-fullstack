import { useState } from 'react'



function Parent() {
 let data=[{ name: "Vishal", Email: "vishal@example.com", Address: "Dhanbad",Phone: "8210933398" },
           { name: "Rishav", Email: "rishav@example.com", Address: "Dhanbad",Phone: "82109335698" }
 ]

  return (
    <div>
      <h3>User data</h3>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {data.map((el, i) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.Email}</td>
            <td>{el.Address}</td>
            <td>{el.Phone}</td>
          </tr>
        ))}
        </tbody>       
        
      </table>

     
    </div>
  )
}

export default Parent;
