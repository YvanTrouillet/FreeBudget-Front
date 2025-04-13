import React, { useState } from "react";
import { Link } from "react-router";
import iconViewPwd from "../assets/view-pwd.svg";
import iconViewClosePwd from "../assets/view-close-pwd.svg";
import logo from "../assets/Logo.svg";
import "../styles/Auth.scss";

const Auth = ({
  login,
  handleSubmit,
}: {
  login: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) => {
  const [isShowPwd, setIsShowPwd] = useState(false);
  const [isShowConfirmPwd, setIsShowConfirmPwd] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmPwd: "",
  });

  const [configValidationPwd, setConfigValidationPwd] = useState({
    isValideMinChar: false,
    isValideMaxChar: true,
    isValideMinuscule: false,
    isValideMajuscule: false,
    isValideMinNumber: false,
    isValideSpecialChar: false,
    isValideConfirmPwd: false,
  });
  const [errors, setErrors] = useState("");

  const validatePassword = (password: string) => {
    setConfigValidationPwd({
      isValideMinChar: password.length >= 8,
      isValideMaxChar: password.length <= 32,
      isValideMinNumber: /\d/.test(password),
      isValideMajuscule: /[A-Z]/.test(password),
      isValideMinuscule: /[a-z]/.test(password),
      isValideSpecialChar: /[@$!%*?&]/.test(password),
      isValideConfirmPwd: password === formData.confirmPwd,
    });
  };

  const showPasswordRules =
    formData.password.length > 0 &&
    (!configValidationPwd.isValideMinChar ||
      !configValidationPwd.isValideMaxChar ||
      !configValidationPwd.isValideMinuscule ||
      !configValidationPwd.isValideMajuscule ||
      !configValidationPwd.isValideMinNumber ||
      !configValidationPwd.isValideSpecialChar);

  const showValidateConfirmPwd =
    formData.confirmPwd.length > 0 && !configValidationPwd.isValideConfirmPwd;

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
          onSubmit={handleSubmit}
        >
          {!login && (
            <>
              <label
                htmlFor="firstname"
                className="loginPage__container__formLogin__label"
              >
                Prénom
              </label>
              <input
                value={formData.firstname}
                type="text"
                name="firstname"
                id="firstname"
                className="loginPage__container__formLogin__input"
                placeholder="Yvan"
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
              />
              <label
                htmlFor="lastname"
                className="loginPage__container__formLogin__label"
              >
                Nom
              </label>
              <input
                value={formData.lastname}
                type="text"
                name="lastname"
                id="lastname"
                className="loginPage__container__formLogin__input"
                placeholder="Trouillet"
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </>
          )}
          <label
            htmlFor="email"
            className="loginPage__container__formLogin__label"
          >
            Email
          </label>
          <input
            value={formData.email}
            type="email"
            name="email"
            id="email"
            className="loginPage__container__formLogin__input"
            placeholder="hello@freebudget.fr"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label
            htmlFor="password"
            className="loginPage__container__formLogin__label"
          >
            Mot de passe
          </label>
          <div className="container__input__view">
            <input
              value={formData.password}
              type={isShowPwd ? "text" : "password"}
              name="password"
              id="password"
              className="loginPage__container__formLogin__input"
              placeholder="********"
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                validatePassword(e.target.value);
              }}
            />
            <img
              src={isShowPwd ? iconViewClosePwd : iconViewPwd}
              alt=""
              className="icon_view_pwd"
              onClick={handleViewPassword}
            />
          </div>
          {!login && showPasswordRules && (
            <ul className="toast__password">
              {!configValidationPwd.isValideMinChar && (
                <li>Le mot de passe doit contenir au moins 8 caractères.</li>
              )}
              {!configValidationPwd.isValideMaxChar && (
                <li>Le mot de passe ne doit pas dépasser 32 caractères.</li>
              )}
              {!configValidationPwd.isValideMajuscule && (
                <li>Le mot de passe doit contenir au moins une majuscule.</li>
              )}
              {!configValidationPwd.isValideMinuscule && (
                <li>Le mot de passe doit contenir au moins une minuscule.</li>
              )}
              {!configValidationPwd.isValideMinNumber && (
                <li>Le mot de passe doit contenir au moins un chiffre.</li>
              )}
              {!configValidationPwd.isValideSpecialChar && (
                <li>
                  Le mot de passe doit contenir au moins un caractère spécial
                  (@$!%*?&).
                </li>
              )}
            </ul>
          )}
          {!login && (
            <>
              <label
                htmlFor="confirmPassword"
                className="loginPage__container__formLogin__label"
              >
                Confirmation du mot de passe
              </label>
              <div className="container__input__view">
                <input
                  value={formData.confirmPwd}
                  type={isShowConfirmPwd ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="loginPage__container__formLogin__input"
                  placeholder="********"
                  onChange={(e) => {
                    setFormData({ ...formData, confirmPwd: e.target.value });
                    validatePassword(e.target.value);
                  }}
                />
                <img
                  src={isShowConfirmPwd ? iconViewClosePwd : iconViewPwd}
                  alt=""
                  className="icon_view_pwd"
                  onClick={handleViewConfirmPassword}
                />
              </div>
              {!configValidationPwd.isValideConfirmPwd &&
                showValidateConfirmPwd && (
                  <p className="toast__password">
                    Les mots de passe ne sont pas identique
                  </p>
                )}
            </>
          )}
          {login ? (
            <button
              type="submit"
              className="loginPage__container__formLogin__btnLogin"
              disabled={errors !== ""}
            >
              Se connecter
            </button>
          ) : (
            <button
              type="submit"
              className="loginPage__container__formLogin__btnLogin"
              disabled={errors !== ""}
            >
              S'inscrire
            </button>
          )}
        </form>
        {login ? (
          <p className="loginPage__container__description">
            Pas encore inscrit ?{" "}
            <Link
              to="/signup"
              className="loginPage__container__description__linkSignup"
            >
              S'inscrire
            </Link>
          </p>
        ) : (
          <p className="loginPage__container__description">
            Déja inscrit ?{" "}
            <Link
              to="/"
              className="loginPage__container__description__linkSignup"
            >
              Se connecter
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
