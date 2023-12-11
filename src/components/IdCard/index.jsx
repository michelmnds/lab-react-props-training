import "./style.css";

export const IdCard = ({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="cardContainer">
      <img src={picture} alt="" />

      <div className="cardInfos">
        <span>
          <strong>First name:</strong> {firstName}
        </span>
        <span>
          <strong>Last name:</strong> {lastName}
        </span>
        <span>
          <strong>Gender:</strong> {gender}
        </span>
        <span>
          <strong>Height:</strong> {height}
        </span>
        <span>
          <strong>Birth:</strong> {birth}
        </span>
      </div>
    </div>
  );
};
