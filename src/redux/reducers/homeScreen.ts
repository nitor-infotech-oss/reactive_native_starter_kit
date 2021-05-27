import {cloneDeep} from 'lodash';
import {ReduxAction} from '@utils/interface';
import Constants from '../actionTypes/homeScreen';

const initialState = {
  homescreentest: false,
};

const ACTION_HANDLERS = {
  // eslint-disable-next-line no-unused-vars
  [Constants.HOME]: (state: any, action?: ReduxAction) => {
    return {
      ...state,
      homescreentest: true,
    };
  },
};

export default (state = cloneDeep(initialState), action: ReduxAction) =>
  ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
