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

export const ADD_CHEESE_SUCCESS = 'ADD_CHEESE_SUCCESS';
export const addCheeseSuccess = cheeses => ({
    type: ADD_CHEESE_SUCCESS,
    cheeses
})

export const ADD_CHEESE = 'ADD_CHEESE';
export const addCheese = (cheese) => dispatch => {
    dispatch(fetchCheeseRequest());
    return fetch(`${API_BASE_URL}/api/cheeses`,
    {
        method: 'POST', 
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(cheese)
    })
    .then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText)
        }
            return res.json();
    }).then(
        cheeses => {
            dispatch(addCheeseSuccess(cheeses))
        }
    )
    .catch(err => dispatch(fetchCheeseError(err)))

}
 
