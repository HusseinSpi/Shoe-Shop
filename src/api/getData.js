import axios from "axios";

export const Data = async () => {
  const url = "https://666c683149dbc5d7145deb82.mockapi.io/Shose";

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
