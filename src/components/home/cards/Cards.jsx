import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import "./Cards.css";

export const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://666c683149dbc5d7145deb82.mockapi.io/Shose";

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardsContainer">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};
