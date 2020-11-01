/** Select all elements from index.html*/
const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");
const ctx = document.getElementById("axes_line_chart").getContext("2d");

//data for app, declare all variables
let app_data= [],
	cases_list= [],
	recovered_list= [],
	deaths_list =[],
	dates =[],
	formatedDates=[];

//The logged in users location/country code
/*let country_code = geoplugin_countryCode();
console.log(country_code);*/
//if the country is not in the countriesData.js let the default value be India
let user_country='India';    
/*country_list.forEach((country) => {
  if (country.code == country_code) {
    user_country = country.name;
  }
});*/

function fetchData(user_country){

	//reset the arrays every time country is changed so that new data can be written
	cases_list=[],recovered_list=[],deaths_list=[],dates=[],formatedDates=[],indexes=[];

	//API has a lag of 30 mins
	const toDate =new Date(new Date().setDate(new Date().getDate()-0.5)).toISOString();

	//${user_country}
	//https://api.covid19api.com/country/india?from=2020-10-01T00:00:00Z&to=2020-10-29T00:00:00Z
	//https://api.covid19api.com/country/${user_country}?from=2020-10-01T00:00:00Z&to=2020-10-29T00:00:00Z
	/** */
	console.log(user_country);
	fetch(`https://api.covid19api.com/country/${user_country}?from=2020-01-01T00:00:00Z&to=${toDate}`, {
				"method": "GET",
				"headers": {
				"X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
				}
		})
		.then(response=>{
			return response.json();
		}).then(data=>{
			indexes=Object.keys(data);
			//dates=Object.keys(data);
			console.log(data);
			indexes.forEach(index=>{
					let DATA=data[index];
					formatedDates.push(formatDate(DATA.Date));
					app_data.push(DATA);
					cases_list.push(DATA.Confirmed);
					recovered_list.push(DATA.Recovered);
					deaths_list.push(DATA.Deaths);
			});		
		  }).then(()=>{
			  updateUI();
		  }).catch(error=>{
			  console.log(error);
			  alert("Please try after sometime");
		  });
	  
	}
	
fetchData(user_country);


function updateUI() {
	updateStats();
	axesLinearChart();
  }

function updateStats() {
	let last_entry=app_data[app_data.length-1];
	let before_last_entry=app_data[app_data.length-2];

	/**replaces the Loading... */
	country_name_element.innerHTML=last_entry.Country;

	/**total cases of latest entry.. replaces the total cases in top of the page */
	total_cases_element.innerHTML=last_entry.Confirmed || 0; /** if no data, put 0 */
	/**This is just add the symbol + */
	new_cases_element.innerHTML=
	`+${last_entry.Confirmed -before_last_entry.Confirmed}`;


	recovered_element.innerHTML=last_entry.Recovered ||0;
	/** last but one-last  + is just a sign to show in UI */ 
	new_recovered_element.innerHTML=
	`+${last_entry.Recovered -before_last_entry.Recovered}`;

	deaths_element.innerHTML=last_entry.Deaths;
	new_deaths_element.innerHTML=`+${last_entry.Deaths -before_last_entry.Deaths}`;

}

//updating the chart
let my_chart;
function axesLinearChart(){
	//resetting the chart first, if there is a change of country, if we don't reset, 
	//there will be overlapping charts. you will notice only when you hover over them
	if(my_chart){
		my_chart.destroy();
	}

	my_chart = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label:'Cases',       //line name
				//data: [0, 20, 40, 50]
				data: cases_list,
				fill:false,   //makes that line thingy
				borderColor:'#ffffff',
				backgroundColor:'#ffffff',
				borderWidth:1,
				pointRadius: 2.5
			},{
				label:'Deaths',
				data: deaths_list,
				fill:false,   
				borderColor:'#f44336',
				backgroundColor:'#f44336',
				borderWidth:1,
				pointRadius: 2
			}
			,{
				label:'Recovered',
				data: recovered_list,
				fill:false,   
				borderColor:'#009688',
				backgroundColor:'#009688',
				borderWidth:1,
				pointRadius: 2.5
			}],
			//labels: ['January', 'February', 'March', 'April']
			//labels:dates ->2020-03-17
			labels:formatedDates //->17 Mar
		},
		options: {
			responsive:true,
			maintainAspectRatio:false,

		}
	});

}



//Chart x axis was initially dates. the dates were in 2020-03-17,2020-03-18..
//didn't like it.

const monthsNames = ["Jan","Feb","Mar","Apr","May",	"Jun","Aug","Sep","Oct","Nov","Dec",];
function formatDate(dateString) {
	let date = new Date(dateString);
  
	return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
  }