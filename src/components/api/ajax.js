import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET') {
  switch(type) {
    case 'GET':
      return axios.get(url);
    // case 'POST':
    //   return axios.post(url, data);  
    // case 'PUT':
    //   return axios.put(url, data); 
    // case 'DELETE':
    //   return axios.delete(url, data);  
    default:
      return null;  
  }
}