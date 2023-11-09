import FormComponent from "../components/FormComponent";
import { useDispatch } from "react-redux";
import { createUser } from "../store/actions/actionCreator";

export default function AddUser() {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, address, phone }) => {
    dispatch(createUser({ name, email, address, phone }));
    console.log({ name, email, address, phone }, "<<<<<datadicomponentlagi");
  };

  return (
    <>
      <div className="container">
        <FormComponent onSubmit={handleSubmit} title="Create User" />
      </div>
    </>
  );
}
