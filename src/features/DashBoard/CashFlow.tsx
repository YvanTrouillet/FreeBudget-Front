import React, { useEffect, useState } from "react";
import "../../styles/cashFlow.scss";
import BarsCashFlow from "./BarsCashFlow";

const CashFlow = () => {
  const [maxGridSize, setMaxGridSize] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const data = [
    {
      date: "Jan",
      price: 100,
      role: "income",
    },
    {
      date: "Jan",
      price: 2478,
      role: "expenses",
    },
    {
      date: "Fev",
      price: 1029,
      role: "income",
    },
    {
      date: "Fev",
      price: 1678,
      role: "expenses",
    },
    {
      date: "Mar",
      price: 2138,
      role: "income",
    },
    {
      date: "Mar",
      price: 1876,
      role: "expenses",
    },
    {
      date: "Avr",
      price: 1457,
      role: "income",
    },
    {
      date: "Avr",
      price: 1987,
      role: "expenses",
    },
    {
      date: "Mai",
      price: 2938,
      role: "income",
    },
    {
      date: "Mai",
      price: 1011,
      role: "expenses",
    },
    {
      date: "Juin",
      price: 1387,
      role: "income",
    },
    {
      date: "Juin",
      price: 1678,
      role: "expenses",
    },
    {
      date: "Juil",
      price: 1543,
      role: "income",
    },
    {
      date: "Juil",
      price: 2872,
      role: "expenses",
    },
    {
      date: "Aou",
      price: 2765,
      role: "income",
    },
    {
      date: "Aou",
      price: 1537,
      role: "expenses",
    },
    {
      date: "Sep",
      price: 1783,
      role: "income",
    },
    {
      date: "Sep",
      price: 1873,
      role: "expenses",
    },
    {
      date: "Oct",
      price: 1283,
      role: "income",
    },
    {
      date: "Oct",
      price: 2873,
      role: "expenses",
    },
    {
      date: "Nov",
      price: 2897,
      role: "income",
    },
    {
      date: "Nov",
      price: 2365,
      role: "expenses",
    },
    {
      date: "Dec",
      price: 1000,
      role: "income",
    },
    {
      date: "Dec",
      price: 1000,
      role: "expenses",
    },
  ];

  useEffect(() => {
    //Grid
    const maxSize = Math.max(...data.map((item) => item.price));
    setMaxGridSize(Math.ceil(maxSize / 1000));
    //Total value
    const total = data.reduce((acc, item) => acc + item.price, 0);
    setTotalValue(total);
  }, [data]);

  useEffect(() => {
    const total = data.reduce((acc, item) => acc + item.price, 0);
    setTotalValue(total);
  }, [data]);

  return (
    <div className="cashFlow">
      <div className="cashFlow__year">
        <h2 className="cashFlow__year__title">Total des revenu de l’année</h2>
        <div className="cashFlow__year__container">
          <strong className="cashFlow__year__container__price">
            {totalValue}
            <em className="cashFlow__year__container__price__device">€</em>
          </strong>
          <div className="cashFlow__year__container__growth">
            <p className="cashFlow__year__container__growth__text">+ 4,26 %</p>
          </div>
        </div>
      </div>
      <div className="cashFlow__flow">
        <h2>Trésorerie</h2>
        <div className="cashFlow__flow__grid">
          <div className="cashFlow__flow__grid__box">
            <div className="cashFlow__flow__grid__box__lineOne">
              <p className="cashFlow__flow__grid__box__lineOne__text">
                {`${maxGridSize}`}K€
              </p>
              <div className="cashFlow__flow__grid__box__lineOne__container">
                <hr />
              </div>
            </div>
            <div className="cashFlow__flow__grid__box__lineTwo">
              <p className="cashFlow__flow__grid__box__lineTwo__text">0€</p>
              <div className="cashFlow__flow__grid__box__lineTwo__container">
                <hr />
              </div>
            </div>
            <div className="cashFlow__flow__grid__box__lineThree">
              <p className="cashFlow__flow__grid__box__lineThree__text">
                -{`${maxGridSize}`}K€
              </p>
              <div className="cashFlow__flow__grid__box__lineThree__container">
                <hr />
              </div>
            </div>
          </div>
          <div className="cashFlow__flow__grid__lineFour">
            <p>Jan</p>
            <p>Fev</p>
            <p>Mar</p>
            <p>Avr</p>
            <p>Mai</p>
            <p>Juin</p>
            <p>Juil</p>
            <p>Aou</p>
            <p>Sep</p>
            <p>Oct</p>
            <p>Nov</p>
            <p>Dec</p>
          </div>
        </div>
      </div>
      <div className="cashFlow__bars">
        <div className="cashFlow__bars__container">
          {data.map((data, index) => (
            <BarsCashFlow data={data} key={index} maxGridSize={maxGridSize} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
