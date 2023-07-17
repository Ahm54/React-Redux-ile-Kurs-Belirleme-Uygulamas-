import {configureStore} from '@reduxjs/toolkit'
import { FormReducer } from './slices/FormSlice';
import {courseReducer} from './slices/CourseSlice';


export const store = configureStore({
    reducer:{
        form:FormReducer,
        courses:courseReducer
    },
});