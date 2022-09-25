import { useState } from "react";
import "./styles.css";
var musicCollection = {
  Rock: [
    {
      name: "PinkFloyd",
      song: "Song: Money"
    },
    {
      name: "Arctic Monkeys",
      song: "Song: Do I Wanna Know?"
    },
    {
      name: "Led Zeppelin",
      song: "Stairway to Heaven"
    }
  ],
  Electronic: [
    {
      name: "Avicii",
      song: "Song: Waiting For Love"
    },
    {
      name: "Ritviz",
      song: "Song: Udd Gaye"
    },
    {
      name: "Nucleya",
      song: "Bhayanak Atma"
    }
  ],
  Indie: [
    {
      name: "Lucky Ali",
      song: "Song: O Sanam"
    },
    {
      name: "The Local Train",
      song: "Song: Choo lo"
    },
    {
      name: "Euphoria",
      song: "Maeri"
    }
  ],
  Bengali: [
    {
      name: "Moheener Ghoraguli",
      song: "Song: Hay Bhalobasha"
    },
    {
      name: "Chandrabindoo",
      song: "Song: Eita Tomar Gaan"
    },
    {
      name: "Anjan Dutt",
      song: "Purono Guitar"
    }
  ]
};

var musicDB = Object.keys(musicCollection);
export default function App() {
  const [selectedGenres, setGenres] = useState("Bengali");
  function genreClickHandler(genre) {
    setGenres(genre);
  }

  return (
    <div className="App">
      <h1>goodMusic</h1>
      <p style={{ fontSize: "0.9rem", textALign: "left" }}>
        Checkout some of my favourite Bands.Select genre to proceed.
      </p>
      <div>
        {musicDB.map((genre) => (
          <button
            style={{
              padding: "0.5rem",
              width: "30%",
              margin: "0.2rem",
              backgroundColor: "#7c3aed",
              border: "2px solid #4c1d95",
              borderRadius: "0.5rem",
              maxWidth: "100%",
              cursor: "pointer",
              color: "#fff"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul>
          {musicCollection[selectedGenres].map((band) => (
            <li
              style={{
                backgroundColor: "#7e22ce",
                border: "2px solid #4c1d95 ",
                padding: "0.7rem",
                color: "#fff",
                margin: "0.8rem 0rem",
                listStyle: "none",
                maxWidth: "300px",
                borderRadius: "0.5rem"
              }}
              key={band.name}
            >
              <div style={{ fontSize: "1.25rem" }}>{band.name}</div>
              <div style={{ fontSize: "0.8rem" }}>{band.song}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
