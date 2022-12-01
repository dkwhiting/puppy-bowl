import React, { useState, useEffect } from "react";
import AllPlayersContainer from "./AllPlayersContainer";
import Form from "./Form"
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;
const dummyPlayers = [
  {
    "id": 9233,
    "name": "heckinboy",
    "breed": "nice",
    "status": "bench",
    "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    "createdAt": "2022-11-28T21:16:09.725Z",
    "updatedAt": "2022-11-28T21:16:09.725Z",
    "teamId": null,
    "cohortId": 283
  },
  {
    "id": 9248,
    "name": "Kevin",
    "breed": "Corgi",
    "status": "bench",
    "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    "createdAt": "2022-11-29T01:05:06.547Z",
    "updatedAt": "2022-11-29T01:05:06.547Z",
    "teamId": null,
    "cohortId": 283
  },
  {
    "id": 9249,
    "name": "Pistol Pete",
    "breed": "Basset Hound",
    "status": "bench",
    "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    "createdAt": "2022-11-29T02:26:03.716Z",
    "updatedAt": "2022-11-29T02:26:03.716Z",
    "teamId": null,
    "cohortId": 283
  },
]




const App = () => {
  const [playerList, setPlayerList] = useState([]);
  const [isPlayerDetails, setIsPlayerDetails] = useState(false)
  const getPlayers = async () => {
    try {
      const response = await fetch(`${APIURL}/players`);
      const result = await response.json();
      //console.log(result.data.players)
      setPlayerList(result.data.players)
    } catch (err) {
      console.log(err, 'Trouble fetching players')
    }
  }

  useEffect(() => {
    getPlayers(); 
  }, [])

  const updatePlayers = () => {
    // listCopy = [...playerList]
    //setPlayerList(addPlayerFunc(listCopy))
  }
  return (
    <div>
      <Form />
      <AllPlayersContainer playerList={playerList} />
    </div>
    //new-player-form
    //all-player-container
    //mapped single players
    //API Data and two buttons
    //details button will redraw page with detailed-player
    //detailed-player needs a back button and teams info
  )
}

export default App