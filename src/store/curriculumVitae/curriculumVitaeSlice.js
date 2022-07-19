import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import getData from '../../utils/getData';
// import { CV_API_URL } from '../../constants/Environment';
import data from '../../../data.json';

export const retrieveCurriculumVitae = createAsyncThunk(
  'tutorials/retrieve',
  async () => {
    // return getData(CV_API_URL);
    return data;
  },
);

const initialState = {
  cv: {},
  loading: false,
  error: null,
};

const curriculumVitaeSlice = createSlice({
  name: 'curriculumVitae',
  initialState,
  extraReducers: {
    [retrieveCurriculumVitae.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [retrieveCurriculumVitae.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        cv: action.payload.data,
      };
    },
    [retrieveCurriculumVitae.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        cv: {},
        error: action.error,

      };
    },
  },
});

export const curriculumVitae = (state) => state.curriculumVitae;

const { reducer } = curriculumVitaeSlice;
export default reducer;
