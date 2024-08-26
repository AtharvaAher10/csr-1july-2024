import React from 'react'
import './Student.css';

const Student = ({FirstName,LastName,Email,Contact}) => {
  return (
    <div className='container'>
        <div>
        <h2 className='stud'>{FirstName},{LastName},{Email},{Contact}</h2>
        </div>
    </div>
  )
}

export default Student;