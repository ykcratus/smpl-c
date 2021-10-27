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


}
