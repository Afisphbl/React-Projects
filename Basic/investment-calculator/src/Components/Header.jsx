import Logo from "../assets/investment-calculator-logo.png";
import "../Styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
