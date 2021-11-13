import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "../shared/service/smplc.service";

@Component({
  selector: "app-assessors",
  templateUrl: "./assessors.component.html",
  styleUrls: ["./assessors.component.scss"],
})
export class AssessorsComponent {
  constructor(private service: SmplcService) {}

  upload() {
    let payload = {};
    this.service.uploadAssessorProfile(payload).subscribe((res) => {
     
    }, (err) => { })

  }


}

