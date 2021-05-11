import axios, { AxiosRequestConfig } from 'axios';
const instance = axios.create({

  baseURL: 'https://gateway.marvel.com:443/v1/public'
})

instance.defaults.params = {};
instance.interceptors.request.use(
  async (config:AxiosRequestConfig) =>{
  
    config.params['hash']= '788f2381a2b5f89e8e44bbd5522583bc'
    config.params['apikey'] = '43a4b013cb6bb1d86c2d39715aeb28db'
    config.params['ts'] = '1'
      
    
    return config;
  },
  (err) =>{
   console.log(err) 
   return Promise.reject(err)
  }
)

export default instance;