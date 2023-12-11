import "./style.css";

export const BoxColor = ({ r, g, b }) => {
  return (
    <div
      className="boxContainer"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <h2>rgb{`(${r}, ${g}, ${b})`}</h2>
    </div>
  );
};
