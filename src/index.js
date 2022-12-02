import { createRoot } from 'react-dom/client';
import App from './App';


const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

//Fetch player list

//Fetch single player
//Add player
export const addNewPlayer = async (name, breed, url) => {
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
    console.log(result);
    setPlayerList([]);
  } catch (err) {

  }
}

//Fetch Teammates


// getTeams()
const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<App />)