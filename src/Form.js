import React, { useState } from "react";
import { addNewPlayer } from "./index";

const Form = (props) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [url, setUrl] = useState('')
  return (
    <form className="form" onSubmit={async (event) => {
      event.preventDefault();
      await addNewPlayer(name, breed, url)
      console.log()
      //// Still needs to auto render after submit ////
    }}>
      <div>
        <label htmlFor="name">Name:</label>
        <input value={name} type="text" id="name" onChange={(event) => setName(event.target.value)}></input>
      </div>
      <div>
        <label htmlFor="breed">Breed:</label>
        <input value={breed} type="text" id="breed" onChange={(event) => setBreed(event.target.value)}></input>
      </div>
      <div>
        <label htmlFor="url">ImageURL:</label>
        <input value={url} type="text" id="breed" onChange={(event) => { setUrl(event.target.value) }}></input>
      </div>
      <button onClick={() => {changeFlag()}}>Submit</button>
    </form >
  )
}

export default Form