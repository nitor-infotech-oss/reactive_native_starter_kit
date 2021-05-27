import {apiCall} from '@utils/api';
import Constants from '../actionTypes/homeScreen';

export const doApiCall = () => {
  return async (dispatch: any) => {
    try {
      const res = await apiCall({
        apiPath: 'https://reqres.in/api/users',
        params: null,
        headers: null,
        method: 'GET',
      });
      console.log('res', res);
      dispatch({
        type: Constants.HOME,
        payload: {res},
      });
      return res;
    } catch (error) {
      console.log('has error', error);
      return error;
    }
  };
};
