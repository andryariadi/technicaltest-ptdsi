import DataTable from "react-data-table-component";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    width: "65px",
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
    width: "150px",
    cell: (row) => (
      <div className="d-flex column-gap-1">
        <Link to={`detail/${row.id}`} className="btn btn-sm">
          <BsInfoCircleFill size={20} color="#5DBEA3" />
        </Link>
        <Link to={`/edit/${row.id}`} className="btn btn-sm">
          <AiTwotoneEdit size={20} color="#5783DB" />
        </Link>
        <Link to={`/delete/${row.id}`} className="btn btn-sm">
          <RiDeleteBin6Fill size={20} color="#DC3545" />
        </Link>
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
        data={filteredUsers}
        customStyles={tableHeaderStyle}
        pagination
        fixedHeader
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <Row className="d-flex justify-content-between align-items-center w-100 mb-3">
            <Col xs={12} md={6}>
              <input type="text" className="form-control" placeholder="Search..." onChange={handleSearch} />
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-end">
              <Link to={`/add-user`} className="btn btn-user btn-sm d-flex column-gap-2 bg-primary">
                <div>
                  <FaUserPlus size={20} color="#1E1E1E" />
                </div>
                <div>
                  <p className="text-adduser">Add User</p>
                </div>
              </Link>
            </Col>
          </Row>
        }
        striped
        bordered
        hover
        variant="dark"
      />
    </div>
  );
}
