import axios from 'axios'
import { getUser, navigate, deleteUser } from '../utils'

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api',
  baseURL: 'http://louvor.pibpiraquara.com.br/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


// api.interceptors.response.use(undefined, err => {
//   const error = err.response;
//   console.log(error);
//   if(error !== undefined){
//     if (error.status===401) {
//       //AsyncStorage.clear();
//     } 
//   }
// });

api.interceptors.response.use(
  response => {

    // Do something with response data

    return response
  },
  error => {

    // Do something with response error

    // You can even test for a response code
    // and try a new request before rejecting the promise

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      Alert.alert(
        'Aviso',
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
        [ { text: 'OK' } ],
        { cancelable: false },
      )
    }
   
    if (error.response.status === 401) {
      const requestConfig = error.config

      // O token JWT expirou 

        getUser()
        .then(token => {
          console.log(token)
          if (token !== null) //( e não está na tela de login)
            deleteUser()
            .then(() => {
              navigate('Logout',{})          
            })
        })

      return axios(requestConfig)
    }

    return Promise.reject(error)
  },
)

api.interceptors.request.use(
  config => {
    return getUser()
      .then(token => {
        if (token)
          config.headers.Authorization = `Bearer ${token}`
        return Promise.resolve(config)
      })
      .catch(error => {
        console.log(error)
        return Promise.resolve(config)
      })
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
