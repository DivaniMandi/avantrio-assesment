import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, LOADING_USER } from '../types';
import axios from 'axios';


export const login = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/api/user/login', userData)
        .then((res) => {
            const FBIdToken = `bearer ${res.data.token}`;
            localStorage.setItem('FBIdToken', FBIdToken);
            axios.defaults.headers.common['Authorization'] = FBIdToken;
            dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                //payload: err.response.data
            })

        });
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/api/users')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));

};

export const getUserLogs = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/api/<user id>/logs ')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err));

};