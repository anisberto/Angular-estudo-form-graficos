import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-grafico-geral',
  templateUrl: './grafico-geral.component.html',
  styleUrls: ['./grafico-geral.component.css']
})
export class GraficoGeralComponent implements OnInit {

  dataAnalise: any[] = [41, 6, 4, 56, 10, 20, 15, 50, 1, 21, 1, 10]
  @ViewChild('structGraphi', { static: true }) element: ElementRef;
  @ViewChild('structGraphi2', { static: true }) element2: ElementRef;
  @ViewChild('structGraphi3', { static: true }) element3: ElementRef;

  ngOnInit(): void {
    new Chart(this.element.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [41, 6, 4, 56, 10, 20, 15, 50, 1, 21, 1, 10],
            label: 'Delpheiros',
            borderColor: 'red',
          },
          {
            data: [10, 5, 1, 2, 10, 10, 1, 5, 15, 25, 11, 10],
            label: 'Javeiros',
            borderColor: 'black',
          }],
        labels: ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        backgroundColor: [
          '#1f77b4'
        ]
      },
      options: {
        scales: {
          yAxes: [{
            id: 'left-y-axis',
            type: 'linear',
            position: 'left'
          }, {
            id: 'right-y-axis',
            type: 'linear',
            position: 'right'
          }]
        }
      }
    });
    new Chart(this.element2.nativeElement, {
      type: 'radar',
      data: {
        datasets: [
          {
            data: this.dataAnalise,
            label: 'Delpheiros',
            borderColor: 'red',
          },
          {
            data: [10, 5, 1, 2, 10, 10, 1, 5, 15, 25, 11, 10],
            label: 'Javeiros',
            borderColor: 'black',
          }],
        labels: ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        backgroundColor: [
          '#1f77b4'
        ]
      },
      options: {
        scales: {
          yAxes: [{
            id: 'left-y-axis',
            type: 'linear',
            position: 'left'
          }, {
            id: 'right-y-axis',
            type: 'linear',
            position: 'right'
          }]
        }
      }
    });
    new Chart(this.element3.nativeElement, {
      type: 'bar',
      data: {
        datasets: [
          {
            data: this.dataAnalise,
            barPercentage: 16,
            barThickness: 61,
            maxBarThickness: 18,
            minBarLength: 20,
            label: 'Delpheiros',
            borderColor: 'red',
          },
          {
            data: [10, 5, 1, 2, 10, 1, 1, 5, 15, 25, 11, 10],
            barPercentage: 16,
            barThickness: 61,
            maxBarThickness: 18,
            minBarLength: 20,
            label: 'Javeiros',
            borderColor: 'black',
          }],
        labels: ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        backgroundColor: [
          '#1f77b4'
        ]
      },
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              offsetGridLines: true
            },
            id: 'left-y-axis',
            type: 'linear',
            position: 'left'
          }, {
            id: 'right-y-axis',
            type: 'linear',
            position: 'right'
          },]
        }
      }
    });
  }

}
