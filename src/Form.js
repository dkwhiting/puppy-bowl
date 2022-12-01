import React from "react";
import { addNewPlayer } from "./index";

const Form = (props) => {
  let name = document.getElementById('name').value
  let breed = document.getElementById('breed').value

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input value="name" type="text" id="name"></input>
      <label htmlFor="breed">Breed:</label>
      <input value="breed" type="text" id="breed"></input>
      <button onSubmit={async () => {
        addNewPlayer(name, breed)
      }}>Submit</button>
    </form>
  )
}

export default Form