<template>
    <div id="new-movie">
        <h2>Search your movie: </h2>
        <p class="text-center">
            <input v-model="title" class="input-title">
            <button @click="search" class="btn btn-primary">Search</button>
        </p>
        <item class="item" v-if="movie" :movie="movie" :search="true" />
    </div>
</template>

<script>
    import Item from './ListItem';

    export default {
        data() {
            return {
                title: '',
                movie: null
            }
        },
        components: {
            Item
        },
        methods: {
            async search() {
                const { data } = await this.$axios.get(`?t=${this.title}${process.env.API_KEY}`);
                this.movie = null;

                if(data.Response !== "False") {
                    this.movie = data;
                }                
            }
        },
    }
</script>

<style lang="scss" scoped>
    #new-movie {
        margin: 5rem 2rem;
        display: flex;
        flex-direction: column;

        h2 {
            margin: 10px auto;
        }
        p {
            display: inline-flex;
            justify-content: center;
            
            button {
                margin: 0 5px;
             }
        }

        .item {
            align-self: center;
        }
    }
</style>