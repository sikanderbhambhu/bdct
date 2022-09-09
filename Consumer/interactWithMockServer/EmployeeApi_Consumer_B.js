"use strict"

const axios = require("axios")

exports.getEmployee = async (endpoint) => {
  const getRequestPath = '/v1/employee/getEmployee';
  const mockURL = endpoint + getRequestPath
  console.log("+++++++++++ Mock URL ++++++++++++++", mockURL);

  return axios
    .request({
      method: 'GET',
      url: mockURL,
    })
    .then((response) => {
      console.log("********** Consumer End's Response On Hitting Mock Server **********");
      const responseData = response.data;
      console.log(responseData);
      return response;
    }, (error) => {
      console.log("********** Consumer End's Error On Hitting Mock Server **********" + error);
    });
};