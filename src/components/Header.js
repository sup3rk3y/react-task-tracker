import Button from "./Button";

const Header = ({ title, toggleAdd, toggleAddActive }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={toggleAddActive ? "red" : "green"}
        text={toggleAddActive ? "Cancel" : "Add"}
        onClick={toggleAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
