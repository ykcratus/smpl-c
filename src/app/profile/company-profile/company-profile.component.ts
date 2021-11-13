import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from "src/app/shared/service/smplc.service";

@Component({
  selector: "app-company-profile",
  templateUrl: "./company-profile.component.html",
  styleUrls: ["./company-profile.component.scss"],
})
export class CompanyProfileComponent {
  countryList: any;
  
  constructor(private service: SmplcService, private formBuilder : FormBuilder) {}
  myCompanyProfile: FormGroup;

  ngOnInit() {
    this.createForm()
    this.updateCompanyDetails()
    this.getAllcountryList();
  }

  createForm () {
    this.myCompanyProfile = this.formBuilder.group({
      sCompanyName: ['', Validators.required],
      sDateIncorporated: ['',Validators.required],
      sfeinNumber: ['', Validators.required],
      iStateId: ['', Validators.required],
      iCountryId: ['', Validators.required],
      dunsNumber: ['', Validators.required],
      url: ['', Validators.required],
      sMiddleName: ['', Validators.required],
      sLastName: ['', Validators.required],
      sFirstName: ['', Validators.required],
      address1: ['', Validators.required],
      zipCode: ['', Validators.required], 
      cityName: ['', Validators.required],
      phone: ['', Validators.required],
      sTitleInCompany: ['', Validators.required],
      sEmail: ['', Validators.required]
    })
  }

  get myCompanyProfileForm() { return this.myCompanyProfile.controls; }

  onRegister() {
   if(this.myCompanyProfile.valid) {
     this.updateCompanyDetails()
   } else {
     this.myCompanyProfile.markAllAsTouched()
     alert('Please fill all Mandatory field')
   }
  }

   updateCompanyDetails() {
     let payload = this.myCompanyProfile.value;
     this.service.updateCompanyDetails(payload).subscribe((res) => {
       console.log(res)
     }, (err) => {

     })
   }

   getAllcountryList(){
     this.service.getAllCountry().subscribe((res)=> {
       this.countryList = res.items;
     },(err)=>{})
   }

  onSelect(){
    console.log(this.myCompanyProfileForm.controls['iCountryId'])
  }

  upload() {
    let payload = {};
    this.service.uploadCompanyProfile(payload).subscribe((res) => {
      this.countryList = res.items;
    }, (err) => { })

  }


}

