import { useState, useEffect } from "react";
import { GetObjectUser } from "./GetObjectUser";

export const useDeleteFromCart = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setEmail(localStorage.getItem("userEmail"));
    }
  }, []);

  useEffect(() => {
    if (email) {
      const fetchUser = async () => {
        const userData = await GetObjectUser(email);
        setUser(userData);
      };

      fetchUser();
    }
  }, [email]);

  const deleteShoe = async (itemId) => {
    if (user && user.cart) {
      const itemIndex = user.cart.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const updatedCart = [
          ...user.cart.slice(0, itemIndex),
          ...user.cart.slice(itemIndex + 1),
        ];
        const updatedUser = { ...user, cart: updatedCart };
        try {
          const response = await fetch(
            `https://666cb3ef49dbc5d7145eea3d.mockapi.io/Users/${user.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedUser),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to update user cart");
          }

          const data = await response.json();
          setUser(data);
          return data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      } else {
        throw new Error("Item not found in cart");
      }
    } else {
      throw new Error("User or user cart not found");
    }
  };

  return { deleteShoe, user, email };
};
