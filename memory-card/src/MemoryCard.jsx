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
  },[]);

  return <>
        {data.map(character => <img src={character.image} key={character.id} width={100} height={200}/>
        )}
    </>;
}
export default MemoryCard;
