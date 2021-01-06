import './App.css';
import axios from "axios";
function getPost() {
    axios.get("http://localhost:8080/test")
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
            {getPost()}
        </div>
      </header>
    </div>
  );
}

export default App;
