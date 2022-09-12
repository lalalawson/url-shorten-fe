import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div style={{ padding: "16px 36px", backgroundColor: "var(--primary)" }}>
      <img src={logo}></img>
    </div>
  );
};

export default Navbar;
