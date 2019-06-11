import {
	ADD, FETCH, DELETE, UPDATE, FILTER
} from './action-types';

const initUsers = {
	users: [],
	users_copy: [],
	msg: ""
}

function user(state = initUsers, action) {
	switch (action.type) {
		case FETCH:
			return  state = {
				...state,
				users: action.users,
				users_copy: action.users
			};

		case FILTER:
			if (action.value === "") {
				return state = {
					...state,
					users: state.users_copy
				}
			} else {
				return state = {
					users: state.users.filter(
						user => { 
							if( (user.first_name + user.last_name).includes(action.value) ) 
								return user;
							else 
								return null;	
						} 
					),
					users_copy: state.users_copy
				}
			}	

		case DELETE:
			return  state = {
				...state,
				users: state.users.filter((user) => user.id !== action.index)
			}

		case ADD:
			return  state = {
				...state,
				users: [...state.users, action.user],
				users_copy: [...state.users_copy, action.user]
			}		

		case UPDATE:
			// console.log(action)
			return  state = {
				...state,
				users: state.users.map(
					(user) => user.id === action.user.id ? {
						...user, 
						first_name: action.user.first_name,
						last_name: action.user.last_name,
						dob: action.user.dob
					} : user
				)
			// 	// users_copy: [...state.users_copy, action.user]
			}
			
		default:
			return state;
	}
}

export default user;
