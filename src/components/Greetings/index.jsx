import "./style.css";

export const Greetings = ({ lang, children }) => {
  if (lang === "de") {
    return (
      <div className="greetingContainer">
        <h3 className="greeting">Hallo {children}</h3>
      </div>
    );
  } else if (lang === "fr") {
    return (
      <div className="greetingContainer">
        <h3 className="greeting">Bonjour {children}</h3>
      </div>
    );
  }
};
