import api from '../api/imgur'

export default {
    state: () => ({
        token: null
    }),
    getters : {
        isLoggedin: state => !!state.token
    },
    actions:{
        logIn: ()=>api.login(),
        logOut: ({commit})=>{
            commit('setToken', null)
        }
    },
    mutations : {
        setToken: (state, token) => state.token = token
    }
}

