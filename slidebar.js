

var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        
//showVal() updates the (right now it is in pdf format) image of the runoff prediction based on where the user slides the slide bar
//i (erin) am attempting to get the statistics box to show up with this action as well

        function showVal(newVal){
          document.getElementById("range").innerHTML=newVal;
          //call stat box display method      
          if(newVal == 1)               
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day0.pdf";            
          else if(newVal == 2) {              
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.pdf";
            console.log(document.getElementById("mapid"));
            window.imageOverlay.setUrl("https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg");
          }
          else if(newVal == 3)
            console.log(document.getElementById("mapid"));
            //document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.pdf";
          else if(newVal == 4)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day3.pdf";
          else if(newVal == 5)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day4.pdf";           
          else if(newVal == 6)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day5.pdf";
          else if(newVal == 7)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day6.pdf";
          else if(newVal == 8)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day7.pdf";
          else if(newVal == 9)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day8.pdf";
          else if(newVal == 10)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day9.pdf";
                
        }
