import { logsData, logsHeaderData } from "../data/LogsData";

const Table = () => {
  return (
    <div className="block logs__table">
      <table>
        <thead>
          <tr>
            {logsHeaderData.map((data) => (
              <th>{data.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {logsData.map((data) => (
            <tr key={data.id}>
              {data.values.map((value) => (
                <td key={value.id}>{value.name}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
