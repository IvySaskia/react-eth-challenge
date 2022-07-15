import { combineReducers } from '@reduxjs/toolkit';
import curriculumVitaeSlice from './curriculumVitae/curriculumVitaeSlice';

const rootReducer = combineReducers({
  curriculumVitae: curriculumVitaeSlice,
});

export default rootReducer;
