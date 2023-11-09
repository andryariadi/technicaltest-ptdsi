import { Table } from "reactstrap";

export default function TabelDetail({ user }) {
  return (
    <>
      <div className="table-detail">
        <Table dark striped>
          <tbody>
            <tr>
              <td width="100">Name</td>
              <td width="30">:</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td width="100">Email</td>
              <td width="30">:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td width="100">Address</td>
              <td width="30">:</td>
              <td>
                {user.address.street} - {user.address.suite}, {user.address.city}
              </td>
            </tr>
            <tr>
              <td width="100">Email</td>
              <td width="30">:</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td width="100">Phone</td>
              <td width="30">:</td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td width="100">Workplace</td>
              <td width="30">:</td>
              <td>{user.company.name}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
