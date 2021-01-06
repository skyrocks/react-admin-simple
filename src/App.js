/*
 * @Author: shilei
 * @Date: 2021-01-06 15:45:56
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-06 16:08:20
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/App.js
 */
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
