import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: "app-assessment",
  templateUrl: "./assessment.component.html",
  styleUrls: ["./assessment.component.scss"],
})
export class AssessmentComponent implements OnInit {
 
  constructor() { }

  //Doughnut chart
  public doughnutChartLabels = ['Completed', 'Not Started', 'In Progress'];
  public doughnutChartData = [11.1, 60, 27.8];
  public doughnutChartType = 'doughnut' as ChartType;
  public doughnutChartLegend = false;
  public doughnutChartOptions: any = {
    cutoutPercentage: 55,
    responsive: true,
    tooltips: {
      enabled: true
    },
    legend: {
      display: true,
      position: 'bottom',
      fullWidth: false
    },
    // plugins: {
    //   datalabels: {
    //     font: {
    //       weight: 'bold',
    //       size: 19
    //     }
    //   }
    // }
  }
  public doughnutChartColors: any[] = [
    { 
      backgroundColor:["#24963B", "#F57D16", "#DDDFE1"] 
    }];

//Bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      fullWidth: false
    }
  };
  public barChartLabels = ['', '', '', ''];
  public barChartType = 'bar' as ChartType;
  public barChartLegend = true;
  public barChartData = [{ data: [41, 66, 75, 80], label: 'Series A'}];
  public chartColors: any[] = [
    { 
      backgroundColor:["#E20C0C", "#24963B", "#F57D16", "#DDDFE1"] 
    }];

  ngOnInit() {
  }
 

  //Progress Bar
  progress = 100;
  manageProgress() {
    if(this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress;
    }
  }

}
