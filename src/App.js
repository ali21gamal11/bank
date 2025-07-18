// import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import {Route ,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      </header>

      <Routes>
        <Route path="/hello" element={<h1>this is hello route</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
