/* eslint-disable import/no-cycle */
import axios from 'axios';
import { NEWS_API } from '../constant';

function getCentral(url) {
  const apiUrl = `${NEWS_API}${url}`;
  console.log("🚀 ~ getCentral ~ apiUrl:", apiUrl)
  return axios.get(apiUrl);
}

const requests = {
  getCentral
};

export default requests;
