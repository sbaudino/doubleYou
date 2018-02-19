import axios from 'axios';

export default function ajax(url) {
  const promise = axios({
    method: 'GET',
    url,
  }).then(response => response.data);

  return promise;
}
