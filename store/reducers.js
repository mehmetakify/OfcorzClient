/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import * as types from './types';

const mainReducer = (state = { skills: null, userId: null }, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        skills: payload.skills,
        userId: payload.userId
      };
    case types.ADD_SKILL:
      return {
        ...state,
        skills: state.skills.concat(payload),
      };
    case types.EDIT_SKILL:
      return {
        ...state,
        skills: state.skills.map(el => {
          if (el.id === payload.id) {
            return { ...el, ...payload }
          } else {
            return el
          }
        }),
      };
    case types.DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(el => el.id !== payload),
      };
    default:
      return state;
  }
};

export default combineReducers({
  main: mainReducer,
});
