import React from "react";
import inputStyles from './Input.module.scss'

export default function Input() {
 
  return (
    <div className="container">
      <form className={inputStyles.form}>
        <input type="text" className={inputStyles.input}></input>
        <input type="submit" className={inputStyles.button}></input>
      </form>
    </div>
  );
}
