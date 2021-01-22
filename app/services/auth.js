const axios = require('axios');
const {env} = require('../config/env');

module.exports = {
  verifyNum: ({locale, countryCode, authType, phoneNumber}) =>
    axios({
      method: 'post',
      url: env.apiUrl + '/api/u/a/verify-num',
      data: {
        locale,
        countryCode,
        authType,
        phoneNumber,
      },
    }),
  verifyOTP: ({locale, countryCode, otp}) =>
    axios({
      method: 'post',
      url: env.apiUrl + '/api/u/a/verify-otp',
      data: {
        locale,
        countryCode,
        otp,
      },
    }),
  register: (data) =>
    axios({
      method: 'post',
      url: env.apiUrl + '/api/u/a/verify-otp',
      data,
    }),
  resendOTP: ({locale, countryCode, authType, phoneNumber}) =>
    axios({
      method: 'post',
      url: env.apiUrl + '/api/u/a/resend-otp',
      data: {
        locale,
        countryCode,
        authType,
        phoneNumber,
      },
    }),
};
