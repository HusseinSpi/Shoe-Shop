import axios from "axios";
import { toast } from "react-toastify";

export const GetObjectUser = async (email) => {
  try {
    const usersUrl = "https://666cb3ef49dbc5d7145eea3d.mockapi.io/Users";

    const response = await axios.get(usersUrl);
    const users = response.data;

    const user = users.find((user) => user.email === email);

    if (user) {
      return user;
    } else {
      toast.error("Couldn't find the user");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
