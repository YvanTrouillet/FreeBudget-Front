import React, { useState } from "react";
import "../../styles/Pages/LoginPage.scss";
import logo from "../../assets/Logo.svg";
import iconViewPwd from "../../assets/view-pwd.svg";
import iconViewClosePwd from "../../assets/view-close-pwd.svg";

const SignUpPage = () => {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [isShowConfirmPwd, setIsShowConfirmPwd] = useState(false);

  const handleSubmitSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const newUser = {
      firstname: myFormData.get("firstname") as string,
      lastname: myFormData.get("lastname") as string,
      email: myFormData.get("email") as string,
      password: myFormData.get("password") as string,
    };
    console.log(newUser);
  };

  const handleViewPassword = () => {
    setIsShowPwd(!isShowPwd);
  };

  const handleViewConfirmPassword = () => {
    setIsShowConfirmPwd(!isShowConfirmPwd);
  };

  return (
    <div className="loginPage">
      <div className="loginPage__container">
        <img
          src={logo}
          alt="Lien page d'accueil"
          className="loginPage__container__logo"
        />
        <form
          action=""
          className="loginPage__container__formLogin"
          onSubmit={handleSubmitSignup}
        >
          <label
            htmlFor="firstname"
            className="loginPage__container__formLogin__label"
          >
            Prénom
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="loginPage__container__formLogin__input"
            placeholder="Yvan"
          />
          <label
            htmlFor="lastname"
            className="loginPage__container__formLogin__label"
          >
            Nom
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="loginPage__container__formLogin__input"
            placeholder="Trouillet"
          />
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
            placeholder="hello@freebudget.fr"
          />
          <label
            htmlFor="password"
            className="loginPage__container__formLogin__label"
          >
            Mot de passe
          </label>
          <div className="container__input__view">
            <input
              type={isShowPwd ? "text" : "password"}
              name="password"
              id="password"
              className="loginPage__container__formLogin__input"
              placeholder="********"
            />
            <img
              src={isShowPwd ? iconViewClosePwd : iconViewPwd}
              alt=""
              className="icon_view_pwd"
              onClick={handleViewPassword}
            />
          </div>
          <label
            htmlFor="confirmPassword"
            className="loginPage__container__formLogin__label"
          >
            Confirmation du mot de passe
          </label>
          <div className="container__input__view">
            <input
              type={isShowConfirmPwd ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              className="loginPage__container__formLogin__input"
              placeholder="********"
            />
            <img
              src={isShowConfirmPwd ? iconViewClosePwd : iconViewPwd}
              alt=""
              className="icon_view_pwd"
              onClick={handleViewConfirmPassword}
            />
          </div>
          <button
            type="submit"
            className="loginPage__container__formLogin__btnLogin"
          >
            S'inscrire
          </button>
        </form>
        <p className="loginPage__container__description">
          Déja inscrit ?{" "}
          <a href="#" className="loginPage__container__description__linkSignup">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
