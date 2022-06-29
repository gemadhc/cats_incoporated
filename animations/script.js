function toggle_options(){
  var the_options = document.querySelector(".show_options");
  the_options.classList.toggle("toggle_options");
  var the_bars = document.querySelectorAll(".bar");
  for(var i = 0; i<the_bars.length; i++){
    the_bars[i].classList.toggle("bar_active");
  }
}

document.querySelector(".burger").addEventListener("click", toggle_options);
