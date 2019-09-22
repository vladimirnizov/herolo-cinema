<template>
    <div id="view" class="row">
        <div class="col-md-6">
            <img :src="movie.Poster" class="card-img-top" :alt="movie.Title">
        </div>
        <div class="card col-md-6">
            <div class="cards-content">
                <div v-if="! editMode">
                    <h5 class="text-center pt-3">{{ movie.Title | onlyLetterts }}</h5>
                    <p>{{ movie.Type }}</p>
                    <p>{{ movie.Year }}</p>
                </div>
                <div v-else>
                    <p class="text-center"><input v-model="editItem.Title" class="input-title">
                        <span v-if="editItem.Title===''" class="warning">This field can't be empty</span>
                    </p>
                    <p><input v-model="editItem.Type">
                        <span v-if="editItem.Type===''" class="warning">This field can't be empty</span>
                    </p>
                    <p><input v-model="editItem.Year">
                        <span v-if="editItem.Year===''" class="warning">This field can't be empty</span>
                    </p>
                </div>
                <p>Runtime: {{ movie.Runtime }}</p>
                <p>Genre: {{ movie.Genre }}</p>
                <p>Director: {{ movie.Director }}</p>
                <p>Description:</p>
                <p>{{ movie.Plot }}</p>
                <div class="buttons">
                    <div v-if="valid">
                        <button v-if="! editMode" @click="editMode = !editMode" class="btn btn-primary">Edit</button>
                        <button v-else @click="modalShow = !modalShow" class="btn btn-primary">Save</button>
                    </div>
                    <button v-if="editMode" @click="cancel" class="btn btn-primary">Cancel</button>
                </div>
            </div>
            <!-- Modal -->
            <b-modal v-model="modalShow" hide-footer hide-header> 
                <div class="d-block text-center">
                    <h3>Save changes?</h3>
                </div>
                <b-button class="mt-2" variant="outline-primary" block @click="save">Save</b-button>
                <b-button class="mt-3" variant="outline-danger" block @click="cancel">Cancel</b-button>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        data() {
            return {
                modalShow: false,
                editMode: false,
                editItem: {}
            }
        },
        computed: {
            ...mapState('movies', ['movie']),

            valid() {
                return this.editItem.Title !=='' && this.editItem.Type !=='' && this.editItem.Year !=='';
            }
        },
        methods: {
            ...mapMutations('movies', {
                edit: 'edit_movie'
            }),
            save() {
                this.edit(this.editItem);
                this.modalShow = ! this.modalShow;
                this.editMode = ! this.editMode;
            },
            cancel() {
                this.editMode = ! this.editMode;
                this.modalShow = false;
                this.editItem = { ...this.movie }
            }
        },
        mounted() {
            this.editItem = { ...this.movie }
        },
    }
</script>

<style lang="scss" scoped>
    #view {
        margin: 5rem 2rem;
        display: flex;
        flex-wrap: wrap;

        .cards-content {
            display: flex;
            flex-direction: column;
        }
        .buttons {
            position: absolute;
            top: 10px;
            right: 10px;

            .btn {
                margin: 5px;
                width: 80px;
            }
        }
        .input-title {
            margin: 0 auto;
            margin-top: 10px;
            justify-self: center;
            text-align: center;
        }
        .warning {
            color: red;
            margin-top: 0;
        }
    }
</style>