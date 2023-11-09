import axios from "axios";
import { useState, useEffect } from "react";
import TableCom from "../components/Table";
import { BsInfoCircleFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAsyncSuccess } from "../store/actions/actionCreator";

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

export default function Home() {
  const dispatch = useDispatch();
  let { users, loading } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUserAsyncSuccess());
  }, []);

  console.log(users, "<<<<dihomeeeee");

  return (
    <>
      <main className="container">
        <div>
          <TableCom users={users} columns={columns} />
        </div>
      </main>
    </>
  );
}
