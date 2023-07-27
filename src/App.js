
const Header=(props)=>{
  console.log(props)
  return(
    <p>
      {props.course}
    </p>
  )

}

const Content =(props)=>{
  return(
    <p>
      hey
 {props.part1}, {props.exercises1}
    </p>
  
  )
  
}

const Footer=(props)=>{
  return(
    <h1>
   {props.part2},{props.exercises2}
    </h1>
 
  )

  
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course = "course"/></h1>
    
      <p>
        <Content   
       part1= {part1} exercises1={exercises1}/>
     
      </p>
      <Footer part2={part2} exercises2={exercises2} />
     
    </div>
  )
}

export default App