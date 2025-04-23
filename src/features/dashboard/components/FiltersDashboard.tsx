import "../styles/filterDashboard.scss";

const FiltersDashboard = () => {
  return (
    <div className="filterDashboard">
      <button type="button" className="filterDashboard__btn">
        Année
      </button>
      <button type="button" className="filterDashboard__btn">
        Mois
      </button>
      <button type="button" className="filterDashboard__btn">
        Semaine
      </button>
    </div>
  );
};

export default FiltersDashboard;
