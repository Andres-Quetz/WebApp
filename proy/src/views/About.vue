<template>
<v-sheet
 
  elevation="24"

 
>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" ad="4">
                    <v-text-field
                        v-model="username"
                        :rules="nameRules"
                        label="User name:"
                        required
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="password"
                        :rules="passRules"
                        label="Password"
                        required
                    >
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                    <v-btn
                        color="secondary"
                        elevation="24"
                        to="/backend"
                     >Login </v-btn>

                     
                </v-col>
                <v-col cols="12" md="12">
                    <v-btn
                        color="secondary"
                        elevation="24"
                     >Forgot? </v-btn>
                </v-col>
                
                
            </v-row>
        </v-container>
    </v-form>
  </v-sheet>
    
</template>
<script>
export default {
    data: () => ({
        valid: false,
        username: '',
        password: '',
        nameRules: [
            (v) => !!v || 'Username is required',

        ],
        passRules: [
            (v) => !!v || 'password is required',
            
        ],
    }),
};
</script>
