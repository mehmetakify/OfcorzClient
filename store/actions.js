import * as types from './types';

const url = "http://localhost:4000"

export const logout = () => ({ type: types.LOGIN, payload: {skills: null, userId: null} });

export const login = (axios, body) => (dispatch) => {
  axios
    .post(`${url}/login`, body)
    .then(({ data }) => {
      dispatch({ type: types.LOGIN, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.LOGIN, payload: {skills: null, userId: null} });
    });
};

export const addSkill = (axios, body) => (dispatch) => {
  axios
    .post(`${url}/skill`, body)
    .then(({ data }) => {
      dispatch({ type: types.ADD_SKILL, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.ADD_SKILL, payload: null });
    });
};

export const editSkill = (axios, body) => (dispatch) => {
  axios
    .put(`${url}/skill`, body)
    .then(({ data }) => {
      dispatch({ type: types.EDIT_SKILL, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.EDIT_SKILL, payload: null });
    });
};

export const deleteSkill = (axios, id) => (dispatch) => {
  axios
    .delete(`${url}/skill/${id}`)
    .then(({ data }) => {
      dispatch({ type: types.DELETE_SKILL, payload: id });
    })
    .catch(() => {
      dispatch({ type: types.DELETE_SKILL, payload: null });
    });
};
