import {
    firebaseInstance
} from "./firebase.js";

export class Post {
    constructor(data) {
        this.data = data;

    }
    get readableDate() {
        const date = new Date(this.data.createdAt.seconds * 1000);
        const readableTime = date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        })
        const readableDate = date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return `${readableTime} ${readableDate}`;
    }
    get htmlString() {
        return `
        <section id="${this.data}" class="post">
          <h3>${this.data.Title}</h3>
          <h5>${this.data.Author}</h5>
          <p>${this.data.Description}</p>
          
        </section>
      `;
    }

    bindEvents() {
        this.likeButton = document.getElementById(`likeButton${this.data.id}`);

    }
}

export const test = 5;