import axios from 'axios';
// import perf from '@react-native-firebase/perf';
// import { customEndpointUrl } from './PerformanceMonitor/customEndpointUrl';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const get = async (apiPath: any, params: any, headers: any) => {
//   const metric = perf().newHttpMetric(apiPath, 'GET');
//   await metric.start();

//   // Set initial attributes
//   // await this.metric.putAttribute('user_id', auth().currentUser.uid);
//   await metric.putAttribute('endpoint', customEndpointUrl(apiPath));

  const response = await axios({
    method: 'get',
    url: apiPath,
    params,
    headers,
  });

//   await metric.setHttpResponseCode(response.status || 0);
//   await metric.setResponseContentType(response.headers['content-type']);
//   await metric.setResponsePayloadSize(
//     Number(response.headers['content-length']) || 0,
//   );

//   await metric.stop();

  return response;
};

export const post = async (apiPath: any, data: any, headers: any) => {
//   const metric = perf().newHttpMetric(apiPath, 'POST');
//   await metric.start();

//   // Set initial attributes
//   await metric.putAttribute('endpoint', customEndpointUrl(apiPath));

  const response = await axios({
    method: 'post',
    url: apiPath,
    data,
    headers,
  });

//   await metric.setHttpResponseCode(response.status || 0);
//   await metric.setResponseContentType(response.headers['content-type']);
//   await metric.setResponsePayloadSize(
//     Number(response.headers['content-length']) || 0,
//   );

//   await metric.stop();

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
    // const metric = perf().newHttpMetric(apiPath, 'POST');
    // await metric.start();

    // // Set initial attributes
    // await metric.putAttribute('endpoint', customEndpointUrl(apiPath));

    const response = await axios({
      method: 'post',
      url: apiPath,
      data,
      headers,
      cancelToken: cancel[apiPath].token,
    });

    // await metric.setHttpResponseCode(response.status || 0);
    // await metric.setResponseContentType(response.headers['content-type']);
    // await metric.setResponsePayloadSize(
    //   Number(response.headers['content-length']) || 0,
    // );

    // await metric.stop();

    return response;
  };
};
export const postCancalable = postCancalCall();

