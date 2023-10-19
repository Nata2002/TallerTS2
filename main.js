import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioSeries = document.getElementById('promedioSeries');
renderSeriesInTable(series);
promedioSeries.innerHTML = "Seasons average: ".concat(getPromedioSeries(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                               <td class=\"text-primary\">").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioSeries(series) {
    var promedio = 0;
    var suma = 0;
    series.forEach(function (serie) { return suma = suma + serie.seasons; });
    promedio = suma / series.length;
    return promedio;
}


