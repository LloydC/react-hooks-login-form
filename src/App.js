import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="App">
      <div className="left-pane">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input type="text" label="Username" value={username} onChange={e => setUsername(e.target.value)}/>
          <input type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="right-pane">
        {username && <p> Username: {username}</p>}
        {password && <p>Password: {password}</p>}
      </div>
    </div>
  );
}

export default App;
