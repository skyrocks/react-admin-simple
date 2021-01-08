/*
 * @Author: shilei
 * @Date: 2021-01-07 15:50:10
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 00:23:46
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/App.js
 */
import { BrowserRouter } from "react-router-dom";
import { main as mainConfig } from "./routes";
import { RenderRoutes } from "./routes/allocation";

export default function App() {  
  return (
    <BrowserRouter>
        <RenderRoutes routes={mainConfig}></RenderRoutes>
    </BrowserRouter>
  );
}