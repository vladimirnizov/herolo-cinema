export default
{
    namespaced: true,
    actions: {
        async nuxtServerInit({ commit, dispatch }) {
            await dispatch('storeDispatchFunc');
        },
        
        async storeDispatchFunc({ commit }) {
            const { data } = await this.$axios.get(`?s=work&apikey=388734b8`);
            commit('movies/set_movies', data);
        },
    }
}