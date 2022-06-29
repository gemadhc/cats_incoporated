function toggle_menu(){
  var the_menu = document.querySelector(".show_options");
  the_menu.classList.toggle("toggle_options");
  var title = document.querySelector(".section-title");
  title.classList.toggle("toggle_title");
  var title = document.querySelector(".image");
  title.classList.toggle("toggle-image");
}
var sentinel = 0;
var moveTitleInterval= setInterval(move_title_position, 10);
function move_title_position(){
  var title = document.querySelector(".section-title");
  var image = document.querySelector(".image");
  if(image!=null){
    image.style.position = "absolute";
    image.style.right = sentinel +'vw';

  }
  title.style.position= "absolute";
  title.style.left = sentinel + 'vw';
  if(sentinel == 15){
    clearInterval(moveTitleInterval);
  }
  sentinel = sentinel  + 1.0;

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
