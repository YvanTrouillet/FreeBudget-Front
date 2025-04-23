import React, { useEffect, useState } from "react";

const BarsCashFlow = ({
  data,
  maxGridSize,
}: {
  data: {
    role: string;
    price: number;
    date: string;
  };
  maxGridSize: number;
}) => {
  const [showTooltip, setShowTooltip] = useState("");
  const [valueDate, setValueDate] = useState("");

  const dateMap = {
    Jan: "1%",
    Fev: "9.5%",
    Mar: "18%",
    Avr: "26.5%",
    Mai: "35%",
    Juin: "44%",
    Juil: "52.5%",
    Aou: "61%",
    Sep: "70%",
    Oct: "78.5%",
    Nov: "87%",
    Dec: "96%",
  };

  useEffect(() => {
    setValueDate(dateMap[data.date as keyof typeof dateMap] || "");
  }, [data.date]);

  const MAX_BAR_HEIGHT = 120;
  const barHeight = (data.price / (maxGridSize * 1000)) * MAX_BAR_HEIGHT;

  return (
    <>
      {data.role === "income" ? (
        <div
          className="cashFlow__bars__container__income"
          onMouseEnter={() => setShowTooltip("income")}
          onMouseLeave={() => setShowTooltip("")}
          style={{
            left: valueDate,
            height: `${barHeight}px`,
          }}
        >
          {showTooltip === "income" && (
            <div className="cashFlow__bars__container__income__container">
              <div className="cashFlow__bars__container__income__container__tooltip">
                <p>{data.price}€</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="cashFlow__bars__container__expenses"
          onMouseEnter={() => setShowTooltip("expenses")}
          onMouseLeave={() => setShowTooltip("")}
          style={{
            left: valueDate,
            height: `${barHeight}px`,
          }}
        >
          {showTooltip === "expenses" && (
            <div className="cashFlow__bars__container__expenses__container">
              <div className="cashFlow__bars__container__expenses__container__tooltip">
                <p>{data.price}€</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BarsCashFlow;
