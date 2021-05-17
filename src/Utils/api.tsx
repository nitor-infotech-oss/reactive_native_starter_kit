import axios from 'axios';
import {performanceMonitor} from '@utils/Monitoring/performance';
// https://reqres.in/api/users
// import perf from '@react-native-firebase/perf';
// import { customEndpointUrl } from './PerformanceMonitor/customEndpointUrl';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const get = async (apiPath: any, params: any, headers: any) => {

  performanceMonitor({apiPath, params, headers, method: 'GET'});

  const response = await axios({
    method: 'get',
    url: apiPath,
    params,
    headers,
  });

  console.log('user', response);

  return response;
};

export const post = async (apiPath: any, data: any, headers: any) => {
  const response = await axios({
    method: 'post',
    url: apiPath,
    data,
    headers,
  });

  return response;
};

const postCancalCall = () => {
  const cancel = {};

  return async (apiPath: String | any, data: any, headers: any) => {
    if (cancel && cancel[apiPath]) {
      // Cancel the previous request before making a new request
      cancel[apiPath].cancel();
    }
    // // Create a new CancelToken
    cancel[apiPath] = axios.CancelToken.source();

    const response = await axios({
      method: 'post',
      url: apiPath,
      data,
      headers,
      cancelToken: cancel[apiPath].token,
    });

    return response;
  };
};
export const postCancalable = postCancalCall();
