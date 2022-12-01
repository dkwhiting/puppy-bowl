import { createRoot } from 'react-dom/client';
import App from './App';

//const App = () => { return (<div> <p>Hello world!</p> </div>)}

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(<App />)