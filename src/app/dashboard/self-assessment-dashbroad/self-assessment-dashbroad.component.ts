import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from 'src/app/shared/service/smplc.service';
import { SelfAssessmentDashbroadDialog } from "./dialog/self-assessment-dashbroad-dialog.component";

@Component({
  selector: "app-self-assessment-dashbroad",
  templateUrl: "./self-assessment-dashbroad.component.html",
  styleUrls: ["./self-assessment-dashbroad.component.scss"],
})
export class SelfAssessmentDashbroadComponent {
  assesmentList: any;
  constructor(public dialog: MatDialog, private service: SmplcService) {}

  openDialog() {
    this.dialog.open(SelfAssessmentDashbroadDialog);
  }

  ngOnInit() {
    this.getDashboadAssesmet();
  }

  getDashboadAssesmet() {
    let payload = {
      "request": {
        "iCompanyID": JSON.parse(localStorage.getItem('SMPLUser')).companyId ? 61:61    }
    }
    this.service.getAllAssesmentDetails(payload).subscribe((res)=> {
      this.assesmentList = res.items;
    }, (err)=> {

    })
  }

  onDelete(args) {
    console.log(args)
    let payload = {
      "request": {
        "iCompanyID": JSON.parse(localStorage.getItem('SMPLUser')).companyId ,
        "iCompanyAssessmentID": args.iCompanyAssessmentID
      }
    }
    this.service.deleteAssesmentbyId(payload).subscribe((res) => {
     alert('Item got deleted sucessfully')
    }, (err) => {

    })
  }

}
