import "./style.css";

export const Random = ({ min, max }) => {
  return (
    <div className="randomContainer">
      <span>
        Random value between {min} and {max} ={`>`}{" "}
        {Math.ceil(Math.random() * max)}
      </span>
    </div>
  );
};
