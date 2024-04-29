import requests from '../request';
import { buildQuery } from '../helper';

const feed = {
  state: {
    feeds: [],
    feed: {},
    success: '',
    error: '',
  },
  reducers: {
    setFeeds(state, payload) {
      return { ...state, feeds: payload };
    },
    setFeed(state, payload) {
      return { ...state, feed: payload };
    },
    setSuccess(state, payload) {
      return { ...state, success: payload };
    },
    setError(state, payload) {
      return { ...state, error: payload };
    },
  },
  effects: (dispatch) => ({
    async getFeeds(filters) {
      const query = buildQuery(filters);
      console.log("🚀 ~ getFeeds ~ query:", query)
      const { data } = await requests.getCentral(`everything${query}`);
      
      console.log("🚀 ~ getFeeds ~ data:", data)
      if (data.status==="ok") {
        this.setFeeds(data.articles);
      } else {
        this.setError(data.message);
      }
    },
    async getFeed(id) {
      this.setFeed({});
      const { data } = await requests.getCentral(`/${id}`);
      if (data.success) {
        this.setFeed(data.data);
      }
    },
    resetMessages() {
      this.setSuccess('');
      this.setError({});
    }
  })
};

export default feed;
