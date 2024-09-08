import {Inject, Injectable} from "@angular/core";
import {MessageService} from "primeng/api";


@Injectable({providedIn: 'root'})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) {
  }

  showUnauthorized() {
    this.messageService.add({ severity: 'error', summary: 'UNAUTHORIZED' });
  }
}
