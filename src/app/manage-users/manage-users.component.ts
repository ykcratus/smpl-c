import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "../shared/service/smplc.service";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent {
  constructor(public dialog: MatDialog, private service: SmplcService) {}

  openDialog() {
    this.dialog.open(ManageUsersDialog);
  }

  ngOnInit() {
    this.assessorLoginDetails()
  }

  assessorLoginDetails() {
    let payload = { "iCompanyId": JSON.parse(localStorage.getItem('currentUser')).companyId ? 107 : 107, "userRole": JSON.parse(localStorage.getItem('currentUser')).userRole ? "Admin" : "Admin", "email": "stark@yopmail.com", "iAssessorId": 0}
    this.service.assessorLoginDetails(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }
  

}


@Component({
  selector: 'admin-manage-dialog',
  templateUrl: 'dialog/manage-users-dialog.component.html',
  styleUrls:['dialog/manage-users-dialog.component.scss']
})
export class ManageUsersDialog {}