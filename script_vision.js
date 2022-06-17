function toggle_menu(){
  var the_menu = document.querySelector("#menu");
  the_menu.classList.toggle("toggle_menu");
}

function open_vision(){
  location.replace("vision.html");
}
function open_friend(){
  location.replace("friends.html");
}
function open_events(){
  location.replace("events.html");
}
function open_contact(){
  location.replace("contact.html");
}

function add_events(){
  document.querySelector(".go_vision").addEventListener("click", open_vision);
  document.querySelector(".go_friend").addEventListener("click", open_friend);
  document.querySelector(".go_events").addEventListener("click", open_events);
  document.querySelector(".go_contact").addEventListener("click", open_contact);
}

document.querySelector(".burger").addEventListener("click", toggle_menu);
add_events();
