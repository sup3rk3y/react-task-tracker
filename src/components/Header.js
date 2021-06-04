import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, toggleAdd, toggleAddActive }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={toggleAddActive ? "red" : "green"}
          text={toggleAddActive ? "Cancel" : "Add"}
          onClick={toggleAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
