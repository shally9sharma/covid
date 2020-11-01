_________________________________________________________________________
Extensions:
Path Intellisense
npm
Code Spell Checker
Material Icon Theme
REST Client
npm intellisense
Bracket Pair Colorizer 2
open in browser
_
_________________________________________________________________________________________________
git init
git remote add origin https://github.com/pseudocoders64/covid-tracker.git
git config --global user.email "email"
git config --global user.password "password"
git config --global user.name "name"
git checkout -b dev
git commit -m "phase1"
git add .
git push -u origin dev


git add .
git commit -m  "phase1-bugsmash1"
git push
_____________________________________________________________________________________________________
To know the location of the person:
/*Doesn't work without ssl*/
https://www.geoplugin.com/webservices/javascript
1. add  in your index.html
<script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>

2.use this in countryApp.js
//geoplugin_countryCode()
function geoplugin_countryCode() { return 'IN'; }

______________________________________________________________________________________________________
open source APIs:

https://documenter.getpostman.com/view/10808728/SzS8rjbc

test the api:
fetch(`https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`, {
		"method": "GET",
		"headers": {
			"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
			
		}
	})
	.then(response=>{
		return response.json();
	}).then(data=>{
		
		console.log(data);
	})

0:{Active: 0,City: "",CityCode: "",Confirmed: 0,Country: "South Africa",CountryCode: "ZA",Date: "2020-03-01T00:00:00Z",Deaths: 0
Lat: "-30.56",Lon: "22.94",Province: "",Recovered: 0}
1: {Country: "South Africa", CountryCode: "ZA", Province: "", City: "", CityCode: "", …}
2: {Country: "South Africa", CountryCode: "ZA", Province: "", City: "", CityCode: "", …}
__________________________________________________________________________________________________________
Chart:

https://www.chartjs.org/docs/latest/

Add this in index.html
<div class="chart">
    <canvas id="axes_line_chart"></canvas>
</div>

->Installation->CDN Js->https://cdnjs.com/libraries/Chart.js

copy the script tag for chart.min.js and add it in index.html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" integrity="sha512-d9xgZrVZpmmQlfonhQUvTR7lMPtO7NkZMkA0ABN3PHCbKA5nqylQ/yWlFAyY6hYgdF1Qh6nYiuADWwKB4C2WSw==" crossorigin="anonymous"></script>


->Axis->linear
https://www.chartjs.org/docs/latest/axes/cartesian/linear.html
use this in countryApp.js /*changed chart to my_chart*/
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 50000,
                    stepSize: 500000
                }
            }]
        }
    }
});


_______________________________________________________________________________________________
Utilities.

1. to remove / from integer string
parseInt(DATA.toal_cases.replace(/,/g,""))
________________________________________________________________________________________________

heart beat pulse

1. add this in html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
2. add inside p
<div class="pulse"></div>
3. in css add this to @media
.pulse{           
        background: none;
        animation: none;
        display: none;
    }
4. add this in css outside media
.pulse{           
            background: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"  xml:space="preserve" > <polyline fill="none"  stroke-width="2px" stroke="white" points="2.4,58.7 70.8,58.7 76.1,46.2 81.1,58.7 89.9,58.7 93.8,66.5 102.8,32.7 110.6,78.7 115.3,58.7 126.4,58.7 134.4,54.7 142.4,58.7 197.8,58.7"/></svg>') 0 0 no-repeat;
            width:100%;
            height: 100%;
            position: absolute ;
            animation: 3s pulse linear infinite;
            top: -30;
            left: 545px;
            opacity: 0.1;
        }
       
        @keyframes pulse {
            0% {
                clip: rect(0,0,100px,0);
            }
            4% {
                clip: rect(0,66.66667px,100px,0);
            }
            15% {
                clip: rect(0,133.3333px,100px,0);
            }
            20% {
                clip: rect(0,300px,100px,0);
                opacity: 1;
            }
            80%{
                clip: rect(0,300px,100px,0);
                opacity: 0;
            }
            90%{
               
                opacity: 0;
            }
            100%{
                clip: rect(0,300px,100px,0);
                opacity: 0;
            }