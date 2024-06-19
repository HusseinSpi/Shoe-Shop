import { useShoeData } from "../../hooks/useShoeData";
import { Buttons } from "../../components/shoePage/Buttons";

export const ShoeContainer = ({ setIsEditing }) => {
  const { shoe, shoeImg, handleColor, setShoeImg, color } = useShoeData();

  const handleClick = (e) => {
    setShoeImg(e.target.src);
  };

  return (
    <>
      {shoe ? (
        <div className="shoeContainer">
          <div className="img">
            <div className="SmallPictures">
              {Array.isArray(shoe.images[color]) ? (
                shoe.images[color].map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={shoe.name}
                    onClick={handleClick}
                  />
                ))
              ) : Array.isArray(shoe.images) ? (
                shoe.images.map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={shoe.name}
                    onClick={handleClick}
                  />
                ))
              ) : (
                <p>No images available for this color.</p>
              )}
            </div>
            <div className="BigPicture">
              <img src={shoeImg} alt={shoe.name} />
            </div>
          </div>
          <div className="details">
            <h1>{shoe.name}</h1>
            <p>{shoe.description}</p>
            <p>Price: ${shoe.price}</p>
            <p>Colors available: {shoe.colors}</p>
            {Array.isArray(shoe.images) && shoe.images.length > 1 && (
              <div className="shoeColors">
                {shoe.images.map((imageArray, index) => (
                  <div key={index}>
                    {Array.isArray(imageArray) && imageArray.length > 0 ? (
                      <img
                        src={imageArray[0]}
                        alt={shoe.name}
                        onClick={() => handleColor(index)}
                        className={color === index ? "selectedColor" : ""}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            )}
            <Buttons shoe={shoe} setIsEditing={setIsEditing} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
