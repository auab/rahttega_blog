import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="trix-navbar"
export default class extends Controller {
  connect() {
    function rename() {
      let boldButton = document.querySelector(".trix-button--icon-bold");
      boldButton.innerHTML = 'B';
      let italicButton = document.querySelector(".trix-button--icon-italic");
      italicButton.innerHTML = 'I';
      let strikeButton = document.querySelector(".trix-button--icon-strike");
      strikeButton.innerHTML = 'S';
    };
    setTimeout(rename, 1);
  };


}
