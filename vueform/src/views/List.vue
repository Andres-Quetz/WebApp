<template>
    <v-data-table
        :headers="headers"
        :items="userData"
        :items-per-page="5"
        class="elevations-1"
    >
        <template v-slot:item.actions="{ item }">
            <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
            <v-icon @click="deleteItem(item)">delete</v-icon>
        </template>
    </v-data-table>
</template>
<script>
import UserDataService from '../services/UserDataService';

export default {
    data() {
        return {
            headers: [
                { text: 'E-mail', value: 'email' },
                { text: 'Satisfaction', value: 'satisfaction' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            userData: [],
            edituserData: {
                email: '',
                pws: '',
                satisfaction: 10,
                comments: '',
                options: [],
            },
            defaultuserData: {
                email: '',
                pws: '',
                satisfaction: 10,
                comments: 'Describe your review...',
                options: [],
            },
            currentuserData: null,
            currentIndex: -1,
            unsubscribe: null,
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
                });
            });
            this.userData = _userData;
        },
        refreshList() {
            this.currentuserData = null;
            this.currentIndex = -1;
        },
        editItem(item) {
            alert('show esiit modal');
            console.log(item);
        },
        deleteItem(item) {
            alert('Show delete modal');
            console.log(item);
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
};
</script>
