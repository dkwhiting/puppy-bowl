import { createRoot } from 'react-dom/client';
import App from './App';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

//Fetch player list
//Fetch single player
//Add player
export const addNewPlayer = async (name, breed, url) => {
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
        imageUrl: url
      }),
    })

}

//Remove player
export const deletePlayer = async (player) => {
  try {
    const response = await fetch(
      `${APIURL}/players.data.${player}`,
      {
        method: 'DELETE'
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {

  }
}

//Fetch Teammates

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<App />)