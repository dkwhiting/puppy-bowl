import { createRoot } from 'react-dom/client';
import App from './App';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

//Fetch player list

//Fetch single player
//Add player
export const addNewPlayer = async (name, breed, url, team) => {
  try {
    const response = await fetch(
      `${APIURL}/players`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          breed: breed,
          imageUrl: url,
          teamId: team
        }),
      })
  } catch (err) {
    console.log('Oops! There was a problem uploading new player')
  }

}

//Remove player
export const deletePlayer = async (player) => {
  try {
    const response = await fetch(
      `${APIURL}/players/${player}`,
      {
        method: 'DELETE'
      }
    );
    const result = await response.json();
  } catch (err) {

  }
}

//Fetch Teammates
export const fetchTeams = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}teams`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    return (result.data.teams)
  } catch (err) {
    console.error("Oh boy, can't seem to fetch the teams", err);
  }
};
fetchTeams()
// getTeams()
const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<App />)