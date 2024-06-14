import "./Slider.css";

export const Slider = () => {
  return (
    <div className="slider">
      <video src="./sliderVideo.mp4" autoPlay loop muted>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
