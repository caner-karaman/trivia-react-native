import { combineReducers } from 'redux';

import questionReducer from "./question/questionReducer";

const rootReducer = combineReducers({
  questionReducer,
})

export default rootReducer;
