import axios from "axios";
import { useState, useEffect } from "react";
import TableCom from "../components/Table";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios(`https://jsonplaceholder.typicode.com/users`).then((res) => setData(res.data));
  };

  return (
    <>
      <main className="container">
        <div>
          <TableCom users={data} />
        </div>
      </main>
      {/* <div className="w-100 min-vh-100"></div> */}
    </>
  );
}
