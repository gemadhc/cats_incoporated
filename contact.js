var hours = document.querySelector(".hours");

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var times = ["8am - 9am", "Closed"];

var sch_tbl=  document.createElement("div");
sch_tbl.classList.add("shc-tbl");

for(var i =0; i < days.length; i++){
  var container = document.createElement("div");
  container.classList.add("day-container");

  var new_h4 = document.createElement("h4");
  var time = document.createElement("h4");
  new_h4.innerHTML = days[i];
  time.innerHTML = times[0];
  new_h4.classList.add("day-name");
  time.classList.add("time-sch");
  container.append(new_h4);
  container.append(time);
  hours.append(container);
}
