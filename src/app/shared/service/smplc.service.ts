import { Injectable } from '@angular/core';
import { endPoints } from 'src/app/shared/config/endpoint';
import { BehaviorSubject, Observable, empty, throwError, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmplcService {

  

  constructor() { }
}
