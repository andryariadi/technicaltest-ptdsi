import DataTable from "react-data-table-component";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

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
        <button className="btn btn-sm">
          <BsInfoCircleFill size={20} color="#5DBEA3" />
        </button>
        <button className="btn btn-sm">
          <AiTwotoneEdit size={20} color="#5783DB" />
        </button>
        <button className="btn btn-sm">
          <RiDeleteBin6Fill size={20} color="#DC3545" />
        </button>
      </div>
    ),
  },
];

export default function TableCom({ users }) {
  const [searchText, setSearchText] = useState("");

  function handleSearch(event) {
    const searchValue = event.target.value.toLowerCase();
    setSearchText(searchValue);
  }

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchText);
  });

  const tableHeaderStyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "#776B5D",
      },
    },
  };

  return (
    <div className="table-container">
      <DataTable
        columns={columns}
        data={filteredUsers} // Gunakan data yang sudah difilter
        customStyles={tableHeaderStyle}
        pagination
        fixedHeader
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={<input type="text" className="form-control w-25" placeholder="Search..." onChange={handleSearch} />}
      />
    </div>
  );
}
