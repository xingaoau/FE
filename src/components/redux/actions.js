import {
	ADD, FETCH, DELETE, UPDATE, FILTER
} from './action-types';
import axios from 'axios';

export const fetchUser = (users) => {
	return {
		type: FETCH,
		users
	}
}

export const addUser = (user) => {
	return {
		type: ADD,
		user
	}
}

export const filterUser = (value) => {
	return {
		type: FILTER,
		value
	}
}

export const updateUser = (user) => {
	return {
		type: UPDATE,
		user
	}
}

export const deleteUser = (index) => {
	return {
		type: DELETE,
		index
	}
}

export const getUser = () => {
	return (dispatch) => {
		axios.get('/json/data.json').then(response=>{

			if (response.status !== 200) {
				throw Error(response.statusText);
			}

			dispatch(fetchUser(response.data));
				
		}).catch(errors=>{
				console.log(errors);
		});
	}
}