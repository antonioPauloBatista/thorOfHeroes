import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingCoreService } from '../service/loading-core.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private activeReqeusts = 0;
  constructor(private loadingService: LoadingCoreService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeReqeusts === 0) {
      this.loadingService.show();
    }
    this.activeReqeusts++
    return next.handle(request).pipe(
      finalize(
        () => {
          this.activeReqeusts--;
          if (this.activeReqeusts == 0) {
            this.loadingService.hide();
          }
        }));
  }
}
