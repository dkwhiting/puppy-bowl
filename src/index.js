import { createRoot } from 'react-dom/client';
import App from './App';

//Fetch player list
//Fetch single player
//Add player
//Remove player
//Fetch Teammates

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<App />)