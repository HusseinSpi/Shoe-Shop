import axios from "axios";
import { toast } from "react-toastify";

export const addToFavorite = async (email, shoe) => {
  try {
    const usersUrl = "https://666cb3ef49dbc5d7145eea3d.mockapi.io/Users";

    const response = await axios.get(usersUrl);
    const users = response.data;

    const user = users.find((user) => user.email === email);

    if (user) {
      const isShoeInFavorites = user.favorite.some(
        (favoriteShoe) => favoriteShoe.id === shoe.id
      );

      if (isShoeInFavorites) {
        toast.warn("The shoe is already in the favorite list");
      } else {
        user.favorite.push(shoe);

        await axios.put(`${usersUrl}/${user.id}`, user);

        toast.success("The shoe has been added to the favorite successfully");
      }
    } else {
      toast.error("Couldn't find the user");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Couldn't add the shoe to the favorite");
  }
};
