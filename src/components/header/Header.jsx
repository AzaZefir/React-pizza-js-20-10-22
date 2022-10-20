import Logo from "../../assets/pizzaLogo.svg";
import Busket from "../../assets/busket.svg";
import moduleCss from "./Header.module.css";

const Header = () => {
  return (
    <div className="app-container">
      <div className={moduleCss.wrapper}>
        <div>
          <img src={Logo} alt="" />
          <div>
            <span>REACT PIZZA</span>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <button className={moduleCss.btn}>
          <span>520 сом</span>
          <div className={moduleCss.button__delimetr}></div>
          <img src={Busket} alt="" />
          <span>3</span>
        </button>
      </div>
    </div>
  );
};
export default Header;
