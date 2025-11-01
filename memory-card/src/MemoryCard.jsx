import "./styles/MemoryCard.css";
import { useEffect, useState } from "react";

function MemoryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters?page=1&limit=10&gender=Male`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="game-heading">Memory Game</h1>
      <div className="score-board">
        <h2>Score:</h2>
        <h2>Best Score:</h2>
      </div>
      <div className="card-container">
        {data.map(
          (character, index) =>
            index < 100 && (
              <div className="card" key={character.id}>
                <img src={character.image} />
                <p className="character-name">{character.name}</p>
              </div>
            )
        )}
      </div>
    </>
  );
}
export default MemoryCard;
