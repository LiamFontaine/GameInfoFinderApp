import {
    Post
} from "./post.js";
import {
    firebaseInstance
} from "./firebase.js";

class Posts {
    constructor() {
        this.htmlElement = document.getElementById('posts');
    }
    sortByTimeStamp(a, b) {
        if (a.createdAt < b.createdAt) {
            return 1;
        }
        if (a.createdAt > b.createdAt) {
            return -1;
        }
    }
    render() {
        firebaseInstance.postsCollection.onSnapshot((querySnapshot) => {
            let htmlString = '';
            const postsData = firebaseInstance.convertQuerySnapshotToRegularArray(querySnapshot);
            postsData.sort(this.sortByTimeStamp);
            postsData.forEach((postData) => {
                const postInstance = new Post(postData);
                htmlString += postInstance.htmlString;
            })
            this.htmlElement.innerHTML = htmlString;

            postsData.forEach((postData) => {
                const postInstance = new Post(postData);
                postInstance.bindEvents();
            });



        })
    }
}

const posts = new Posts();
posts.render();