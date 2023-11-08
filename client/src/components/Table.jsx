import DataTable from "react-data-table-component";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address.street,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <div className="d-flex column-gap-1">
        <button className="btn btn-info btn-sm">Info</button>
        <button className="btn btn-primary btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    ),
  },
];

export default function TableCom({ users }) {
  return (
    <div className="table-container">
      <DataTable columns={columns} data={users} pagination fixedHeader selectableRows selectableRowsHighlight highlightOnHover />
    </div>
  );
}
