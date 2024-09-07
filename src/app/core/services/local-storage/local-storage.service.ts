import {Injectable} from "@angular/core";
import {AppSpace} from "../../enums/app.namespace";


/**
 * Local Storage Service
 *
 * Responsible for handling local storage items provided LocalStorageKeysEnum
 * @see AppSpace.LocalStorageKeysEnum
 *
 */
@Injectable({providedIn: 'root'})
export class LocalStorageService {

  getLocalStorageItem(key: AppSpace.LocalStorageKeysEnum) {
    return localStorage.getItem(key.toString());
  }

  setLocalStorageItem(key: AppSpace.LocalStorageKeysEnum, value: string) {
    localStorage.setItem(key.toString(), value);
  }

  getLocalStorageJsonItem(key: AppSpace.LocalStorageKeysEnum) {
    return localStorage.getItem(key.toString());
  }

  setLocalStorageJsonItem(key: AppSpace.LocalStorageKeysEnum, value: string) {
    localStorage.setItem(key.toString(), JSON.stringify(value));
  }

  removeLocalStorageItem(key: AppSpace.LocalStorageKeysEnum) {
    localStorage.removeItem(key.toString());
  }
}
