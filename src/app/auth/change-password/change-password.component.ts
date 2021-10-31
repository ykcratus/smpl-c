import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "src/app/shared/service/smplc.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"]
})
export class ChangePasswordComponent {
  changePassword: FormGroup;
  isLoading:Boolean = false;
  constructor(private service: SmplcService, private formBuilder:FormBuilder) {}
  
ngOnInit() {
  this.changePassword = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });
}

  get changePasswordForm() { return this.changePassword.controls; }

  validateUserFromServer() {
    this.isLoading = true;
    if (this.changePassword.valid) {
      this.service.changePassword(this.changePassword.value).subscribe((res)=> {
        alert('Password updated successfully')
          this.isLoading = false;
        }, (err)=>{
          this.isLoading = false;
        }) 
    } else {
      this.changePassword.markAllAsTouched()
      alert('Please fill all mandatory field')
    }
  }



}

