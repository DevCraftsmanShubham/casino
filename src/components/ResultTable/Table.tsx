import MaterialTable from 'material-table';

const columns = [
  {
    title: 'Id',
    field: 'id',
  },
  {
    title: 'Slots',
    field: 'slots',
  },
  {
    title: 'Time',
    field: 'time',
  },
];

const ResultTable = () => {
  return (
    <MaterialTable
      columns={columns}
      data={[
        { id: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      ]}
      title="Demo Title"
    />
  );
};

export default ResultTable;
