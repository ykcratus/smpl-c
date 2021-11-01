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
        "iCompanyAssessmentID": 0,
        "iCompanyID": 61
      }
    }
   // this.service.getAllAssesmentDetails(payload).subscribe((res)=> {
      this.assesmentList = [
          {
            "iCompanyAssessmentID": 4120,
            "iCompanyID": 61,
            "sAssessmentName": "TestAssesment",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 4,
            "dtLastModified": null,
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDEyMA==",
            "dtCreatedOn": "2020-12-24T15:17:17.873",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-07-14T07:25:21.52",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4136,
            "iCompanyID": 61,
            "sAssessmentName": "TestAssesment-A",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 1,
            "dtLastModified": null,
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDEzNg==",
            "dtCreatedOn": "2020-12-29T04:00:38.17",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-07-28T05:47:40.17",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4146,
            "iCompanyID": 61,
            "sAssessmentName": "TestAssesment-AD",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 2,
            "dtLastModified": null,
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDE0Ng==",
            "dtCreatedOn": "2021-01-09T06:50:23.64",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-01-09T06:50:54.507",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4162,
            "iCompanyID": 61,
            "sAssessmentName": "AssesmentAssesor",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 1,
            "dtLastModified": null,
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDE2Mg==",
            "dtCreatedOn": "2021-05-31T06:53:03.84",
            "sCreatedBy": "sanjeevrajput12@gmail.com",
            "dtModifiedOn": "2021-05-31T06:53:45.153",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4197,
            "iCompanyID": 61,
            "sAssessmentName": "Smpl_Assesment_1_Copy",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 2,
            "dtLastModified": "2021-07-29T03:29:01.59",
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDE5Nw==",
            "dtCreatedOn": "2021-07-29T03:18:49.917",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-07-29T07:29:08.623",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4202,
            "iCompanyID": 61,
            "sAssessmentName": "Smpl_98990",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 1,
            "dtLastModified": "2021-07-29T10:00:30.01",
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDIwMg==",
            "dtCreatedOn": "2021-07-29T09:56:20.77",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-07-29T14:00:36.94",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4211,
            "iCompanyID": 61,
            "sAssessmentName": "Smpl_98989",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 1,
            "dtLastModified": "2021-08-02T01:57:08.37",
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDIxMQ==",
            "dtCreatedOn": "2021-07-30T10:09:16.31",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-08-02T05:57:08.377",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          },
          {
            "iCompanyAssessmentID": 4212,
            "iCompanyID": 61,
            "sAssessmentName": "Smpl_w",
            "dtAssessmentCreationDate": null,
            "dtAssessmentStartDate": null,
            "iAssentStatusId": 2,
            "active": false,
            "iLevelId": 1,
            "dtLastModified": "2021-08-02T02:00:08.023",
            "sLastModifiedBy": null,
            "companyMaster": null,
            "assesmentStatusMaster": {
              "iStatusId": 2,
              "sStatusName": "In Progress",
              "dtCreatedOn": "2020-10-04T11:30:18.797",
              "sCreatedBy": "1",
              "dtModifiedOn": null,
              "sModifiedBy": null,
              "tenantId": 0,
              "token": null
            },
            "enCompanyAssessmentID": "NDIxMg==",
            "dtCreatedOn": "2021-08-02T01:59:27.177",
            "sCreatedBy": "sanjeevrajput228@gmail.com",
            "dtModifiedOn": "2021-08-02T06:00:08.027",
            "sModifiedBy": null,
            "tenantId": 0,
            "token": null
          }
        ]
    // }, (err)=> {

    // })
  }

}
