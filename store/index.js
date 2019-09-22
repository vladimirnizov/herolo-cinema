export default
{
    namespaced: true,
    actions: {
        async nuxtServerInit({ commit, dispatch }) {
            await dispatch('storeDispatchFunc');
        },
        
        async storeDispatchFunc({ commit }) {
            const { data } = await this.$axios.get(`?s=work${process.env.API_KEY}`);
            commit('movies/set_movies', data);
        },
    }
}
