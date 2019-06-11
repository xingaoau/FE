import ajax from './ajax';

export const getUsersApi = () => ajax('/json/data.json', null, 'GET');
// export const addUserApi = (user) => ajax('/api/user/create', user, 'POST');
// export const UpdateUserApi = (user) => ajax('/api/user/'+ user.userId +'/update', user, 'PUT');
// export const DeleteUserApi = (index) => ajax('api/user/'+ index +'/delete', null, 'DELETE');