import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ManageUsersDialog);
  }

  

}


@Component({
  selector: 'admin-manage-dialog',
  templateUrl: 'dialog/manage-users-dialog.component.html',
  styleUrls:['dialog/manage-users-dialog.component.scss']
})
export class ManageUsersDialog {}