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
  } else {
    src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/event.pdf"
  }
    document.getElementById('plugin').src = src;
 }