import { Serie } from './Serie.js';

import { series } from './Data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioSeries: HTMLElement = document.getElementById('promedioSeries')!;

renderSeriesInTable(series);

promedioSeries.innerHTML = `Seasons average: ${getPromedioSeries(series)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td class="text-primary">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getPromedioSeries(series: Serie[]): number {
    let promedio: number = 0;
    let suma: number = 0;
    series.forEach((serie) => suma = suma + serie.seasons);
    promedio = suma / series.length;
    return promedio;
  }
  

  