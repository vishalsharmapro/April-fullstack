import React from 'react'
import { Child } from './Child'

const Parent = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', }}>
       <p>
        Hello, my name is Vishal Kumar. I completed my MCA in 2025 and have a
        strong interest in software development and technology. I have knowledge
        of Python, Django, SQL, HTML, CSS, and JavaScript, along with hands-on
        experience through academic and personal projects. I am a quick learner,
        enjoy solving problems, and am eager to start my career where I can
        apply my skills and continue growing as a professional.
      </p>
    
      <Child />
    </div>
    
  )
}

export default Parent