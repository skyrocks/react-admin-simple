import {createBrowserHistory} from 'history'
import { Router } from "react-router-dom";
import { main as mainConfig } from "./routes";
import { RenderRoutes } from "./routes/allocation";

const history = createBrowserHistory()

export default function App() {  
  return (
    <Router history={history}>
        <RenderRoutes routes={mainConfig}></RenderRoutes>
    </Router>
  );
}