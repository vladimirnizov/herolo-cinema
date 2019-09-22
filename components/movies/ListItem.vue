<template>
    <div class="card">
        <img :src="movie.Poster" class="card-img-top" :alt="movie.Title">
        <div class="cards-content">
            <h5>{{ movie.Title | onlyLetterts }}</h5>
            <p>{{ movie.Type }}</p>
            <p>{{ movie.Year }}</p>
            <div class="buttons">
                <div v-if="! search" >
                    <nuxt-link class="btn btn-primary" :to="{ path: 'movie', query: { id: movie.imdbID } }">View</nuxt-link>
                    <a @click="modalShow = !modalShow" class="btn btn-primary">Delete</a>   
                </div>
                <a v-else @click="addToList" class="btn btn-primary">Add to list</a>   
            </div>
        </div>
        <!-- Modal -->
        <b-modal v-model="modalShow" hide-footer hide-header> 
            <div class="d-block text-center">
                <h3>Are you sure ?</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="remove(movie.imdbID); modalShow = !modalShow">Yes</b-button>
            <b-button class="mt-2" variant="outline-primary" block @click="modalShow = !modalShow">Cancel</b-button>
        </b-modal>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                modalShow: false
            }
        },
        props : {
            movie : {
                required : true,
                type     : Object
            },
            search: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            ...mapMutations('movies', {
                remove: 'remove_movie',
                add   : 'add_movie'
            }),

            addToList() {
                this.add(this.movie);
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 170px;
        height: 350px;

        img {
            object-fit: cover;
            padding: 2px;
            height: 200px;
        }

        .cards-content {
            display: flex;
            flex-direction: column;

            h5 {
                width: 150px;
                white-space: nowrap;
                padding: 2px 5px;
                overflow: auto;
            }
            p {
                margin: 3px 20px;
            }

            .buttons {
                align-self: center;
                margin-top: 3px;
                
                a {
                    cursor: pointer;
                    color: white;
                    margin: 0 5px;
                    min-width: 70px;
                }
            }
        }
    }

    @media(max-width: 400px) {
        .card {
            width: 100%;
            height: 100%;
            margin: 10px auto;

            img {
                height: 350px;
            }
            .cards-content h5 {
                width: 280px;
            }
        }
    }
</style>