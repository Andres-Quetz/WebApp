import firebase from '../firebase';

const db = firebase.collection('/users');

class UserDataService {
    getAll() {
        return db;
    }
    create(user) {
        return db.add(user);
    }
}

export default new UserDataService();
