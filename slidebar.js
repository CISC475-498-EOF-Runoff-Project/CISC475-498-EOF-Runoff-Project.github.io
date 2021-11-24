

var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        
//showVal() updates the (right now it is in pdf format) image of the runoff prediction based on where the user slides the slide bar
//i (erin) am attempting to get the statistics box to show up with this action as well

        function showVal(newVal){
          document.getElementById("range").innerHTML=newVal;
          //call stat box display method      
          if(newVal == 1)  
            //window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_clear.png");
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_accprcp.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day0.pdf";            
          else if(newVal == 2)  
            //window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event1_clear_size.png");
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_new5.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.pdf";
          else if(newVal == 3)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event2_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.pdf";
          else if(newVal == 4)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event3_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day3.pdf";
          else if(newVal == 5)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event4_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day4.pdf";           
          else if(newVal == 6)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event5_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day5.pdf";
          else if(newVal == 7)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event6_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day6.pdf";
          else if(newVal == 8)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event7_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day7.pdf";
          else if(newVal == 9)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event8_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day8.pdf";
          else if(newVal == 10)
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event9_clear_size.png");
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day9.pdf";
                
        }
