import Menu from "./Menu";
import logo from "../assets/Logo.svg";
import "../styles/header.scss";
import { useState } from "react";
import iconNotif from "../assets/icon_Notification.svg";
import photoProfil from "../assets/photo__profil.png";

const Header = () => {
  const [hoverItem, setHoverItem] = useState("");
  return (
    <div className="header" onMouseLeave={() => setHoverItem("")}>
      <img src={logo} alt="" className="header__logo" />
      <Menu />
      <div className="header__right">
        <a href="" className="menu__item__link">
          <div
            className="menu__item__link__forme"
            onMouseEnter={() => setHoverItem("notification")}
            onMouseLeave={() => setHoverItem("")}
          >
            <img src={iconNotif} alt="" className="menu__item__link__icon" />
            {hoverItem === "notification" && (
              <p className="menu__item__link__text">Notification</p>
            )}
          </div>
        </a>
        <div
          className="header__right__form"
          onMouseEnter={() => setHoverItem("profil")}
        >
          <img
            src={photoProfil}
            alt=""
            className="header__right__form__imgProfil"
          />
          {hoverItem === "profil" && (
            <div className="header__right__form__modal">
              <ul className="header__right__form__modal__list">
                <li className="header__right__form__modal__list__item">
                  <a
                    href=""
                    className="header__right__form__modal__list__item__link"
                  >
                    Mon Profil
                  </a>
                </li>
                <li className="header__right__form__modal__list__item">
                  <a
                    href=""
                    className="header__right__form__modal__list__item__link"
                  >
                    Paramètres
                  </a>
                </li>
                <li className="header__right__form__modal__list__item">
                  <a
                    href=""
                    className="header__right__form__modal__list__item__link"
                  >
                    Se déconnecter
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
