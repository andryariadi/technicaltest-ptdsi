import { USER_FETCH_LOADING, USER_FETCH_SUCCESS, USER_FETCH_FAILED, USERDETAIL_FETCH_LOADING, USERDETAIL_FETCH_SUCCESS, USERDETAIL_FETCH_FAILED } from "./actionType";

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

export const fetchUserDetailSuccess = (data) => {
  return {
    type: USERDETAIL_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchUserDetailLoading = () => {
  return {
    type: USERDETAIL_FETCH_LOADING,
  };
};

export const fetchUserDetailFailed = (data) => {
  return {
    type: USERDETAIL_FETCH_FAILED,
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
        console.log(err);
        dispatch(fetchUserFailed(err));
      });
  };
};

export const fetchUserDetailAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchUserDetailLoading());
    fetch(`${baseUrl}/jobs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "<<<<<<detail diactionnn");
        const action = fetchUserDetailSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserDetailFailed(err));
      });
  };
};
