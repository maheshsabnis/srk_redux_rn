import { ADD_PRODUCT } from "../actions/actions";

import { combineReducers } from "redux";

// define reducers functions

export function addProductReducer(state, action){
    console.log(`addproductreducer running default state = ${JSON.stringify(state)}`);
    switch (action.type){
        case ADD_PRODUCT:
            console.log(`addproductreducer  wit added product = ${JSON.stringify(action.product)}`);
            return {
                // update state with  a newly added product
                product:action.product
            };
        default:
            // return initialState
            return state;
    }
};

export function listProudctsReducer(state=[], action){
    console.log(`listproductsreducer running default state = ${JSON.stringify(state)}`);
    switch (action.type){
        case ADD_PRODUCT:
            // if new product is received 
            // then mutate it in state
            console.log(`Just added data isn store is : ${JSON.stringify(state)}`);
            return [...state, addProductReducer(undefined, action)];  
        default:
            // else return initialState
            return state;
    }
}

// COmbine reducers in a single reducer object
// listProudctReducer: will be used to read data from 'store'
const reducers = combineReducers({listProudctsReducer});

export default reducers;