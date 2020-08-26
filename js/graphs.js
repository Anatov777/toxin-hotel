window.onload = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [25, 25, 50, 0],
          backgroundColor: ["#BC9CFF", "#6FCF97", "#FFE39C", "#000000"],
        },
      ],

      labels: ["Удовлетворительно", "Хорошо", "Великолепно", "Разочарован"],
    },
    options: {
      cutoutPercentage: 90,
      legend: {
        display: false,
      },
      legendCallback: function (chart) {
        // Return the HTML string here.
        console.log(chart.data.datasets);
        var text = [];
        text.push('<ul class="' + chart.id + '-legend">');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          text.push(
            '<li><span class="legend_area_color" style="background-color:' +
            chart.data.datasets[0].backgroundColor[i] +
            '"></span><span class="legend-text" id="legend-' +
              i +
              '-item" onclick="updateDataset(event, ' +
              "'" +
              i +
              "'" +
              ')">'
          );
          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i]);
          }
          text.push("</span></li>");
        }
        text.push("</ul>");
        console.log(text);
        for (let i = 1; i <= 3; i++) {
          [text[i], text[i + 6]] = [text[i + 6], text[i]];
        }
        return text.join("");
      },
    },
  });

  $("#do_legend").html(myDoughnutChart.generateLegend());

  updateDataset = function (e, datasetIndex) {
    var index = datasetIndex;
    var ci = myDoughnutChart;
    var meta = ci.getDatasetMeta(0);
    var result = meta.data[datasetIndex].hidden == true ? false : true;
    if (result == true) {
      meta.data[datasetIndex].hidden = true;
      $("#" + e.path[0].id).css("text-decoration", "line-through");
    } else {
      $("#" + e.path[0].id).css("text-decoration", "");
      meta.data[datasetIndex].hidden = false;
    }

    ci.update();
  };
};
