import axios from "axios";

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

class Api {
  baseUrl: string = '';
  url: string = '';
  method: Method = 'GET';

  configure = (baseUrl: string, url: string) => {
    this.baseUrl = baseUrl;
    this.url = url;
  }

  execute = (baseUrl: string, url: string) => {
    this.configure(baseUrl, url);
    return new Promise((resolve, reject) => {
      axios({
        method: this.method,

        url: this.baseUrl + this.url,
      }).then((response) => {
        return resolve(response.data);
      })
    })
  }
};

export default Api;
