import api from '../api/imgur'
import qs from 'qs'

export default {
    state: () => ({
        token: null
    }),
    getters : {
        isLoggedin: state => !!state.token
    },
    actions:{
        login: ()=>api.login(),
        finalizeLogin: ({commit}, hash)=>{
            const query = qs.parse(hash.replace('#', ''));
            commit('setToken', query.access_token)
        },
        logout: ({commit})=>{
            commit('setToken', null)
        }
    },
    mutations : {
        setToken: (state, token) => state.token = token
    }
}

