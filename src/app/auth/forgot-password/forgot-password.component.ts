import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "src/app/shared/service/smplc.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent {
  forgetPassword: FormGroup;
  isLoading:Boolean = false;
  constructor(private service: SmplcService, private formBuilder:FormBuilder) {}
  
ngOnInit() {
  this.forgetPassword = this.formBuilder.group({
    userName: ['', Validators.required],
  });
}

  validateUserFromServer() {
    this.isLoading = true;
    if (this.forgetPassword.controls['userName'].value !== "") {
    this.service.validateUser({ "sEmail":"something@gmail1.com"}).subscribe((res)=> {
      alert(res.sPasscode)
        this.isLoading = false;
      }, (err)=>{
        this.isLoading = false;
      }) 
    }
  }



}

