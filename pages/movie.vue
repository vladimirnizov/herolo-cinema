<template>
    <view-item />
</template>

<script>
import ViewItem from '@/movies/ViewItem';

  export default {
    async fetch(context){
        await context.store.dispatch('movies/get_movie', context);
    },
    components: {
        ViewItem
    }
  }
</script>