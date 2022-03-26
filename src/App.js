import './App.css';
import AllEateriesContainer from './allEateriesContainer/allEateriesContainer';

function App() {
  return (
    <div className="App">
      
      <nav id="not-logged-in-nav">
        <button id="sign-up">Sign Up</button>
        <button id="login">Login</button>
      </nav>
      <h1 id="title">Welcome to Yummy Decisions</h1>
      
      <h3>(if user is logged in):Welcome -displayName-</h3>
      <AllEateriesContainer></AllEateriesContainer>
    </div>
  );
}

export default App;
