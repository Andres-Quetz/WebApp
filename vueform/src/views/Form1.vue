<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field
                        v-model="userData.email"
                        label="E-mail"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field
                        v-model="userData.pws"
                        :append-icon="show ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show ? 'text' : 'password'"
                        name="passw"
                        label="use only text signs"
                        hint="At least 8 characters"
                        counter
                        @click:append="show = !show"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-slider
                        v-model="userData.satisfaction"
                        min="1"
                        max="10"
                        :label="label_stf.label"
                        :track-color="label_stf.color"
                        thumb-label="always"
                    ></v-slider>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-textarea
                        name="comments"
                        label="Comments"
                        hint="type here ..."
                        v-model="userData.comments"
                    ></v-textarea>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-checkbox
                        v-model="userData.Options"
                        value="sendcoupons"
                        label=" Send me monthly coupons"
                    >
                    </v-checkbox>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-checkbox
                        v-model="userData.Options"
                        value="sendSpecial"
                        label="I want today's special"
                    >
                    </v-checkbox>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-file-input
                        v-model="myFile"
                        outline
                        accept="image/png, image/jpeg"
                        placeholder="Click here to upload image"
                        :disable="processing"
                    >
                        <template v-slot:append-outer>
                            <v-progress-circular
                                v-if="processing"
                                color="blue-grey lighten-1"
                                indeterminate
                                small
                            >
                            </v-progress-circular>
                        </template>
                    </v-file-input>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-btn
                        color="success"
                        class="mr-4"
                        @click.prevent="submitted"
                        >Submit</v-btn
                    >
                </v-col>
            </v-row>
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
                elevation="2"
                v-if="userData.isSummitted"
            >
                <v-card-tittle>User Data Content</v-card-tittle>
                <v-card-text>
                    <v-row>
                        <div>
                            Mail: <b>{{ userData.email }}</b>
                        </div>
                        <div>
                            Password: <b>{{ userData.pws }}</b>
                        </div>
                        <div>
                            Satisfaction: <b>{{ userData.satisfaction }}</b>
                        </div>
                        <p style="white-space: pre">
                            Message: <b>{{ userData.comments }}</b>
                        </p>
                        <p>Options:</p>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </v-form>
</template>
<script>
import { FirebaseStorage } from '../firebase';
import UserDataService from '../services/UserDataService';
export default {
    data() {
        return {
            show: false,
            myFile: null,
            URLing: null,
            processing: false,
            fileURL: null,
            userData: {
                email: '',
                pws: '',
                satisfaction: 10,
                comments: 'Describe your review...',
                options: [],
                isSummited: false,
                image: '',
            },
            rules: {
                required: (value) => !!value || 'Required.',
                min: (v) => v.length >= 8 || 'Min 8 characters',
            },
            label_stf: {
                label: 'Satisfaction',
                val: 10,
                color: 'red',
            },
        };
    },
    methods: {
        submitted() {
            // this.userData.isSummitted = true;
            //alert(JSON.stringify(this.userData));
            this.fileInput(this.myFile);
            var data = {
                email: this.userData.email,
                pws: this.userData.pws,
                satisfaction: this.userData.satisfaction,
                comments: this.userData.comments,
                options: this.userData.options,
                image: this.userData.image,
            };
            UserDataService.create(data)
                .then(() => {
                    alert('created new user succesfully');
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        fileInput(file) {
            try {
                if (this.myFile && this.myFile.name) {
                    this.processing = true;
                    const fr = new FileReader();
                    fr.readAsDataURL(this.myFile);
                    fr.addEventListener('load', () => {
                        this.fileURL = fr.result;
                    });
                    const imgData = new FormData();
                    imgData.append('image', this.myFile.type);
                    const filepath = `img_user/${Date.now()}-${file.name}`;
                    const metadata = { contentType: this.myFile.type };
                    this.userData.image = filepath;
                
                    //crear una referencia en Storage
                    const ref = FirebaseStorage.ref().child(filepath);
                    //subir el archivo a la referencia indicada en Firepath
                    const upload = ref.put(this.myFile, metadata);
                    // supervisar el proceso de carga al storage de FB
                    upload.on(
                        'state_change',
                        function progress(snapshot) {
                            console.warn(
                                (snapshot.bytesTransferred /
                                    snapshot.totalBytes) *
                                    100
                            );
                        },
                        function error(error) {
                            console.error(error);
                        },
                        function complete() {
                            /*FirebaseStorage.ref(filepath)
                                .getDownloadURL()
                                .then((url) => {
                                    console.log(url);
                                });*/
                            // this.userData.image=filepath;
                        }
                    );
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.processing = false;
            }
        },
    },
};
</script>
