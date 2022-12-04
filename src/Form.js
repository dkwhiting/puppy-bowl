import React, { useState } from "react";
import { addNewPlayer } from "./index";
import { fetchTeams } from "./index";

const Form = (props) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [url, setUrl] = useState('https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png')
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
    <>
      <div className="nav-bar">
        <div>
          <h2>Adam Dallin & Maria Puppy Bowl</h2>
        </div>
        <form className="form" onSubmit={async (event) => {
          event.preventDefault();
          if (url == '') {
            setUrl('https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png')
          }
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

          <div className="label-input">
            <label htmlFor="name">Name:</label>
            <input value={name} type="text" id="name" class="input" onChange={(event) => setName(event.target.value)}></input>
          </div>
          <div className="label-input">
            <label htmlFor="breed">Breed:</label>
            <input value={breed} type="text" id="breed" class="input" onChange={(event) => setBreed(event.target.value)}></input>
          </div>
          <div className="label-input">
            <label htmlFor="url">ImageURL:</label>
            <input value={url} type="text" id="image" class="input" onChange={(event) => { setUrl(event.target.value) }}></input>
          </div>
          <div className="label-input">
            <label htmlFor="team-id">Team:</label>
            <select type="number" id="team" class="input" onChange={(event) => { setTeam(event.target.value) }}>
              <option value={team}>Free Agent</option>
              <option value={532}>Ruff</option>
              <option value={533}>Fluff</option>
            </select>
          </div>
          <button id="submit">Submit</button>
        </form >
      </div>
    </>


  )
}

export default Form