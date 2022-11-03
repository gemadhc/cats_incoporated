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




function show_friends(){
  var cats_cards = document.querySelector(".card-cats-container");
  for(var i= 0; i < 6; i++){
    var new_card = document.createElement("div");
    new_card.classList.add("card");
    var cat_name = document.createElement("h3");
    cat_name.classList.add("cat_name");
    cat_name.innerHTML="Mitsubishi";
    var image = document.createElement("img");
    var cat_info = document.createElement("p");
    var button = document.createElement("div");
    image.classList.add("cat_photo");
    cat_info.classList.add("cat_info");
    button.classList.add("learn_more_button");
    button.innerHTML = "Learn More!";
    image.setAttribute("src", "cat_photo.jpg");
    cat_info.innerHTML = "Mitsubishi, 2 Years old, Lovely, Short Hair";

    new_card.append(cat_name);
    new_card.append(image);
    new_card.append(cat_info);
    new_card.append(button);
    cats_cards.append(new_card);
  }
}
function toggle_menu(){
  var the_menu = document.querySelector("#menu");
  the_menu.classList.toggle("toggle_menu");
}
function clear_filters(){
  var checkboxes = document.querySelectorAll("input");
  for( var each in checkboxes){
      checkboxes[each].checked = false;
  }
}
show_friends();
function build_filter_box(){
  var sections = ["Color", "Sex", "Hair Length", "Energy Level", "Friendliness"];
  var cat_colors = new Array("White", "Orange", "Grey", "Tabby", "Black", "Brown");
  var filter_bar = document.querySelector(".filter_bar");
  for (var i=0; i < sections.length; i++){
    var new_section = document.createElement("div");
    new_section.classList.add("filter-section");
    var name = document.createElement("h3");
    name.classList.add("filter_section_title");
    name.innerHTML = sections[i];
    new_section.append(name);
    for( var option in cat_colors){
      var one_section = document.createElement("div");
      var checkbox = document.createElement("input");
      var option_label = document.createElement("label");
      one_section.classList.add("options-section");
      option_label.classList.add("lab");
      br = document.createElement("br");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", cat_colors[option]);
      checkbox.setAttribute("name", cat_colors[option]);
      checkbox.setAttribute("value", cat_colors[option]);
      checkbox.classList.add("largerbox");

      option_label.setAttribute("for", cat_colors[option]);
      option_label.innerText = cat_colors[option];
      option_label.classList.add("option");
      one_section.append(option_label);
      one_section.append(checkbox);
      /*one_section.append(br);*/

      new_section.append(one_section)
    }
    filter_bar.append(new_section);
  }
  var apply = document.createElement("button");
  apply.classList.add("apply-button");
  apply.innerHTML = "Apply";
  apply.addEventListener("click", clear_filters);
  apply.setAttribute("type","button");
  filter_bar.append(apply);
}
add_events();
build_filter_box();
document.querySelector(".burger").addEventListener("click", toggle_menu);
