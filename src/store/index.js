import { createStore } from 'vuex'

import auth from "./auth";


const store = createStore({
  modules: {
    auth: auth,
  },
});

export default store
