import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = async (name, email, password) => {
  try {
    const response = await axios.post(
      "https://666cb3ef49dbc5d7145eea3d.mockapi.io/Users",
      {
        name: name,
        email: email,
        password: password,
        cart: [],
        favorite: [],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      toast.success("User added successfully");
    } else {
      toast.error("Couldn't add user");
    }
  } catch (error) {
    toast.error("Couldn't add user");
  }
};
