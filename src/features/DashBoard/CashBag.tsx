import React from "react";
import "../../styles/cashBag.scss";

const CashBag = ({ spend }: { spend: string }) => {
  return (
    <div className={spend === "expenses" ? "cashBag--expenses" : "cashBag"}>
      <h2 className="cashBag__title">
        {spend === "income"
          ? "Revenu"
          : spend === "spend"
          ? "Dépenses"
          : "Charges"}
      </h2>
      <div className="cashBag__container">
        <strong className="cashBag__container__price">
          6 482<em className="cashBag__container__price__device">€</em>
        </strong>
        {spend !== "expenses" && (
          <div
            className={
              spend === "spend"
                ? "cashBag__container__growth--spend"
                : "cashBag__container__growth"
            }
          >
            <p className="cashBag__container__growth__text">+ 4,26 %</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CashBag;
