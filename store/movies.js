export default 
{
    namespaced: true,
    state: () => ({
        movies: [],
        movie: {}
    }),
    actions: {    
        get_movie: async ( {commit, state}, context ) => {
            const id = context.query.id ;
            if(! state.movie.imdbID || state.movie.imdbID !== id) {
                const { data } = await context.$axios.get(`?i=${id}${process.env.API_KEY}`);            
                commit('set_movie', data);
            }
        }
    },
    mutations: 
    {
        set_movies(state, data) {
            state.movies = data.Search;
        },

        set_movie(state, data) {            
            state.movie = data;
        },

        add_movie(state, data) {            
            state.movies.push(data);
        },

        edit_movie(state, edited) {
            state.movie = { ...edited };
            for (let index = 0; index < state.movies.length; index++) {
                if(state.movies[index].imdbID === edited.imdbID) {
                    edited.index = index;
                    break;
                }
            }
            state.movies[edited.index] = edited;
        },

        remove_movie(state, id) {
           state.movies = state.movies.filter(movie => movie.imdbID !== id);
        }
    }
}