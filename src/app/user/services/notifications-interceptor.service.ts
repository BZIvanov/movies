import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationsInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request instanceof HttpRequest) {
      request = request.clone({
        setHeaders: {
          //Authorization: `'Kinvey ${localStorage.getItem('authtoken')}`
          //Authorization: `Basic ${btoa(constants.kinveyAppKey + ':' + constants.kinveyAppSecret)}`
        }
      });
    }
    
    //console.log(request)
    return next.handle(request);
  }
}