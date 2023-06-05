import axios from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";
import Cookies from "js-cookie";

export const API_ROOT = process.env.NEXT_PUBLIC_BACKEND_API;
const TIMEOUT = 20000;

const authService = (baseURL = API_ROOT, timeout = TIMEOUT) => {
  const header = getAuthorizationHeader();

  const client = axios.create({
    baseURL,
    timeout,
    header,
  });

  client.interceptors.response.use(handleSuccess, handleError);

  function handleSuccess(response) {
    return response;
  }

  function handleError(error) {
    const status = error.response?.status;
    if (status === 503) {
      alert("Service Unavailable, please try again");
    }
    if (error.response?.status !== 500) {
      return Promise.reject(error.response?.data);
    } else {
      return Promise.reject(error);
    }
  }

  function get(path) {
    return client
      .get(path, {
        headers: header,
      })
      .then((response) => {
        return response.data;
      }).catch(error => {
        if(error === 'Unauthorized.'){
          Cookies.remove('currentUser');
          Cookies.remove('Token');
        }else{
          alert(error)
        }
      });
  }

  function login(path,payload) {
    return client
      .post(path,payload)
      .then((response) => {
        return response.data;
      });
  }

  function post(path, payload) {
    return client
      .post(path, payload, {
        headers: header,
      })
      .then((response) => response.data);
  }

  function put(path, payload) {
    return client
      .put(path, payload, {
        headers: header,
      })
      .then((response) => response.data);
  }

  function patch(path, payload) {
    return client.patch(path, payload).then((response) => response.data);
  }

  function _delete(path, data) {
    if (data) {
      return client
        .delete(path, {
          data: data,
          headers: header,
        })
        .then((response) => response.data);
    }
    return client
      .delete(path, {
        headers: header,
      })
      .then((response) => response.data);
  }

  return {
    get: get,
    post,
    put,
    patch,
    delete: _delete,
    login
  };
};

export default authService;
