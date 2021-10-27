function pdfView(sw) {
    var src;
    if (sw == 0) {
      src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg"
  } else if (sw == 1) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.pdf"
  } else if (sw == 2) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.pdf"
  } else if (sw == 3) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day3.pdf"
  } else if (sw == 4) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day4.pdf"
  } else if (sw == 5) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day5.pdf"
  } 
     else if (sw == 6) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day6.pdf"
  } 
     else if (sw == 7) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day7.pdf"
  } 
     else if (sw == 8) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day8.pdf"
  } 
     else if (sw == 9) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day9.pdf"
  } else {
    src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/event.pdf"
  }
    document.getElementById('plugin').src = src;
}

var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        document.getElementById("img").src = val + ".jpg";
        function showVal(newVal){
          document.getElementById("range").innerHTML=newVal;
          if(newVal == 1)
            document.getElementById("img").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg";
          else if(newVal == 2)
            document.getElementById("img").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/blob/main/images/homogeneouscoords.jpg?raw=true";
          else if(newVal == 3)
            document.getElementById("img").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg";
        }