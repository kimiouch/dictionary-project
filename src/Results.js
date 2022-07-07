import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Dictionary.css"

export default function Results(props) {
  if (props.result) {
    return (
    <div className="Results"> 
    <section style= {{margin:" 0 150px"}} >
         <div className="text-center" >
            <h2>{props.result.word}</h2>
       
      {props.result.phonetics.map(function(phonetic, index) {
        return (
          <div key={index}>
            <Phonetic phonetic={phonetic} />
          </div>
        )
      })}
      
        

      </div>
    </section>
      {props.result.meanings.map(function(meaning, index) {
        return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        )
      })}
    </div>
    )
  } else {
    return null
  }
}