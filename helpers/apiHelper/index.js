import axios from "axios";
import { apiBaseUrl } from "../../src/config/constants";

export const getRequest = async (url, isTokenRequired = true) => {
  const tokenHeader = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return await axios
    .get(apiBaseUrl + url, {
      headers: isTokenRequired
        ? tokenHeader
        : {
            "Content-Type": "application/json",
          },
    })
    .then((response) => {
      return {
        success: true,
        data: response.data.data,
        statusCode: response.status,
      };
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const postRequest = async (url, data, isTokenRequired = true) => {
  const tokenHeader = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return await axios
    .post(apiBaseUrl + url, data, {
      headers: isTokenRequired
        ? tokenHeader
        : {
            "Content-Type": "application/json",
          },
    })
    .then((response) => {
      return {
        success: true,
        data: response.data.data,
        statusCode: response.status,
      };
    })
    .catch((error) => {
      return {
        success: false,
        data: error.response.data,
        statusCode: error.response.status,
      };
    });
  // return await fetch(apiBaseUrl + url, {
  //   method: "post",
  //   headers: isTokenRequired
  //     ? tokenHeader
  //     : {
  //         "Content-Type": "application/json",
  //       },
  //   body: data,
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     return {
  //       success: true,
  //       data: response.data.data,
  //       statusCode: response.status,
  //     };
  //   })
  //   .catch((error) => {
  //     return {
  //       success: false,
  //       data: error.response.data,
  //       statusCode: error.response.status,
  //     };
  //   });
};

export const deleteRequest = (url, data, isTokenRequired = true) => {
  const tokenHeader = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  // return axios
  //   .delete(
  //     apiBaseUrl + url,
  //     {
  //       headers: isTokenRequired
  //         ? tokenHeader
  //         : {
  //             "Content-Type": "application/json",
  //           },
  //     },
  //     data
  //   )
  return axios
    .delete(apiBaseUrl + url, {
      headers: isTokenRequired
        ? tokenHeader
        : {
            "Content-Type": "application/json",
          },
      data: data,
    })
    .then((response) => {
      return {
        success: true,
        data: response.data.data,
        statusCode: response.status,
      };
    })
    .catch((error) => {
      return {
        success: false,
        data: error.response.data,
        statusCode: error.response.status,
      };
    });
};

export const putRequest = (url, data, isTokenRequired = true) => {
  const tokenHeader = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return axios
    .put(apiBaseUrl + url, data, {
      headers: isTokenRequired
        ? tokenHeader
        : {
            "Content-Type": "application/json",
          },
    })
    .then((response) => {
      return {
        success: true,
        data: response.data.data,
        statusCode: response.status,
      };
    })
    .catch((error) => {
      return {
        success: false,
        data: error.response.data,
        statusCode: error.response.status,
      };
    });
};
