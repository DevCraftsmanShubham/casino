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
    <div style={{ height: '100%'}}>
    <MaterialTable

    style={{ height:"5%"}}
      columns={columns}
      data={[
        
      ]}
      title="Demo Title"
    />
    </div>
  );
};

export default ResultTable;
