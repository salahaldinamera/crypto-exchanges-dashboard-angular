import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppSpace} from "@app/core/enums/app.namespace";
import {AuthService} from "@app/core/services/auth/auth.service";


@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = request.headers;
    let token = localStorage.getItem(AppSpace.LocalStorageKeysEnum.TOKEN);
    if (token)
      headers = new HttpHeaders({
        Authorization: 'Bearer ' + token.toString(),
      });
    const cloneReq = request.clone({headers});
    return next.handle(cloneReq).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {}
        },
        error: (error) => {
          this.handleError(error);
        }
      }),
    );
  }

  private handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 401:
        this.authService.signOut();
        break;
    }
  }

}
