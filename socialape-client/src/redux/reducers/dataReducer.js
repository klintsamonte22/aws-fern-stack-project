import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
} from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = {
          ...action.payload,
          comments: state.scream.comments,
        };
      }
      return {
        ...state,
      };
    case DELETE_SCREAM:
      let indexVar = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(indexVar, 1);
      return {
        ...state,
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
      };
    case SUBMIT_COMMENT:
      let indexScream = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.comment.screamId
      );
      state.screams[indexScream] = action.payload.scream;
      return {
        ...state,
        scream: {
          ...state.scream,
          commentCount: action.payload.scream.commentCount,
          comments: [action.payload.comment, ...state.scream.comments],
        },
      };
    default:
      return state;
  }
}
