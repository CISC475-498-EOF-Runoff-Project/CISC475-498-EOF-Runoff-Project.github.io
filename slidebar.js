var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        
//showVal() updates the (right now it is in pdf format) image of the runoff prediction based on where the user slides the slide bar

function showVal(newVal) {
  const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  document.getElementById("range").innerHTML=newVal;
  var targetDate = new Date();

  //call stat box display method   
  if(newVal == 1) {
    targetDate.setDate(targetDate.getDate() + 0);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_projecte.png");
  }
  else if(newVal == 2) {
    targetDate.setDate(targetDate.getDate() + 1);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event1_projected.png");
  } 
  else if(newVal == 3){
    targetDate.setDate(targetDate.getDate() + 2);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event2_projected.png");
  }
  else if(newVal == 4) {
    targetDate.setDate(targetDate.getDate() + 3);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event3_projected.png");
  }
  else if(newVal == 5) {
    targetDate.setDate(targetDate.getDate() + 4);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event4_projected.png");
  }
  else if(newVal == 6) {
    targetDate.setDate(targetDate.getDate() + 5);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event5_projected.png");
  }
  else if(newVal == 7) {
    targetDate.setDate(targetDate.getDate() + 6);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event6_projected.png");
  }
  else if(newVal == 8) {
    targetDate.setDate(targetDate.getDate() + 7);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event7_projected.png");
  }
  else if(newVal == 9) {
    targetDate.setDate(targetDate.getDate() + 8);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event8_projected.png");
  }
  else if(newVal == 10) {
    targetDate.setDate(targetDate.getDate() + 9);
    var date_to_show = days[targetDate.getDay()] + ", " + months[targetDate.getMonth()] + " " + targetDate.getDate() + ", " + targetDate.getFullYear();
    document.getElementById("show_time").innerHTML = date_to_show;
    window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event9_projected.png");
  }
  var table = document.getElementById("popupStatsTable");
  //if (table.tBodies[0].rows.length >= newVal) {
  //  table.tBodies[0].rows[newVal-1].style.backgroundColor="grey";
  //}
  for (var i = 0; i < table.tBodies[0].rows.length; i++) {
    if (i == newVal-1) {
      table.tBodies[0].rows[i].style.backgroundColor="grey";
    }
    else {
      table.tBodies[0].rows[i].style.backgroundColor="transparent";
    }
  }
}

