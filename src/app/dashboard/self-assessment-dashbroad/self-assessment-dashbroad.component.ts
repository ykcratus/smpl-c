import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from 'src/app/shared/service/smplc.service';

@Component({
  selector: "app-self-assessment-dashbroad",
  templateUrl: "./self-assessment-dashbroad.component.html",
  styleUrls: ["./self-assessment-dashbroad.component.scss"],
})
export class SelfAssessmentDashbroadComponent {
  constructor(public dialog: MatDialog, private service: SmplcService) {}

  openDialog() {
    this.dialog.open(SelfAssessmentDashbroadDialog);
  }

  getDashboadAssesmet() {
    this.service.
  }

}


@Component({
  selector: 'self-assessment-dashbroad-dialog',
  templateUrl: 'dialog/self-assessment-dashbroad-dialog.component.html',
  styleUrls:['dialog/self-assessment-dashbroad-dialog.component.scss']
})
export class SelfAssessmentDashbroadDialog {}