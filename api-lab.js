"use strict";
$(document).ready (() => {
  $.get("https://www.reddit.com/r/aww/.json", (items) => {
    for (let i = 0; i < 10; i++){
      $("main").append(`
        <div class="articles">
         <h2>${items.data.children[i].data.title}</h2>

         <img src="${items.data.children[i].data.thumbnail}" alt="${items.data.children[i].data.title}">

         <a href="http://www.reddit.com/${items.data.children[i].data.permalink}">Click here for more!</a>
        </div>
         `);

    } //end of for loop
  }) //end of get request

}); //End of document.ready
