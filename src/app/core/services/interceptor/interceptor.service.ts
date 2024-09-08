import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppSpace} from "@app/core/enums/app.namespace";
import {MessageService} from "primeng/api";
import {ToastService} from "@app/core/services/toast/toast.service";


@Injectable({providedIn: 'root'})
export class InterceptorService implements HttpInterceptor {
  constructor(
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
      tap(
        (evt) => {
          if (evt instanceof HttpResponse) {
          }
        },
        (error) => {
        },
      ),
    );
  }

}
