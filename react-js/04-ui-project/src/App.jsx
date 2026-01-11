import React from 'react'
import Section1 from './components/Section1/Section1.jsx';
import Section2 from './components/Section2/Section2.jsx';
const App = () => {
  const users=[
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ',
      intro:' ',
      color:'royalblue',
       tag:'Satisfied'
      },
    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      intro:' ',
      color:'lightseagreen',
       tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1657727534676-cac1bb160d64?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      intro:' ',
      color:'orange',
       tag:'Underbanked'
    }
  ]
  return (
    <div className='px-19'>
      <Section1  users={users }/>
      <Section2 />
    </div>
  )
}

export default App