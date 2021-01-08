/*
 * @Author: shilei
 * @Date: 2021-01-07 15:50:10
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 23:41:00
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/App.js
 */
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