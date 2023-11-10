import { useDispatch, useSelector } from "react-redux";
import FormComponent from "../components/FormComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserDetailAsync } from "../store/actions/actionCreator";

export default function EditUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, loading } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(fetchUserDetailAsync(id));
  }, [id]);

  console.log(user, "<<<<<diedittttttcomponent");

  const handleFormSubmit = (formData) => {
    dispatch(fetchUserDetailAsync(id, formData));
  };

  if (loading) {
    return (
      <div className="loading-layer">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <FormComponent title="Edit User" user={user} onSubmit={handleFormSubmit} />
      </div>
    </>
  );
}
