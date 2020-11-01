app.js
const ctx = document.getElementById("axes_line_chart").getContext("2d");
let my_chart;
function axesLinearChart(){
	my_chart = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label: 'First dataset',
				data: [0, 20, 40, 50]
			}],
			labels: ['January', 'February', 'March', 'April']
			//labels:dates
		},
		options: {
			responsive:true,
			maintainAspectRatio:false
		}
	},);

}
axesLinearChart();

index.html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="style.css">
    <title>COVID-19</title>
</head>
<body>

	 <div class="chart">
                <canvas id="axes_line_chart"></canvas>
            </div>

	 <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
      integrity="sha256-R4pqcOYV8lt7snxMQO/HSbVCFRPMdrhAFMH+vr9giYI="
      crossorigin="anonymous"
    ></script>
	
	 <script src="app.js"></script>
</body>

style.css
.chart{
    width: 80%;
    height: 70vh;
    min-height: 500px;

    margin: 0 auto;
    padding: 50px 0;
}