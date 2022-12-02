import React, { useState } from "react";
import { addNewPlayer } from "./index";
import { fetchTeams } from "./index";

const Form = (props) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [url, setUrl] = useState('')
  const [team, setTeam] = useState('')

  const smallerTeam = async () => {
    let newArr = []
    let teams = await fetchTeams()
    for (let i in teams) {
      newArr.push(teams[i])
    }
    if (newArr[0].players.length > newArr[1].players.length) {
      console.log('Ruff: ' + newArr[0].players.length + ' Fluff: ' + newArr[1].players.length)
      return 533
    } else {
      console.log('Ruff: ' + newArr[0].players.length + ' Fluff: ' + newArr[1].players.length)
      return 532
    }

  }

  return (
    <form className="form" onSubmit={async (event) => {
      event.preventDefault();
      await addNewPlayer(name, breed, url, team);
      // event.target[3].
      setTeam(await smallerTeam())
      // console.dir(event.target[4])

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
        <input value={url} type="text" id="image" onChange={(event) => { setUrl(event.target.value) }}></input>
      </div>
      <div>
        <label htmlFor="team-id">TeamId:</label>
        <select type="number" id="team">
          <option value={team}>Free Agent</option>
          <option value={532}>Ruff</option>
          <option value={533}>Fluff</option>
        </select>
      </div>
      <button>Submit</button>
    </form >
  )
}

export default Form