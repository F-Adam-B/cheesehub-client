import {API_BASE_URL} from '../config';
// import { Promise } from 'mongoose';

export const fetchCheese = () => dispatch => {

    dispatch(fetchCheeseRequest());

    fetch(`${API_BASE_URL}/api/cheeses`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
            return res.json();
        }).then(cheese => {
            console.log(cheese);
            return dispatch(fetchCheeseSuccess(cheese));
        }).catch(err => 
            dispatch(fetchCheeseError(err))

    )
}

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheeses => ({
    type: FETCH_CHEESE_SUCCESS,
    cheeses
})

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
    type: FETCH_CHEESE_REQUEST,
})

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = error => ({
    type: FETCH_CHEESE_ERROR,
})


