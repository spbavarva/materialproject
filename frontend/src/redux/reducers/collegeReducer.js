import {
  ALL_COLLEGE_FAILURE,
  ALL_COLLEGE_REQUEST,
  ALL_COLLEGE_SUCCESS,
  COLLEGE_BRANCH_REQUEST,
  COLLEGE_BRANCH_SUCCESS,
  COLLEGE_BRANCH_FAILURE,
  CLEAR_ERROR
} from "../constants/collegeConstants";

const initialData = { colleges: [] };

export const collegeListReducer = (state = initialData, action) => {
  switch (action.type) {
    case ALL_COLLEGE_REQUEST:
    case COLLEGE_BRANCH_REQUEST:
      return {
        loading: true
      };
    case ALL_COLLEGE_SUCCESS:
    case COLLEGE_BRANCH_SUCCESS:
      return {
        loading: false,
        colleges: action.payload,
        branches: action.payload
      };

    case ALL_COLLEGE_FAILURE:
    case COLLEGE_BRANCH_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
