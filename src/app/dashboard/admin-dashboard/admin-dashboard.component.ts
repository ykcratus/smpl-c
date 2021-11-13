import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "src/app/shared/service/smplc.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent {
  
  constructor(public dialog: MatDialog, private service: SmplcService) {}

  openDialog() {
    this.dialog.open(AdminDialog);
  }

  lockCompany(args) {
    let payload = {}
    this.service.uploadAssessorProfile(payload).subscribe((res) => {

    }, (err) => { })

  }
}


@Component({
  selector: 'admin-dialog',
  templateUrl: 'dialog/admin-dialog.component.html',
  styleUrls:['dialog/admin-dialog.component.scss']
})
export class AdminDialog {
  constructor(private service: SmplcService) { }
    addUser () {
        let payload = {}
        this.service.saveNewUser(payload).subscribe((res) => {

        }, (err) => { })

    }

}
