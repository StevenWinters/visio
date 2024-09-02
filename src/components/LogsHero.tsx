import MediaChart from "../assets/images/media-chart.png";
import { logsChartData } from "../data/LogsData";

const LogsHero = () => {
  return (
    <section className="grid grid--1x2 gap--lg grid--center align--center block block--full container logs">
      <img className="img img--350" src={MediaChart} alt="Media Chart" />
      <div className="log__container">
        <div className="chart__content">
          <h1>Media Log</h1>
          <p>Platforms I use during my spare time.</p>
        </div>
        <div className="flex flex--wrap justify--center gap--lg chart__data">
          {logsChartData.map((data) => (
            <div key={data.id} className="flex flex--column">
              <div className={`chart__color chart--${data.id}`}></div>
              <span className="chart__heading chart__text">{data.name}</span>
              <span className="chart__percent chart__text">{data.percent}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogsHero;
