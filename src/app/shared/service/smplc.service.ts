import { Injectable } from '@angular/core';
import { endPoints } from 'src/app/shared/config/endpoint';
import { BehaviorSubject, Observable, empty, throwError, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmplcService {

  constructor(private http: HttpClient ) {}

  getAllCompanyDetails() {
    return this.http.get(endPoints.companyAssesment)
      .pipe(map((response: any) => {
        return response;
      }));
  }

//   {
//   "email": "something@gmail1.com",
//   "password": "FAq12345678!"
// email":"stark@yopmail.com","password":"MPLDemo01!
// }

  validateUser(param) {
    return this.http.post(endPoints.vaidateEmail, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }


  getAllAssesmentDetails(param) {
    return this.http.post(endPoints.dashboard, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  assesmentList(param) {
    return this.http.post(endPoints.subscription, param)
      .pipe(map((response: any) => {
        return response;
      }));
  }

    updateCompanyDetails(payload) {
      return this.http.post(endPoints.companyUdate, payload)
        .pipe(map((response: any) => {
          return response;
        }));
  } 
    getCompanyDetailsById(payload) {
      return this.http.post(endPoints.companyById, payload)
        .pipe(map((response: any) => {
          return response;
        }));
    } 

  assessorLoginDetails(payload) {
    return this.http.post(endPoints.accessorLogin, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  changePassword(payload) {
    return this.http.post(endPoints.changePassword, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  createNewUser(payload) {
    return this.http.post(endPoints.createNew, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  getAllCountry() {
    return this.http.get(endPoints.getAllCountry)
      .pipe(map((response: any) => {
        return response;
      }));
  } 

  getallUserList(payload) {
    return this.http.post(endPoints.getAllUsers, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  }


  saveNewUser(payload) {
    return this.http.post(endPoints.saveUser, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  } 

  getSubscriptionById(payload) {
    return this.http.post(endPoints.subscriptionById, payload)
      .pipe(map((response: any) => {
        return response;
      }));
  } 
}
