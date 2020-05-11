import {
    firebaseInstance
} from "./firebase.js";

class Form {
    constructor() {
        this.formElement = document.getElementById('review');
        this.titleElement = document.getElementById('title');
        this.descriptionElement = document.getElementById('description');
        this.authorElement = document.getElementById('author');
        this.bindEvents();
    }


    uploadData() {
        firebaseInstance.postsCollection.add({
            Title: this.titleElement.value,
            Description: this.descriptionElement.value,
            Author: this.authorElement.value,
            createdAt: new Date(),


        });
    }
    clearForm() {
        this.titleElement.value = '';
        this.descriptionElement.value = '';
        this.authorElement.value = '';
    }
    submitForm(event) {
        event.preventDefault();


        this.uploadData();
        this.clearForm();

    }
    bindEvents() {
        this.formElement.addEventListener('submit', this.submitForm.bind(this));
    }
}

new Form();