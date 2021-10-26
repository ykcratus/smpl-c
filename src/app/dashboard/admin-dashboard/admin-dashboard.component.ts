import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent {
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AdminDialog);
  }
}


@Component({
  selector: 'admin-dialog',
  templateUrl: 'dialog/admin-dialog.component.html',
  styleUrls:['dialog/admin-dialog.component.scss']
})
export class AdminDialog {}
