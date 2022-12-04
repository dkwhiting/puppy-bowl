import React, { useState } from "react";
import { addNewPlayer } from "./index";
import { fetchTeams } from "./index";

const Form = (props) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [url, setUrl] = useState('')
  const [team, setTeam] = useState(532)

  const smallerTeam = async () => {
    let newArr = []
    let teams = await fetchTeams()
    for (let i in teams) {
      newArr.push(teams[i])
    }

    if (newArr[0].players.length > newArr[1].players.length) {
      return 533
    } else {
      return 532
    }

  }

  return (
    <form className="form" onSubmit={async (event) => {
      event.preventDefault();
      await addNewPlayer(name, breed, url, team);
      if (event.target[3].selectedIndex === 0) {
        setTeam(await smallerTeam())
      } else if (event.target[3].selectedIndex === 1) {
        setTeam(532)
      } else {
        setTeam(533)
      }
    }
    }>
      <div>
        <h2>Adam Dallin & Maria Puppy Bowl</h2>
      </div>
      <div className="navBar"> 
        <div className = "labelInput">
          <label htmlFor="name">Name:</label>
          <input value={name} type="text" id="name" onChange={(event) => setName(event.target.value)}></input>
        </div>
        <div className = "labelInput">
          <label htmlFor="breed">Breed:</label>
          <input value={breed} type="text" id="breed" onChange={(event) => setBreed(event.target.value)}></input>
        </div>
       <div className = "labelInput">
          <label htmlFor="url">ImageURL:</label>
          <input value={url} type="text" id="image" onChange={(event) => { setUrl(event.target.value) }}></input>
       </div>
       <div className = "labelInput">
          <label htmlFor="team-id">Team:</label>
          <select type="number" id="team" onChange={(event) => { setTeam(event.target.value) }}>
            <option value={team}>Free Agent</option>
            <option value={532}>Ruff</option>
            <option value={533}>Fluff</option>
          </select>
        </div>
          <button id ="submit">Submit</button>
        </div> 
    </form >
  )
}

export default Form