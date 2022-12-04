import React from "react";
import SinglePlayerCard from "./SinglePlayerCard";
import { deletePlayer } from "./index";
import SinglePlayerView from "./SinglePlayerView";

const AllPlayersContainer = (props) => {
  const playerList = props.playerList;
  const selectedPlayer = props.selectedPlayer;
  const fetchSinglePlayer = props.fetchSinglePlayer;
  const backToAllPlayers = props.backToAllPlayers;
  const setPlayerList = props.setPlayerList;
  return (
    <div id="all-players-container">{
      Object.keys(selectedPlayer).length
        ? <SinglePlayerView selectedPlayer={selectedPlayer} backToAllPlayers={backToAllPlayers} setPlayerList={setPlayerList} fetchSinglePlayer={fetchSinglePlayer} />
        : playerList.map((player, index) => {
          return (
            <SinglePlayerCard 
            player={player} 
            key={player.id} 
            deletePlayer={deletePlayer} 
            fetchSinglePlayer={fetchSinglePlayer} playerList={playerList}
            />
          )
        })
    }</div>
  )
}

export default AllPlayersContainer;