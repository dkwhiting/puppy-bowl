import React, { useState, useEffect } from "react";
import AllPlayersContainer from "./AllPlayersContainer";
import Form from "./Form"
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

const App = () => {
  const [playerList, setPlayerList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({})
  //call setPlayerlist in deletePlayer and set useEffect to monitor playerList
  const getPlayers = async () => {
    try {
      const response = await fetch(`${APIURL}/players`,);
      const result = await response.json();

      //console.log(result.data.players)
      setPlayerList(result.data.players)
    } catch (err) {
      console.log(err, 'Trouble fetching players')
    }
  }

  useEffect(() => {
    getPlayers();
  }, [playerList])

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

  return (
    <div>
      <Form/>
      <AllPlayersContainer
        playerList={playerList}
        selectedPlayer={selectedPlayer}
        fetchSinglePlayer={fetchSinglePlayer}
        backToAllPlayers={backToAllPlayers}
      />
    </div>
  )
}

export default App