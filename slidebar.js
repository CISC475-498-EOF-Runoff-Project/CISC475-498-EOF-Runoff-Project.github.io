

var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        
//showVal() updates the (right now it is in pdf format) image of the runoff prediction based on where the user slides the slide bar

        function showVal(newVal){
          const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          
          document.getElementById("range").innerHTML=newVal;
          //call stat box display method      
          if(newVal == 1) {
            //window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_clear.png");
            const d = new Date();
            
        d.setDate(d.getDate());
            var dNoTime = months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
                  console.log(d.getMonth());
          document.getElementById("show_time").innerHTML = d;
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_vars.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day0.pdf";            
           } else if(newVal == 2) {
            const d = new Date();
            
        d.setDate(dNoTime);
            var dNoTime = months[d.getMonth()]+' '+(d.getDate()+1)+', '+d.getFullYear();
                   console.log(dNoTime);
          document.getElementById("show_time").innerHTML = dNoTime;
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event1_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.pdf";
           }else if(newVal == 3){
            const d = new Date();
           
        d.setDate(dNoTime);
            var dNoTime = months[d.getMonth()]+' '+(d.getDate()+2)+', '+d.getFullYear();
                   console.log(dNoTime);
          document.getElementById("show_time").innerHTML = dNoTime;
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event2_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.pdf";
           }else if(newVal == 4)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event3_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day3.pdf";
          else if(newVal == 5)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event4_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day4.pdf";           
          else if(newVal == 6)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event5_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day5.pdf";
          else if(newVal == 7)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event6_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day6.pdf";
          else if(newVal == 8)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event7_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day7.pdf";
          else if(newVal == 9)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event8_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day8.pdf";
          else if(newVal == 10)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event9_projected.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day9.pdf";
                
        }
