import Logo from "../../assets/pizzaLogo.svg";
import Busket from "../../assets/busket.svg";
import moduleCss from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ totalCount,totalPrice }) => {
  return (
    <div className="app-container sticky">
      <div className={moduleCss.wrapper}>
        <Link to="/">
          <div>
            <img src={Logo} alt="" />
            <div>
              <span>REACT PIZZA</span>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Link to="/busket">
          <button className={moduleCss.btn}>
            <span>{totalPrice} сом</span>
            <div className={moduleCss.button__delimetr}></div>
            <img src={Busket} alt="" />
            <span>{totalCount}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
