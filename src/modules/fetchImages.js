import api from '../api/imgur'

export default {
    state: ()=>({
        images: []
    }),
    getters: {
        getImages: state=>state.images
    },
    actions: {
        async fetchImages({rootState, commit}){
            const {token, user_name} = rootState.auth;
            const response = await api.fetchImages(token, user_name);
            console.log(response.data.data)
            commit('setImages', response.data.data);
        }
        
    },
    mutations: {
        setImages: (state, images)=>{
            state.images = images
        }
    }
}