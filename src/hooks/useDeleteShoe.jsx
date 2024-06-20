import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Data } from "../api/getData";

const API_URL = "https://666c683149dbc5d7145deb82.mockapi.io/Shose";

export const useDeleteShoe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const deleteShoe = async (shoeId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(`${API_URL}/${shoeId}`);
      setLoading(false);
      navigate("/");
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  return { deleteShoe, loading, error };
};
