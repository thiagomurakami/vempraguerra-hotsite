import React from 'react'
import './CollapsibleQuestion.css'

const CollapsibleQuestion = ({ answer, name, question }) => {
  return (
    <li className="question-box">
      <input type="checkbox" style={{ display: 'none' }} id={name} />
      <label htmlFor={name}>
        <b>{question}</b>
      </label>
      <div>{answer}</div>
    </li>
  )
}

export default CollapsibleQuestion
