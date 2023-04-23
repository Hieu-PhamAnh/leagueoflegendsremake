import { loginStart, loginSuccess, loginFailure } from "./slice/accountSlice";
import axios from "axios";
import { API_LINK } from "../default-value";
export const login = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${API_LINK}/auth/login`, {
      username: user.username,
      password: user.password,
    });
    dispatch(loginSuccess(res.data.user));
    localStorage.setItem("accessToken", res.data.token.accessToken);
    alert("Đăng nhập thành công");
  } catch (error) {
    dispatch(loginFailure());
    alert("Đăng nhập thất bại");
  }
};

export const getDataFromAccessToken = async (
  dispatch: any,
  accessToken: any
) => {
  dispatch(loginStart());
  try {
    const res = await axios.get(`${API_LINK}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure());
    localStorage.removeItem("accessToken");
    alert("Đăng nhập thất bại");
  }
};
