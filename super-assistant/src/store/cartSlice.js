import {createSlice} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';



const slideBtn = 'home';

const customerID = '';




const slideBtnClicked = createSlice({
    name : 'slideBtnClicked' ,
    initialState : slideBtn,
    reducers : {
        changeTab(state , action){
            return state = action.payload;
        }
    }
})

const customerClicked = createSlice({
    name : 'customerClicked' ,
    initialState : customerID,
    reducers : {
        changeCustomer(state , action){
            return state = action.payload;
        }
    }
})



export const {changeTab} = slideBtnClicked.actions;
export const {changeCustomer} = customerClicked.actions;
// export default cartSlice.reducer;

const rootReducer = combineReducers({
    slideBtnClick : slideBtnClicked.reducer,
    customerClick : customerClicked.reducer,

  });

  export default rootReducer;