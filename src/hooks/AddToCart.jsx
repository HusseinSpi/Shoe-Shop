import axios from "axios";
import { toast } from "react-toastify";

export const addToCart = async (email, shoe) => {
  try {
    const usersUrl = "https://666cb3ef49dbc5d7145eea3d.mockapi.io/Users";

    const response = await axios.get(usersUrl);
    const users = response.data;

    const user = users.find((user) => user.email === email);

    if (user) {
      const isShoeInCart = user.cart.some(
        (shoeCart) => shoeCart.id === shoe.id
      );

      if (isShoeInCart) {
        toast.warn("The shoe is already in the cart");
      } else {
        user.cart.push(shoe);

        await axios.put(`${usersUrl}/${user.id}`, user);

        toast.success("The shoe has been added to the cart successfully");
      }
    } else {
      toast.error("Couldn't find the user");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Couldn't add the shoe to the cart");
  }
};
