import axios from "axios";
const URL = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";

export default {
  state: {
    DataComments: []
  },
  mutations: {},
  actions: {
    GET_COMMENT: async context => {
      let { data } = axios
        .get(URL)
        .then(res => (this.state.DataComments = res.data))
        .catch(err => err);
      context.commit("SET_TODO", data);
    }
  },
  getters: {
    DataComments(state) {
      return state.DataComments;
    }
  }
};
