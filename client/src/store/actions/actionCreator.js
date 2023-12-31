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

const baseUrl = `https://jsonplaceholder.typicode.com/users`;

export const fetchUserAsyncSuccess = () => {
  return (dispatch) => {
    dispatch(fetchUserLoading());
    fetch(`${baseUrl}`, {
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
        console.log();
        dispatch(fetchUserFailed(err));
      });
  };
};

export const fetchUserDetailAsync = (id) => {
  return (dispatch) => {
    dispatch(fetchUserDetailLoading());
    fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "<<<<<<detailactionnn");
        const action = fetchUserDetailSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserDetailFailed(err));
      });
  };
};

export const createUser = ({ name, email, address, phone }) => {
  console.log({ name, email, address, phone }, "<<<<diactionnnn");
  return async () => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, address, phone }),
      });
      if (!response.ok) {
        throw { message: "Something went wrong!" };
      }
      const data = await response.json();
      return data;
    } catch (err) {
      fetchUserFailed(err);
      console.log(err);
      throw err;
    }
  };
};

export const fetchUserEditlAsync = (id, updatedUserData) => {
  return (dispatch) => {
    dispatch(fetchUserDetailLoading());
    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "<<<<<<detailactionnn");
        const action = fetchUserDetailSuccess(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserDetailFailed(err));
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch(fetchUserAsyncSuccess());
      })
      .catch((err) => fetchUserFailed(err));
  };
};
