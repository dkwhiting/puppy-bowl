import React, { useState, useEffect } from "react";

const teamCard = (props) => {
  const player = props.player
  const fetchSinglePlayer = props.fetchSinglePlayer

  return (
    <div className="team">
      <h2>Teammates</h2>
      <ul>
        {
          player.team.players.map((teammate) => {
            return player.name != teammate.name
              ? <li key={teammate.id} onClick={() => { fetchSinglePlayer(teammate.id) }}>{teammate.name}</li>
              : null
          })
        }
      </ul>
    </div>

  )

}

export default teamCard;