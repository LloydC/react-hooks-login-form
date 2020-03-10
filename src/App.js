import React, {useEffect, useState, useReducer, formReducer} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}), {username:'', password:''}
  )

  const [mounted, updateMounted] = useState('stale');

  const {username, password} = state;

  useEffect(()=>{
    console.log('render counts')
    updateMounted('mounted')
    return () => console.log('cleanup called')// happens only if the component is unmounted
  }, [mounted])

  return (
    <div className="App">
      <div className="left-pane">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input type="text" label="Username" value={username} onChange={e => updateState({username: e.target.value})}/>
          <input type="password" label="Password" value={password} onChange={e => updateState({password: e.target.value})}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="right-pane">
        {mounted && <p> Mounted: {mounted}</p>}
        {username && <p> Username: {username}</p>}
        {password && <p>Password: {password}</p>}
      </div>
    </div>
  );
}

export default App;
