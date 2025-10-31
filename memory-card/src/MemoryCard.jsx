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
      <div className="card-container">
          {data.map((character) => (
            <div className="outer-card">
              <img
                src={character.image}
                key={character.id}
                className="character-card"
              />
            </div>
          ))}
      </div>
    </>
  );
}
export default MemoryCard;
