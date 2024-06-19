import { useState, useEffect } from "react";
import { ShoeContainer } from "../../components/shoePage/ShoeContainer";
import { EditShoe } from "../../components/shoePage/EditShoe";
import "./ShoePage.css";

export const ShoePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <EditShoe setIsEditing={setIsEditing} />
      ) : (
        <ShoeContainer setIsEditing={setIsEditing} />
      )}
    </div>
  );
};
