import React, {useState} from 'react'
import {Radio} from 'antd'

export const Question = ({question, index}) => {
  const [selected, setSelected] = useState("0");
  const changeSelect = (e) => {
  setSelected(e.target.value)
  }
  return(
    <div>
        <div style={{backgroundColor: "#F2F3F4", padding:"12px", marginTop:"24px"}}>
          <h3>{index+1}. {question.ask}</h3>
          <Radio.Group onChange={e => {changeSelect(e)}} value={selected}>
          {
          question.answers.map(answer => 
          <p>
          <Radio value={answer.id}>{answer.content}</Radio>
          </p>
          )
          }
          </Radio.Group>
        </div>
    </div>
  )
}