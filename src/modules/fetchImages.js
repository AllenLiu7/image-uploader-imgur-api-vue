import api from '../api/imgur'

export default {
    state: ()=>({
        images: []
    }),
    getters: {
        getImages: state=>state.images
    },
    actions: {
        async fetchImages({rootState}){
            const {token, user_name} = rootState.auth;
            const data = await api.fetchImages(token, user_name);
            console.log(data)
            //commit('setImages', data);
        }
        
    },
    mutations: {
        setImages: (state, images)=>{
            state.images = images
        }
    }
}