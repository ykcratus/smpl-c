import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { empty, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authReq: any;
  constructor(private auth: AuthService,
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    if (req.url.indexOf('/Authentication/login') > -1 || req.url.indexOf('/assets/') > -1 || req.url.indexOf('/forgot_password') > -1 || req.url.indexOf('/reset_password') > -1) {
      return next.handle(req);
    }

      this.authReq = req.clone({
        setHeaders: {
          "Access-Control-Allow-Origin": "*",
          "accept": "text/plain",
          "Content-Type": "application/json",
          "Authorization": JSON.parse(localStorage.getItem('currentUser')).token,
        }
      });


    return next.handle(this.authReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event && event.body && event.body.status_code === 500) {
           alert(event.body.message);
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 498 || error.status === 401 ) {
          if (this.router.url !== '/Account/UserLogin') {
            alert('Please login again')
          }
          this.router.navigate(['/login']);
        }
        return throwError(error);
      }));
  }
}
