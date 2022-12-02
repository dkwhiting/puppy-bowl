import React, { useState, useEffect } from "react";
import { fetchTeams } from "./index";

const teamCard = (props) => {
  const player = props.player
  const fetchSinglePlayer = props.fetchSinglePlayer

  const getTeammates = async () => {
    let teams = await fetchTeams()
    let currentTeam
    for (let i in teams) {
      if (teams[i].id === player.teamId) {
        currentTeam = teams[i]
      }
    }

    return await currentTeam.players
  }

  let teammates = getTeammates()

  return (
    <div className="team">
      {player.teamId == null
        ? <h2>{player.name} is not on a team!</h2>
        :
        <><h2>Teammates</h2>
          <ul>
            {teammates.length <= 1
              ? teammates.map((teammate) => {
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