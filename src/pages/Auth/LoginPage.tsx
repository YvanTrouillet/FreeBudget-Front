import React from "react";
import "../../styles/Pages/LoginPage.scss";
import logo from "../../assets/Logo.svg";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__container">
        <img
          src={logo}
          alt="Lien page d'accueil"
          className="loginPage__container__logo"
        />
        <form action="" className="loginPage__container__formLogin">
          <label
            htmlFor="email"
            className="loginPage__container__formLogin__label"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="loginPage__container__formLogin__input"
          />
          <label
            htmlFor="password"
            className="loginPage__container__formLogin__label"
          >
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="loginPage__container__formLogin__input"
          />
          <button
            type="submit"
            className="loginPage__container__formLogin__btnLogin"
          >
            Se connecter
          </button>
        </form>
        <p className="loginPage__container__description">
          Première connexion ?{" "}
          <a href="#" className="loginPage__container__description__linkSignup">
            S’enregistrer
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
