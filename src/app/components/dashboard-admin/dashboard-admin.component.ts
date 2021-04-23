import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  // chart() {
  //   var ctx = document.getElementById('myChart1');
  //   var myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Manager', 'Lecturer', 'Student', 'Guardian'],
  //       datasets: [{
  //         label: '331',
  //         data:[10, 21, 150, 150],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.5)',
  //           'rgba(255, 206, 86, 0.5)',
  //           'rgba(75, 192, 192, 0.5)',
  //           'rgba(153, 102, 255, 0.5)'
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }


  // chart2() {
  //   var ctx = document.getElementById('myChart2');
  //   var myChart1 = new Chart(ctx, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Male', 'Female', 'Other'],
  //       datasets: [{
  //         data:[76, 70, 4],
  //         backgroundColor: [
  //           'rgba(54, 162, 235, 0.5)',
  //           'rgba(255, 99, 132, 0.5)',
  //           'rgba(255, 206, 86, 0.5)',
  //         ],
  //         borderColor: [
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(255, 206, 86, 1)',
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //     }
  //   });
  // }

}
