import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
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
    this.getAllUser()
  }

  assessorLoginDetails() {
    let payload = { "iCompanyId": JSON.parse(localStorage.getItem('SMPLUser')).companyId ? 107 : 107, "userRole": JSON.parse(localStorage.getItem('SMPLUser')).userRole ? "Admin" : "Admin", "email": "stark@yopmail.com", "iAssessorId": 0}
    this.service.assessorLoginDetails(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }

  getAllUser() {
    let payload = {
      "pageSize": 0,
      "pageNumber": 0,
      "companyId": 1,
      "user_id": 0,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic29tZXRoaW5nQGdtYWlsMS5jb20iLCJqdGkiOiI2NmJjMTdjOS1kYzBiLTQ2M2MtYTY1Ni1jYjZjY2NhY2RjMzIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTYzNTc3MDA0MCwiaXNzIjoiVXNlciIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9.KuWqcCkg10_F2mWmb-VBIyFbQ2hqYYHB_JaGGsq9xPU"
    }
    this.service.getallUserList(payload).subscribe((res) => {
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
export class ManageUsersDialog {

  createUserForm: FormGroup;
  constructor(private service: SmplcService, private formBuilder :FormBuilder) { }

  ngOnInit() {
    this.createNewForm()
  }
  get createNewUserForm() { return this.createUserForm.controls }

  createNewForm () {
    this.createUserForm = this.formBuilder.group({
      sFirstName: ['', Validators.required],
      sDateIncorporated: ['', Validators.required],
      sfeinNumber: ['', Validators.required]
    })
  }

  createUser() {
    let payload = { }
    this.service.createNewUser(payload).subscribe((res) => {
      console.log(res)
    }, (err) => {

    })
  }
}