let request = new XMLHttpRequest();

let url = "https://api.sunrise-sunset.org/json?lat=40.676675960349655&lng=-73.97045273178027";

request.open("GET", url, true);


request.onload = function() {
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
$("#sunrise").text(convertToEST(data.results.sunrise));
$("#sunset").text(convertToEST(data.results.sunset));

}


};



request.send();

function convertToEST(utc) {
let utcHours = utc.substr(0, utc.indexOf(":"));
let utcMinSec = utc.substr(utc.indexOf(":")+1,utc.indexOf(" ")-2);
let utcAP = utc.substr(utc.indexOf(" ")); 

let est = parseInt(utcHours, 10) - 5;
if (est < 0){
   		est = 12 +est;
   	if (utcAP == " AM"){
     		utcAP = "PM"
   		}
   	else if ( utcAP == " PM"){
     		utcAP = "AM"
   		}
 		}

 	if (utcHours >= 12){
   	if (utcAP == " AM"){
     		utcAP = "PM"
   		}
   	else if ( utcAP == " PM"){
     		utcAP = "AM"
   		}

 		}
  	est += ":" + utcMinSec + utcAP;
return est;
}

