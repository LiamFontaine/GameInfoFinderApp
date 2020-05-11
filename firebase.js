class Firebase {
    constructor(apiKey, projectId, storageBucket) {
        firebase.initializeApp({
            apiKey,
            projectId,
            storageBucket
        });
        this.database = firebase.firestore();
        this.fileStorage = firebase.storage().ref();
    }
    convertQuerySnapshotToRegularArray(querySnapshot) {
        return querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data()
        }));
    }
    get postsCollection() {
        return this.database.collection("games");
    }
}

export const firebaseInstance = new Firebase('AIzaSyBocVeNxYjEkzWj5aR1jNF0B8H_OYsqiU4', 'project-309047159412', 'gs://project-309047159412.appspot.com/');