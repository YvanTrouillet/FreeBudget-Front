import "../styles/bankAccount.scss";
import iconCross from "../assets/cross.svg";
import iconSwitch from "../assets/switch.svg";

const BankAccount = () => {
  return (
    <div className="bankAccount">
      <div className="bankAccount__account">
        <div className="bankAccount__account__containerInfo">
          <img
            src=""
            alt=""
            className="bankAccount__account__containerInfo__img"
          />
          <div className="bankAccount__account__containerInfo__info">
            <p className="bankAccount__account__containerInfo__info__title">
              Compte bancaire
            </p>
            <p className="bankAccount__account__containerInfo__info__text">
              * 2646
            </p>
          </div>
          <button
            type="button"
            className="bankAccount__account__containerInfo__switch"
          >
            <img src={iconSwitch} alt="" />
          </button>
        </div>
        <div className="bankAccount__account__balance">
          <p className="bankAccount__account__balance__solde">Solde : </p>
          <strong className="bankAccount__account__balance__price">
            346 890{" "}
            <em className="bankAccount__account__balance__price__device">€</em>
          </strong>
        </div>
      </div>
      <div className="bankAccount__addAccount">
        <p className="bankAccount__addAccount__text">
          Ajouter un compte bancaire
        </p>
        <button type="button" className="bankAccount__addAccount__btn">
          <img src={iconCross} alt="" />
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
