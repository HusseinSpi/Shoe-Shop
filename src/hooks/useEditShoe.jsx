import { useEffect, useState } from "react";
import axios from "axios";
import { Data } from "../api/getData";

const API_URL = "https://666c683149dbc5d7145deb82.mockapi.io/Shose";

export const useEditShoe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Data();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const editShoe = async (shoeId, updatedShoeData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${API_URL}/${shoeId}`, updatedShoeData);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  return { editShoe, loading, error };
};
