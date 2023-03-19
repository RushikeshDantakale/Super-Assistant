import {createSlice} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';



const slideBtn = 'home';





const slideBtnClicked = createSlice({
    name : 'slideBtnClicked' ,
    initialState : slideBtn,
    reducers : {
        changeTab(state , action){
            return state = action.payload;
        }
    }
})



export const {changeTab} = slideBtnClicked.actions;
// export default cartSlice.reducer;

const rootReducer = combineReducers({
    slideBtnClick : slideBtnClicked.reducer,

  });

  export default rootReducer;