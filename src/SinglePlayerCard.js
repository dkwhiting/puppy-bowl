import React from "react";

const SinglePlayerCard = (props) => {
  const player = props.player;
  const fetchSinglePlayer = props.fetchSinglePlayer;
  const deletePlayer = props.deletePlayer
  const changeFlag = props.changeFlag
  return (
    <div
      className="single-player-card">
      <div className="header-info">
        <p className="pup-title">{player.name}</p>
        <p className="pup-number">{'#' + player.id}</p>
      </div>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <div className="pup-buttons">
        <button
          className="detail-button"
          data-id={player.id}
          onClick={() => { fetchSinglePlayer(player.id) }}>
          See Details
        </button>
        <button className="remove-player-button" data-id={player.id} onClick={async (event) => {
          console.log(player.id)
          await deletePlayer(player.id)
          changeFlag()
        }}>
          Remove from roster
        </button>
      </div>
    </div >
  )
}

export default SinglePlayerCard