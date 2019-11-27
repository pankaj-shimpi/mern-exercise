import axios from 'axios';

const login = () => {
  return new Promise((res, rej) => {

  });
}
export const get = (url) => {
  return new Promise((res, rej) => {
    request({ url, method: 'get' }).then(result => {
      res(result);
    });
  });
}

export const post = (url, data) => {
  return new Promise((res, rej) => {
    request({ url, method: 'post', data }).then(result => {
      res(result);
    });
  });
}

const put = (url, data) => {
  return new Promise((res, rej) => {
    request({ url, method: 'put', data }).then(result => {
      res(result);
    });
  });
}

const deleteApi = (url) => {
  return new Promise((res, rej) => {
    request({ url, method: 'delete' }).then(result => {
      res(result);
    });
  });
}

const getToken = () => {
  return 'zzzzz';
  /* return localStorage.getItem('token'); */
}

const request = ({ method, url, data }) => {
  return new Promise((res, rej) => {
    const token = getToken();
    if (token) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', '*/*');
      headers.append('Authorization', token);
      axios({
        method,
        url,
        data,
        headers
      }).then(response => {
        res(response.data);
      }).catch(error => {
        console.log(error);
        rej(error);
      });
    }
  });
}

module.export = {
  login,
  get,
  post,
  put,
  deleteApi
};

