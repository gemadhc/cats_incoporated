

function show_vision(){
  var content = document.querySelector(".entire-content");
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
}

document.querySelector(".vision").addEventListener("click", show_vision);
