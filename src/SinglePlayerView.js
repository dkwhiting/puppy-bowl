import React from "react";
import TeamCard from "./TeamCard";

const SinglePlayerView = (props) => {
  const player = props.selectedPlayer;
  const backToAllPlayers = props.backToAllPlayers;
  const fetchSinglePlayer = props.fetchSinglePlayer
  const noTeam = () => {
    if (player.teamId == null) {
      const empty = ''
      return empty
    } else {
      return player.team.name
    }
  }

  return (
    <div className="single-player-view">
      <div className="left-div">
        <div className="header-info">
          <p className="pup-title">{player.name}</p>
          <p className="pup-number">{'#' + player.id}</p>
        </div>
        <p>{`Team: ${noTeam()}`}</p>
        <p>{'Breed: ' + player.breed}</p>
        <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
        <button id="see-all" onClick={() => { backToAllPlayers() }}>Back to all players</button>
      </div>
      <div className="right">
        <TeamCard player={player} fetchSinglePlayer={fetchSinglePlayer} />
      </div>
    </div>
  )
}

export default SinglePlayerView