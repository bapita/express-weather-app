const day = document.getElementById("day");
const today_date = document.getElementById("today_date");
           

           const getCurrentDay = () => {
            var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
            let currentTime = new Date(); 
            let day = weekday[currentTime.getDay()];
            return day;
           }

           const getCurrentTime = () => {
               var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
               var now = new Date(); 
               var month  = months[now.getMonth()] ;
               var date = now.getDate();
               var year = now.getFullYear();

               // current time
               let hours = now.getHours();
               let mins = now.getMinutes();
               let period = "AM";
               if (hours > 11){
                   period = "PM";
                   if(hours > 12) hours -= 12;
               }
               if (mins < 10) {
                   mins = "0"+mins;
                }               
               return `${month} ${date} | ${hours}:${mins} ${period}`;
               console.log(date+ "/" + month + "/"+ year);
           }
           
           // current date
           day.innerText = getCurrentDay();
           today_date.innerText = getCurrentTime();