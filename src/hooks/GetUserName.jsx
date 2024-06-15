import { userData } from "../api/getUsers";

export const getUserName = async (email) => {
  try {
    const users = await userData();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.email === email) {
        return user.name;
      }
    }
    return;
  } catch (error) {
    console.error("Error:", error);
    return;
  }
};
