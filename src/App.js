import './App.css';
import List from "./components/List"
import {useState } from "react"
import languages from "./data/languages.json"

function App() {
  const [languagesList, setLanguagesList] = useState(languages)
  const [newLanguage, setNewLanguage] = useState("")
  
  const handleChange = (event) => {
    setNewLanguage(event.target.value)
  }

  const handleClick = () => {
    setLanguagesList((prev) => [newLanguage, ...prev])
  }

  return (
    <div className="App">
      <h1>Languages</h1>
      <div className="container">
        <p>enter a new language</p>
        <label htmlFor="language">language</label>
        <input id="language" onChange={handleChange} value={newLanguage}/>
        <button onClick={handleClick}>submit</button>
      </div>
      <List languagesList={languagesList}/>
    </div>
  );
}

export default App;
