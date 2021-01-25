import api from '../api/imgur'
import qs from 'qs'
import router from '../router';

export default {
    state: () => ({
        token: window.localStorage.getItem('imgur_token'),
        user_name: window.localStorage.getItem('imgur_user')
    }),
    getters : {
        isLoggedin: state => !!state.token
    },
    actions:{
        login: ()=>api.login(),
        
        finalizeLogin: ({commit}, hash)=>{
            const query = qs.parse(hash.replace('#', ''));
            console.log(hash)
            window.localStorage.setItem('imgur_token', query.access_token)
            window.localStorage.setItem('imgur_user', query.account_username)
            commit('setToken', query.access_token)
            commit('setUser', query.account_username)
            router.push('/')
        },

        logout: ({commit})=>{
            commit('setToken', null)
            window.localStorage.removeItem('imgur_token')
            window.localStorage.removeItem('imgur_user')
            //setItem to "null" will turn "null" to a string, which is truethy value
        }
    },
    mutations : {
        setToken: (state, token) => state.token = token,
        setUser: (state, user_name) => state.user_name = user_name
    }
}

