import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetailAsync } from "../store/actions/actionCreator";
import { useEffect } from "react";

export default function DetailUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, loading } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(fetchUserDetailAsync(id));
  }, [id]);

  console.log(user, "<<<<<didetaillllcomponent");

  if (loading) {
    return (
      <div className="loading-layer">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <>
      <h1>Detail Pagee {id}</h1>
      {/* <h4>{}</h4> */}
    </>
  );
}
