import React from "react";
import SinglePlayerCard from "./SinglePlayerCard";
<<<<<<< HEAD
import { deletePlayer } from "./index";
=======
import SinglePlayerView from "./SinglePlayerView";
>>>>>>> c23a2cbec89801815efbaa56d6941d133874ebad

const AllPlayersContainer = (props) => {
  const playerList = props.playerList;
  const selectedPlayer = props.selectedPlayer;
  const fetchSinglePlayer = props.fetchSinglePlayer;
  const backToAllPlayers = props.backToAllPlayers;
  return (
    <div id="all-players-container">{
      Object.keys(selectedPlayer).length
      ? <SinglePlayerView selectedPlayer={selectedPlayer} backToAllPlayers={backToAllPlayers}/>
      : playerList.map((player, index) => {
        return (
<<<<<<< HEAD
          <SinglePlayerCard player={player} key={player.id} deletePlayer={deletePlayer} />
        )
      })

=======
          <SinglePlayerCard player={player} key={player.id} fetchSinglePlayer={fetchSinglePlayer}/>
        )
      })
>>>>>>> c23a2cbec89801815efbaa56d6941d133874ebad
    }</div>
  )
}

export default AllPlayersContainer;