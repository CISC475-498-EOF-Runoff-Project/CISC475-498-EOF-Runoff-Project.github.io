

var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        
//showVal() updates the (right now it is in pdf format) image of the runoff prediction based on where the user slides the slide bar

        function showVal(newVal){
          const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          
          document.getElementById("range").innerHTML=newVal;
          var today = new Date();
          
          //call stat box display method      
          if(newVal == 1) {
            //var date_to_show = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var date_to_show = months[(today.getMonth()+1)] + " " + today.getDate() + ", " + today.getFullYear();
            document.getElementById("show_time").innerHTML = date_to_show;
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_vars.png");
          } 
          else if(newVal == 2) {
            var day = today + 1;
            var date_to_show = day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
            document.getElementById("show_time").innerHTML = date_to_show;
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event1_projected.png");
          } 
          else if(newVal == 3){
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event2_projected.png");
          }
          else if(newVal == 4) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event3_projected.png");
          }
          else if(newVal == 5) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event4_projected.png");
          }
          else if(newVal == 6) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event5_projected.png");
          }
          else if(newVal == 7) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event6_projected.png");
          }
          else if(newVal == 8) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event7_projected.png");
          }
          else if(newVal == 9) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event8_projected.png");
          }
          else if(newVal == 10) {
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event9_projected.png");
          }
        }
