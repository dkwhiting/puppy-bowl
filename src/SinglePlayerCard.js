import React from "react";

const SinglePlayerCard = (props) => {
  const player = props.player;
  const fetchSinglePlayer = props.fetchSinglePlayer;
  const deletePlayer = props.deletePlayer
  const setPlayerList = props.setPlayerList
  const playerList = props.playerList
  const getTeamLogo = () => {
    if (player.teamId === 532) {
      return 'ruff'
    }
    if (player.teamId === 533) {
      return 'fluff'
    }
  }


  return (
    <div
      className="single-player-card">
      <div className="header-info">
        <p className="pup-title">{player.name}</p>

        <p className="pup-number">{'#' + player.id}</p>
        {player.teamId != null ?
          <img id="small-team-logo"
            src={require(`./images/${getTeamLogo()}.png`)}
            alt={`team logo`} />
          : <></>
        }

      </div>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <div className="pup-buttons">
        <button
          className="detail-button"
          data-id={player.id}
          onClick={() => { fetchSinglePlayer(player.id) }}>
          See My Details
        </button>
        <button
          className="remove-player-button"
          data-id={player.id}
          onClick={async () => {
            console.log(player.id);
            await deletePlayer(player.id);
          }}>Remove Me
        </button>
      </div>
    </div >
  )
}

export default SinglePlayerCard