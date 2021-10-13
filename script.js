function pdfView(sw) {
    var src;
    if (sw == 0) {
      src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/test1.pdf"
  } else if (sw == 3) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Day3.pdf"
  } else {
    src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/event.pdf"
  }
    document.getElementById('plugin').src = src;
 }
