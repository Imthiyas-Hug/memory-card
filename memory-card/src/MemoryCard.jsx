import RenderCard from "./RenderCard";
import "./styles/MemoryCard.css";
import { useEffect, useState } from "react";
import win from "./assets/win.png";
import lose from "./assets/lose.jpg";

function MemoryCard() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [randomIndex, setRandomindex] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCount, setClickedCount] = useState(0);
  const [result, setResult] = useState("");
  let tempIdArray = [];  

  const style1 = {
    background: "linear-gradient(90deg, green, #00ff55)",
  };
  const style2 = {
    background: "linear-gradient(90deg, orange, #ff0000ff)",
  };

  const getRandomIndex = () => {
    let temp = [];
    while (temp.length < 4) {
      let randomNumber = Math.floor(Math.random() * 12);
      if (!temp.includes(randomNumber)) {
        temp.push(randomNumber);
      }
    }
    setRandomindex(temp);
  };

  useEffect(() => {
    getRandomIndex();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters?page=1&limit=10&gender=Male`
        );
        const jsonData = await response.json();
        setData(jsonData);

        const cardList = jsonData.slice(0, 12).map((character) => (
          <div
            className="card"
            key={character.id}
            onClick={(e) => handleClick(e)}
            id={character.id}
          >
            <img src={character.image} id={character.id} />
            <p className="character-name" id={character.id}>
              {character.name}
            </p>
          </div>
        ));
        setCards(cardList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    if (!tempIdArray.includes(e.target.id)) {
      tempIdArray.push(e.target.id);
      getRandomIndex();
      setScore((s) => s + 1);
      console.log("score", score);
      setBestScore((s) => s + 1);
      setClickedCount((c) => c + 1);
    } else {
      tempIdArray = [];
      setResult("lose");
      document.querySelector("dialog").showModal();
    }
    if (tempIdArray.length > 6) {
      tempIdArray = [];
      setResult("win");
      document.querySelector("dialog").showModal();
    }
  };
  const handleClick2 = () => {
    setScore(0);
    setClickedCount(0);
    getRandomIndex();
    document.querySelector("dialog").close();
    console.log("dfdsfs");
  };
  function DisplayResult({ styles }) {
      const bgImage = result === 'win' ? win : lose ;
    return (
      <div>
        {document.querySelector('dialog').style.backgroundImage = `url(${bgImage})`}
        <h1 style={styles}>{result === "win" ? "You Win!" : "You Lose!"}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="header">
        <h1 className="game-heading">Dragon Ball Memory Game</h1>
        <div className="score-board">
          <h2>
            Score: <span className="score-value">{score}</span>
          </h2>
          <h2>
            Best Score: <span className="score-value">{bestScore}</span>
          </h2>
        </div>
      </div>
      <div className="card-container">
        <RenderCard randomIndex={randomIndex} cards={cards} />
      </div>
      <div className="clicked-count-div">
        <span className="clicked-count-value">{clickedCount} / 7</span>
      </div>

      <dialog className="dialog-modal">
        <div className="result-div">
          {result === "win" && <DisplayResult styles={style1} />}
          {result === "lose" && <DisplayResult styles={style2} />}
          <button onClick={handleClick2} className="restart-btn">
            Restart
          </button>
        </div>
      </dialog>
    </>
  );
}
export default MemoryCard;
