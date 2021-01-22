//import api from '../api/imgur'

export default {
    state: () => ({
        token: null
    }),
    getters : {
        isLoggedin: state => !!state.token
    },
    actions:{
        logIn: ()=>console.log('connected'),
        logOut: ({commit})=>{
            commit('setToken', null)
        }
    },
    mutations : {
        setToken: (state, token) => state.token = token
    }
}

