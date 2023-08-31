import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="trix-navbar"
export default class extends Controller {
  connect() {
    function rename() {
      let boldButton = document.querySelector(".trix-button--icon-bold");
      boldButton.innerHTML = 'B';
      // changeButtonHTML('bold', 'Boo');
      let italicButton = document.querySelector(".trix-button--icon-italic");
      italicButton.innerHTML = 'I';
      let strikeButton = document.querySelector(".trix-button--icon-strike");
      strikeButton.innerHTML = 'S';
      let attachmentButton = document.querySelector(".trix-button--icon-attach");
      attachmentButton.innerHTML = '<i class="fa-solid fa-paperclip"></i>';
      let linkButton = document.querySelector(".trix-button--icon-link");
      linkButton.innerHTML = '<i class="fa-solid fa-link"></i>';
      let headerButton = document.querySelector(".trix-button--icon-heading-1");
      headerButton.innerHTML = '<i class="fa-solid fa-heading"></i>';
      let ulButton = document.querySelector(".trix-button--icon-bullet-list");
      ulButton.innerHTML = '<i class="fa-solid fa-list"></i>';
      let olButton = document.querySelector(".trix-button--icon-number-list");
      olButton.innerHTML = '<i class="fa-solid fa-list-ol"></i>';
      let undoButton = document.querySelector(".trix-button--icon-undo");
      undoButton.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>';
      let redoButton = document.querySelector(".trix-button--icon-redo");
      redoButton.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i>';
    };
    setTimeout(rename, 1);
  };

}
