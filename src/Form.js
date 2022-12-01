import React from "react";

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name"></input>
      <label htmlFor="breed">Breed:</label>
      <input type="text" id="breed"></input>
      <button>Submit</button>
    </form>
  )
}

export default Form