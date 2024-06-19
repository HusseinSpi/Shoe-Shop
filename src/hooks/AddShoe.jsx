import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Data } from "../api/getData";

export const AddShoe = async (
  name,
  url,
  price,
  colors,
  description,
  images
) => {
  const shoes = await Data();
  const id = shoes[shoes.length - 1].id + 1;
  if (name && url && price && colors && description && images) {
    try {
      const response = await axios.post(
        "https://666c683149dbc5d7145deb82.mockapi.io/Shose",
        {
          id: parseInt(id),
          name: name,
          url: url,
          price: parseFloat(price),
          colors: parseInt(colors, 10),
          description: description,
          images: images,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Shoe added successfully");
      } else {
        toast.error("Couldn't add shoe");
      }
    } catch (error) {
      toast.error("Couldn't add shoe");
    }
  }
};
