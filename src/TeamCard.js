import React, { useState, useEffect } from "react";


const teamCard = (props) => {
  const player = props.player
  const fetchSinglePlayer = props.fetchSinglePlayer
  // console.log(player.team)
  return (
    <div className="team">
      {player.teamId == null
        ? <h2>{player.name} is not on a team!</h2>
        :
        <><h2>Teammates</h2>
          <ul>
            {player.team.players.length === 0
              ? player.team.players.map((teammate) => {
                return player.name != teammate.name
                  ? <li key={teammate.id} onClick={() => { fetchSinglePlayer(teammate.id) }}>{teammate.name}</li>
                  : null
              })
              : <li>Team {player.team.name} has no other players!</li>


            }

          </ul></>
      }
    </div>

  )
}



export default teamCard;