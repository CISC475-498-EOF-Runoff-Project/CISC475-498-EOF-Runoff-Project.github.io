var val = document.getElementById("valR").value;
        document.getElementById("range").innerHTML=val;
        document.getElementById("img").src = val + ".jpg";

        function showVal(newVal){
          document.getElementById("range").innerHTML=newVal;
          if(newVal == 1)
                  
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg";
          else if(newVal == 2)
                 
            document.getElementById("plugin").src = "https://github.com/CISC475-498-EOF-Runoff-Project/CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.jpg";
          else if(newVal == 3)
            document.getElementById("plugin").src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day3.jpg";
        }
