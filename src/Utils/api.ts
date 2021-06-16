import axios from 'axios';
import {performanceMonitor} from '@utils/Monitoring/performance';
// https://reqres.in/api/users
// import perf from '@react-native-firebase/perf';
// import { customEndpointUrl } from './PerformanceMonitor/customEndpointUrl';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const apiCall = async (apiCallData: any) => {
  const {apiPath, params, headers, method} = apiCallData;
  performanceMonitor({apiPath, params, headers, method});

  const response = await axios({
    method: method.toLowerCase(),
    url: apiPath,
    params,
    headers,
  });

  console.log('user', response);

  return response;
};
