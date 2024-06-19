import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useShoeData = () => {
  const [shoes, setShoes] = useState([]);
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState(null);
  const [color, setColor] = useState(0);
  const [shoeImg, setShoeImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://666c683149dbc5d7145deb82.mockapi.io/Shose";

      try {
        const response = await axios.get(url);
        setShoes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const selectedShoe = shoes.find(
      (shoe) => parseInt(shoe.id) === Number(shoeId)
    );
    setShoe(selectedShoe);

    if (selectedShoe && Array.isArray(selectedShoe.images)) {
      if (Array.isArray(selectedShoe.images[color])) {
        setShoeImg(selectedShoe.images[color][0] || "");
      } else {
        setShoeImg(selectedShoe.images[0] || "");
      }
    }
  }, [shoeId, shoes, color]);

  const handleColor = (colorIndex) => {
    setColor(colorIndex);
    const selectedShoe = shoes.find(
      (shoe) => parseInt(shoe.id) === Number(shoeId)
    );
    if (selectedShoe && Array.isArray(selectedShoe.images)) {
      if (Array.isArray(selectedShoe.images[colorIndex])) {
        setShoeImg(selectedShoe.images[colorIndex][0] || "");
      } else {
        setShoeImg(selectedShoe.images[0] || "");
      }
    }
  };

  return { shoe, shoeImg, handleColor, setShoeImg, color };
};
