
function toggle_menu(){
  var the_menu = document.querySelector("#menu");
  the_menu.classList.toggle("toggle_menu");
}
function show_friends(){alert("friends")}
function show_events(){alert("events")}
function show_contact(){alert("events")}
function build_menu(content){

  var options = ["Our Vision", "Find a Friend", "Events", "Contact"];
  var function_names = [show_vision, show_friends, show_events, show_contact];
  var menu_frame = document.createElement("div");
  menu_frame.classList.add("show_menu");
  menu_frame.setAttribute("id", "menu");

  for(var i=0; i<4; i++){
    var my_option = document.createElement("div");
    my_option.classList.add("sand_option_div");
    my_option.addEventListener("click", function_names[i]);
    var option_name = document.createElement("h2");
    option_name.classList.add("menu_options_text");
    option_name.innerHTML = options[i];
    my_option.append(option_name);
    menu_frame.append(my_option);
  }

  content.append(menu_frame);
}

function show_vision(){
  var content = document.querySelector(".entire-content");
  if(content== null){
    content = document.querySelector(".entire-content-noland");
  }
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
  content.classList.remove("entire-content");
  content.classList.add("entire-content-noland");

  var burger = document.createElement("div");
  burger.classList.add("burger");

  var sand1 = document.createElement("div");
  var sand2 = document.createElement("div");
  var sand3 = document.createElement("div");

  sand1.classList.add("sand-div");
  sand2.classList.add("sand-div");
  sand3.classList.add("sand-div");

  burger.append(sand1);
  burger.append(sand2);
  burger.append(sand3);

  burger.addEventListener("click", toggle_menu);
  content.append(burger);

  var company_name = document.createElement("h3");
  company_name.classList.add("home-link");
  company_name.innerHTML = "CATS INCORPORATED";
  content.append(company_name);

  var information_card = document.createElement("div");
  information_card.classList.add("content-container");

  var section_title = document.createElement("h2");
  section_title.classList.add("section-title");
  section_title.innerHTML = "Our Vision";
  var image = document.createElement("img");
  image.setAttribute("src", "cat_face.jpg");
  image.classList.add("image");
  var this_paragraph = document.createElement("p");
  this_paragraph.classList.add("paragraph");
  this_paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium arcu in ultrices tincidunt. Aliquam erat volutpat. Curabitur lacinia volutpat consectetur. Suspendisse porttitor velit vitae dui pulvinar efficitur. Nullam mauris ipsum, dictum vel porta et, tincidunt vel nisl. Proin eget feugiat nisl, sed tempor quam. Donec nec massa vitae arcu vulputate euismod. Curabitur eu commodo dui. Praesent sagittis dui mi, et euismod quam commodo nec. Suspendisse porta, ex in pellentesque volutpat, massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.massa metus porttitor neque, quis laoreet odio lacus ac dolor. Suspendisse quis elit in augue consectetur fringilla nec vitae erat.";
  information_card.append(section_title);
  information_card.append(image);
  information_card.append(this_paragraph);

  content.append(information_card);

  build_menu(content);

}

document.querySelector(".vision").addEventListener("click", show_vision);
