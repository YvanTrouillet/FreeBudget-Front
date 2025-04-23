import BankAccount from "../features/DashBoard/BankAccount";
import CashBag from "../features/DashBoard/CashBag";
import CashFlow from "../features/DashBoard/CashFlow";
import FiltersDashboard from "../features/DashBoard/FiltersDashboard";
import Header from "../layouts/Header";
import "../styles/Pages/DashboardPage.scss";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__container">
        <FiltersDashboard />
        <div className="dashboard__container__balance">
          <CashBag spend={"income"} />
          <CashBag spend={"spend"} />
          <CashBag spend={"expenses"} />
        </div>
        <div className="dashboard__container__accountFlow">
          <BankAccount />
          <CashFlow />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
