import imageRickMorty from "./img/rick-morty.png";
import credencial from "./img/Uv Anverso.png";

import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty </h1>
        <h1 className="title">by btoarriola</h1>
        <p className="info">pase el mouse para ver detalles</p>
        <div className="infoContainer">
          Heriberto Arriola Peztña<br/>
          zs20006737@estudiantes.uv.mx <br/>
          <img src={credencial} alt="credencial" id="info-img"/>

        </div>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
