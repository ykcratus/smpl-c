import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-inner-header",
  templateUrl: "./inner-header.component.html",
  styleUrls: ["./inner-header.component.scss"],
})
export class InnerHeaderComponent {


  constructor(public dialog: MatDialog) {}
  
  openInviteDialog(){
    this.dialog.open(InviteDialog);
  }

}


@Component({
  selector: 'invite-dialog',
  templateUrl: 'dialog/invite-dialog.component.html',
  styleUrls:['dialog/invite-dialog.component.scss']
})
export class InviteDialog {}