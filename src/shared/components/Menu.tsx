import iconDashboard from "../assets/icon_dashboard.svg";
import iconTransaction from "../assets/icon_transaction.svg";
import iconTempsProjets from "../assets/icon_Calendar.svg";
import iconFacturation from "../assets/icon_Facturation.svg";
import iconRapports from "../assets/icon_Rapports.svg";
import "../styles/Menu.scss";
import { useState } from "react";

const Menu = () => {
  const [hoverItem, setHoverItem] = useState("");

  return (
    <ul className="menu">
      <li className="menu__item">
        <a href="" className="menu__item__link">
          <div
            className="menu__item__link__forme menu__item__link__active"
            onMouseEnter={() => setHoverItem("dashboard")}
            onMouseLeave={() => {
              setHoverItem("");
            }}
          >
            <img
              src={iconDashboard}
              alt="Lien vers Dashboard"
              className="menu__item__link__icon"
            />
          </div>
          {hoverItem === "dashboard" && (
            <p className="menu__item__link__text">DashBoard</p>
          )}
        </a>
      </li>
      <li className="menu__item">
        <a href="" className="menu__item__link">
          <div
            className="menu__item__link__forme"
            onMouseEnter={() => setHoverItem("transaction")}
            onMouseLeave={() => setHoverItem("")}
          >
            <img
              src={iconTransaction}
              alt="Lien vers Transaction"
              className="menu__item__link__icon"
            />
          </div>
          {hoverItem === "transaction" && (
            <p className="menu__item__link__text">Transaction</p>
          )}
        </a>
      </li>
      <li className="menu__item">
        <a href="" className="menu__item__link">
          <div
            className="menu__item__link__forme"
            onMouseEnter={() => setHoverItem("tempsProjets")}
            onMouseLeave={() => setHoverItem("")}
          >
            <img
              src={iconTempsProjets}
              alt="Lien vers Temps et projets"
              className="menu__item__link__icon"
            />
          </div>
          {hoverItem === "tempsProjets" && (
            <p className="menu__item__link__text">Temps & Projets</p>
          )}
        </a>
      </li>
      <li className="menu__item">
        <a href="" className="menu__item__link">
          <div
            className="menu__item__link__forme"
            onMouseEnter={() => setHoverItem("facturation")}
            onMouseLeave={() => setHoverItem("")}
          >
            <img
              src={iconFacturation}
              alt="Lien vers facturation"
              className="menu__item__link__icon"
            />
          </div>
          {hoverItem === "facturation" && (
            <p className="menu__item__link__text">Facturation</p>
          )}
        </a>
      </li>
      <li className="menu__item">
        <a href="" className="menu__item__link">
          <div
            className="menu__item__link__forme"
            onMouseEnter={() => setHoverItem("rapports")}
            onMouseLeave={() => setHoverItem("")}
          >
            <img
              src={iconRapports}
              alt="Lien vers rapports"
              className="menu__item__link__icon"
            />
          </div>
          {hoverItem === "rapports" && (
            <p className="menu__item__link__text">Rapports</p>
          )}
        </a>
      </li>
    </ul>
  );
};

export default Menu;
