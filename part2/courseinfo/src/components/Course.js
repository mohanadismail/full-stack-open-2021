import React from "react"

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <>
      {parts.map(part => 
      <Part part={part} key={part.id}/>
      )}
      </>
    )
  }
  
  const Total = ({parts}) => {
    return (
      <b>
        total of {parts.reduce((sum, part) => 
        sum += part.exercises
        , 0)} exercises
      </b>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

export default Course
