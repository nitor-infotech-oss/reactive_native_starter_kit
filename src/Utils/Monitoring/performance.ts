import axios from 'axios';
import perf from '@react-native-firebase/perf';

export const performanceMonitor = async (axiosInstance: any) => {
    const {method} = axiosInstance;
  axios.create(axiosInstance)

  axios.interceptors.request.use(async function (config: any) {
    const httpMetric = perf().newHttpMetric(config.url, method.toUpperCase() );
    config.metadata = { httpMetric };

    // add any extra metric attributes if needed
    // httpMetric.putAttribute('userId', '12345678');
  
    await httpMetric.start();
    return config;
  });

  axios.interceptors.response.use(async function (response: any) {
    const { httpMetric } = response && response.config.metadata;
console.log("asdas", response)
    // add any extra metric attributes if needed
    // httpMetric.putAttribute('userId', '12345678');
  
    httpMetric.setHttpResponseCode(response.status);
    httpMetric.setResponseContentType(response.headers['content-type']);
    await httpMetric.stop();
  
    return response;
  }, async function (error) {
    const { httpMetric } = error.config.metadata;

    // add any extra metric attributes if needed
    // httpMetric.putAttribute('userId', '12345678');
  
    httpMetric.setHttpResponseCode(error.response.status);
    httpMetric.setResponseContentType(error.response.headers['content-type']);
    await httpMetric.stop();
  
    return Promise.reject(error);
  });
}
