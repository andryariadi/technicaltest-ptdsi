import { USER_FETCH_LOADING, USER_FETCH_SUCCESS, USER_FETCH_FAILED } from "./actionType";

export const fetchUserSuccess = (data) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchUserLoading = () => {
  return {
    type: USER_FETCH_LOADING,
  };
};

export const fetchUserFailed = (data) => {
  return {
    type: USER_FETCH_FAILED,
    payload: data,
  };
};

export const fetchUserAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchUserLoading());
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const action = fetchUserSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        dispatch(fetchUserFailed(err));
      });
  };
};
