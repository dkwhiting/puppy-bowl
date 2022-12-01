import React from "react";
import SinglePlayerCard from "./SinglePlayerCard";

const AllPlayersContainer = (props) => {
  const playerList = props.playerList;
  return (
    <div id="all-players-container">{
      playerList.map((player, index) => {
        return (
          <SinglePlayerCard player={player} key={player.id}/>
        )
      })
      
    }</div>
  )
}

export default AllPlayersContainer;