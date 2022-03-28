import axios from "axios";
import {
  ALL_COLLEGE_REQUEST,
  ALL_COLLEGE_SUCCESS,
  ALL_COLLEGE_FAILURE,
  COLLEGE_BRANCH_REQUEST,
  COLLEGE_BRANCH_SUCCESS,
  COLLEGE_BRANCH_FAILURE,
  CLEAR_ERROR
} from "../constants/collegeConstants";

export const getAllColleges = () => async dispatch => {
  try {
    dispatch({
      type: ALL_COLLEGE_REQUEST
    });

    const { data } = await axios.get(`/api/colleges`);
    console.log(data);

    dispatch({
      type: ALL_COLLEGE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ALL_COLLEGE_FAILURE
      // payload: error.response.data.message
    });
  }
};

export const getAllCollegesBranch = (id) => async dispatch => {
  try {
    dispatch({
      type: COLLEGE_BRANCH_REQUEST
    });

    const { data } = await axios.get(`/api/college/${id}/branches`);
    console.log(data);

    dispatch({
      type: COLLEGE_BRANCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COLLEGE_BRANCH_FAILURE
      // payload: error.response.data.message
    });
  }
};

export const clearError = () => async dispatch => {
  dispatch({ type: CLEAR_ERROR });
};
