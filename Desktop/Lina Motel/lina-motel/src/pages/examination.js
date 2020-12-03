import React from "react"
import {Question} from '../components/question';
import {HomeMenu} from '../components/home-menu';

export const Examination = () => {
  
const questions = [
  {
  "id": "1",
 "ask": "A __________ system is a set of interrelated subsystems.",
 "answers" : [
   {
     "id": "1",
     "content": "A. secondary",
     "isCorrect": false,
   },
   {
    "id": "2",
    "content": "B. hierarchical",
    "isCorrect": true,
  },
  {
    "id": "3",
    "content": "C. complex",
    "isCorrect": false,
  },
 ]
},
{
"id": "2",
"ask": "When data are moved over longer distances, to or from a remote device, the process is known as __________.",
"answers" : [
 {
   "id": "1",
   "content": "A. data communications",
   "isCorrect": true,
 },
 {
  "id": "2",
  "content": "B. registering",
  "isCorrect": false,
},
{
  "id": "3",
  "content": "C. structuring",
  "isCorrect": false,
},
]
}
]
return (
  <div style={{justifyContent: "center", alignContent: "center", display: "flex", flexDirection: "column", margin: "48px"}}>
  {questions.map((question, index) => <Question question={question} index={index}/>)}
  </div>
);
}