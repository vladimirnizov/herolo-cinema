<template>
    <div id="list">
        <div v-for="(movie, index) in movies" :key="index" class="item">
            <item :movie="movie" />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Item from './ListItem';

    export default {
        components: {
            Item
        },
        computed: {
            ...mapState('movies', ['movies']),
        }
    }
</script>

<style lang="scss" scoped>
    #list {
        margin: 5rem 2rem;
        display: flex;
        flex-wrap: wrap;

        .item {
            margin: 5px;
        }
    }
</style>