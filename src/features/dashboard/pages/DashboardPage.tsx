import BankAccount from "../components/BankAccount";
import CashBag from "../components/CashBag";
import CashFlow from "../components/CashFlow";
import FiltersDashboard from "../components/FiltersDashboard";
import Header from "../../../shared/components/Header";
import "../styles/DashboardPage.scss";

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
