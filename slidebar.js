var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        document.getElementById("img").src = val + ".jpg";

        function showVal(newVal){
          document.getElementById("range").innerHTML=newVal;
                
          if(newVal == 1)               
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg";            
          else if(newVal == 2)                
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.jpg";
          else if(newVal == 3)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.jpg";
          else if(newVal == 4)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/imagess/Event0_day3.jpg";
          else if(newVal == 5)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day4.jpg";           
          else if(newVal == 6)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day5.jpg";
          else if(newVal == 7)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day6.jpg";
          else if(newVal == 8)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day7.jpg"
          else if(newVal == 9)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day8.jpg";
          else if(newVal == 10)
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day9.jpg";
                
        }
