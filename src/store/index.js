import { createStore } from "vuex";
import auth from '../modules/auth'
import fetchImages from '../modules/fetchImages'

const store = createStore({
    modules: {
        auth,
        fetchImages
    }
  })

export default store