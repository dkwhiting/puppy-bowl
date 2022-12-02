
import React, { useState, useEffect } from "react";
import AllPlayersContainer from "./AllPlayersContainer";
import Form from "./Form"
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

const App = () => {
  const [playerList, setPlayerList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({})

  const getPlayers = async () => {
    try {
      const response = await fetch(`${APIURL}/players`,);
      const result = await response.json();
      setPlayerList(result.data.players)
    } catch (err) {
      console.log(err, 'Trouble fetching players')
    }
  }

  useEffect(() => {
    getPlayers();
  },)

  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}players/${playerId}`);
      const result = await response.json();
      if (result.error) {
        throw result.error;
      }
      setSelectedPlayer(result.data.player)
    } catch (err) {
      console.error("Oh boy, can't seem to fetch that particular player", err);
    }
  };

  const backToAllPlayers = () => {
    setSelectedPlayer({})
  }

  const updatePlayers = () => {
    // listCopy = [...playerList]
    //setPlayerList(addPlayerFunc(listCopy))
  }
  return (
    <div>
      <Form />
      <AllPlayersContainer
        playerList={playerList}
        selectedPlayer={selectedPlayer}
        fetchSinglePlayer={fetchSinglePlayer}
        backToAllPlayers={backToAllPlayers}
        setPlayerList={setPlayerList} />
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