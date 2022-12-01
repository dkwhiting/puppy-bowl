import React from "react";
import SinglePlayerCard from "./SinglePlayerCard";
import SinglePlayerView from "./SinglePlayerView";

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
          <SinglePlayerCard player={player} key={player.id} fetchSinglePlayer={fetchSinglePlayer}/>
        )
      })
    }</div>
  )
}

export default AllPlayersContainer;