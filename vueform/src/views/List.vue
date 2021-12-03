<template>
    <v-data-table
        :headers="headers"
        :items="userData"
        :items-per-page="5"
        class="elevations-1"
    >
        <template v-slot:top>
            <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        v-model="edituserData.email"
                                        label="E-mail"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        v-model="edituserData.pws"
                                        :append-icon="
                                            show
                                                ? 'visibility'
                                                : 'visibility_off'
                                        "
                                        :rules="[rules.required, rules.min]"
                                        :type="show ? 'text' : 'password'"
                                        name="passw"
                                        label="use only text signs"
                                        hint="At least 8 characters"
                                        counter
                                        @click:append="show = !show"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-slider
                                        v-model="edituserData.satisfaction"
                                        min="1"
                                        max="10"
                                        :label="label_stf.label"
                                        :track-color="label_stf.color"
                                        thumb-label="always"
                                    ></v-slider>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-textarea
                                        name="comments"
                                        label="Comments"
                                        hint="type here ..."
                                        v-model="edituserData.comments"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-checkbox
                                        v-model="edituserData.Options"
                                        value="sendcoupons"
                                        label=" Send me monthly coupons"
                                    >
                                    </v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-checkbox
                                        v-model="edituserData.Options"
                                        value="sendSpecial"
                                        label="I want today's special"
                                    >
                                    </v-checkbox>
                                </v-col>
                                <v-col cols="12" md="4" sm="6">
                                    <img
                                        v-if="edituserData.image != null"
                                        :src="linkfile"
                                        height="10%"
                                    />
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="close"
                            >Cancel</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="save"
                            >Save</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5"
                        >Are you sure want to delete this row?</v-card-title
                    >
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="closeDelete"
                            >Cancel</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="deleteConfirm"
                            >Delete</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
            <v-icon @click="deleteItem(item)">delete</v-icon>
        </template>
    </v-data-table>
</template>
<script>
import { FirebaseStorage } from '../firebase';
import UserDataService from '../services/UserDataService';

export default {
    data() {
        return {
            headers: [
                { text: 'E-mail', value: 'email' },
                { text: 'Satisfaction', value: 'satisfaction' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            show: false,
            rules: {
                required: (value) => !!value || 'Required.',
                min: (v) => v.length >= 8 || 'Min 8 characters',
            },
            label_stf: {
                label: 'Satisfaction',
                val: 10,
                color: 'red',
            },

            userData: [],
            linkfile: '',
            edituserData: {
                email: '',
                pws: '',
                satisfaction: 10,
                comments: '',
                options: [],
                image: '',
            },
            defaultuserData: {
                email: '',
                pws: '',
                satisfaction: 10,
                comments: 'Describe your review...',
                options: [],
                image: '',
            },
            currentuserData: null,
            currentIndex: -1,
            unsubscribe: null,
            dialog: false,
            dialogDelete: false,
        };
    },
    methods: {
        onDataChange(items) {
            let _userData = [];
            items.forEach((item) => {
                let id = item.id;
                let data = item.data();
                _userData.push({
                    id: id,
                    email: data.email,
                    pws: data.pws,
                    satisfaction: data.satisfaction,
                    comments: data.comments,
                    options: data.options,
                    image: data.image,
                });
            });
            this.userData = _userData;
        },
        refreshList() {
            this.currentuserData = null;
            this.currentIndex = -1;
        },
        editItem(item) {
            //alert('show esiit modal');
            //this.currentIndex=this.userData.indexOf(item);
            this.edituserData = Object.assign({}, item);
            this.getPicture(this.edituserData.image).then((link) => {
                this.linkfile = link;
            });
            this.dialog = true;
            console.log(item);
        },
        deleteItem(item) {
            //alert('Show delete modal');
            this.edituserData = Object.assign({}, item);
            this.dialogDelete = true;
            console.log(item);
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.edituserData - Object.asign({}, this.defaultuserData);
                this.currentIndex = -1;
            });
        },
        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.edituserData - Object.asign({}, this.defaultuserData);
                this.currentIndex = -1;
            });
        },
        save() {
            const data = {
                email: this.edituserData.email,
                pws: this.edituserData.pws,
                satisfaction: this.edituserData.satisfaction,
                comments: this.edituserData.comments,
                options: this.edituserData.options,
            };
            UserDataService.update(this.edituserData.id, data)
                .then(() => {
                    this.$emit('refreshList');
                })
                .catch((e) => {
                    console.log(e);
                });
            this.close();
        },
        deleteConfirm() {
            UserDataService.delete(this.edituserData.id)
                .then(() => {
                    this.$emit('refreshList');
                    this.closeDelete();
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getPicture(file) {
            return new Promise((resolve, reject) => {
                var startRef = FirebaseStorage.ref().child(file);
                startRef
                    .getDownloadURL()
                    .then(function (url) {
                        resolve(url);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        },
    },
    mounted() {
        this.unsubscribe = UserDataService.getAll()
            .orderBy('email', 'asc')
            .onSnapshot(this.onDataChange);
    },
    beforeDestroy() {
        this.unsubscribe();
    },
    computed: {
        formTitle() {
            return 'Edit Item';
        },
    },
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
};
</script>
