$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "test.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
    }
  });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var options = $("#options");
  for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    options.append($("<option />").val(data[0]).text(data[1]));
  }
}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
Select user name: <select id='options'></select>

