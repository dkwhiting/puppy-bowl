import React from "react";

const SinglePlayerView = (props) => {
  const player = props.selectedPlayer;
  const backToAllPlayers = props.backToAllPlayers;

  return (
    <div className="single-player-view">
      <div className="header-info">
        <p className="pup-title">{player.name}</p>
        <p className="pup-number">{'#' + player.id}</p>
      </div>
      <p>{'Team: ' + player.team}</p>
      <p>{'Breed: ' + player.breed}</p>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <button id="see-all" onClick={() => {backToAllPlayers()}}>Back to all players</button>
    </div>
  )
}

export default SinglePlayerView