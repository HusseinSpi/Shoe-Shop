import axios from "axios";

export const Data = async () => {
  const url = "https://666cb3ef49dbc5d7145eea3d.mockapi.io/Users";

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
