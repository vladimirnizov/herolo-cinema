import Vue  from 'vue';

Vue.filter('onlyLetterts', (value) => {
    return value.replace(/[^A-Za-z ]/g, "");
});