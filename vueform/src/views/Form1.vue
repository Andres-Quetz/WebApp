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
import UserDataService from '../services/UserDataService';
export default {
    data() {
        return {
            show: false,
            userData: {
                email: '',
                pws: '',
                satisfaction: 10,
                comments: 'Describe your review...',
                options: [],
                isSummited: false,
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
            var data = {
                email: this.userData.email,
                pws: this.userData.pws,
                satisfaction: this.userData.satisfaction,
                comments: this.userData.comments,
                options: this.userData.options,
            };
            UserDataService.create(data)
                .then(() => {
                    alert('created new user succesfully');
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
};
</script>
