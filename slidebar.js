var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        
        function showVal(newVal){
          document.getElementById("range").innerHTML=newVal;
                
          if(newVal == 1)               
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day0.pdf";            
          else if(newVal == 2)                
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.pdf";
          else if(newVal == 3)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.pdf";
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
