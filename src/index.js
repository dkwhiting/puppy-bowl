import { createRoot } from 'react-dom/client';
import App from './App';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/`;

//Fetch player list
//Fetch single player
//Add player
export const addNewPlayer = async (name, breed) => {
  const response = await fetch(
    `${APIURL}/players`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        breed: breed
      }),
    })

}

//Remove player
//Fetch Teammates

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<App />)