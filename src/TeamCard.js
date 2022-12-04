import React, { useState, useEffect } from "react";
import { fetchTeams } from "./index";

const teamCard = (props) => {
  const player = props.player
  const fetchSinglePlayer = props.fetchSinglePlayer
  const [teammates, setTeammates] = useState([])

  const getTeammates = async () => {
    try {
      let teams = await fetchTeams()
      teams.forEach(team => {
        if (team.id === player.teamId) {
          setTeammates(team.players)
        }
      })
    } catch (err) {
      console.error('No teammates pal', err)
    }
  }

  useEffect(() => {
    getTeammates();
  }, [])

  return (
    <div className="team">
      {player.teamId == null
        ? <h2>{player.name} is not on a team!</h2>
        :
        <>
          <img id="team-logo"
            src={require(`./images/${player.team.name.toLowerCase()}.png`)}
            alt={`${player.team.name} logo`}></img>
          <h2>Teammates</h2>

          <ul>
            {teammates.length > 1
              ? teammates.map((teammate) => {
                return (player.name != teammate.name
                  ? <li key={teammate.id} onClick={() => { fetchSinglePlayer(teammate.id) }}>{teammate.name}</li>
                  : null)
              })
              : <li>Team {player.team.name} has no other players!</li>


            }

          </ul></>
      }
    </div>

  )
}



export default teamCard;